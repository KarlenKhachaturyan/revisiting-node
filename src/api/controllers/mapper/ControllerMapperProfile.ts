import { AutoMapper, ProfileBase } from '@nartc/automapper';
import { User } from '../../services/models/User';
import { Auth } from '../../services/models/Auth';
import { UserResponse } from '../responses/user/UserResponse';
import { AuthResponse } from '../responses/auth/AuthResponse';

export class ControllerMapperProfile extends ProfileBase {
  constructor(mapper: AutoMapper) {
    super();
    mapper.createMap(User, UserResponse).reverseMap();
    mapper.createMap(Auth, AuthResponse).reverseMap();
  }
}
