import Container from 'typedi';
import config from '../../config';
import passport from 'passport';
import passportJWT from 'passport-jwt';
import { Profile, Strategy as GitHubStrategy } from 'passport-github2';
import { UserService } from '../../api/services/UserService';
import { User } from '../../api/services/models/User';
import { AuthProvider } from '../../api/services/models/AuthProvider';
import { AuthService } from '../../api/services/AuthService';
import { Provider } from '../../api/enums/Provider';

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

const SetupPassport = () => {
  passport.use(
    new JWTStrategy(
      {
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.JWTSecret,
      },
      async (jwtPayload, done) => {
        try {
          if (!jwtPayload.id) {
            done(null, false);
          }

          const userService = Container.get<UserService>(UserService);
          const user = await userService.getUser(jwtPayload.id);

          !user ? done(null, false) : done(null, user);
        } catch (error) {
          return done(error, false);
        }
      },
    ),
  );

  passport.use(
    new GitHubStrategy(
      {
        clientID: config.githubClientId,
        clientSecret: config.githubClientSecret,
        scope: ['user:email', 'read:user'],
        callbackURL: 'http://localhost:3220/api/auth/github/callback',
      },
      async (accessToken: string, refreshToken: string, profile: Profile, done: (error: any, user?: any) => void) => {
        try {
          const email = profile.emails && profile.emails[0].value;
          if (!email) {
            return done(new Error('GitHub account has no public email.'));
          }
          const newUser = new User();
          newUser.email = email;
          if (profile.displayName) {
            newUser.fullName = profile.displayName;
          }
          const authProvider = new AuthProvider();
          authProvider.providerId = profile.id;
          authProvider.provider = Provider.GITHUB;

          const authService = Container.get<AuthService>(AuthService);
          const user = await authService.findOrCreateUserWithProvider(newUser, authProvider);

          return done(null, user);
        } catch (error) {
          return done(error);
        }
      },
    ),
  );
  return passport;
};

export default SetupPassport;
