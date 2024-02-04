import appDataSource from './AppDataSource';

export class TypeORM {
  static async init() {
    try {
      await appDataSource.initialize();
      console.log('Connected to db!');
    } catch (err) {
      console.log('Error during db connection initialization:', err);
      throw err;
    }
  }
}
