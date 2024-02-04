import 'reflect-metadata';
import { createExpressServer } from 'routing-controllers';
import config from '../config';
import { AuthController } from './controllers/AuthController';

export class API {
  static async init() {
    const app = createExpressServer({
      cors: true,
      controllers: [AuthController],
      middlewares: [],
      routePrefix: '/api',

      validation: {
        whitelist: true,
        forbidNonWhitelisted: true,
      },
    });

    app.listen(config.port, () => {
      console.log(`Server start http://localhost:${config.port}`);
    });
  }
}
