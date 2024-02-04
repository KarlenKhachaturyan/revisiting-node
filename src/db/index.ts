import appDataSource from './AppDataSource';

export class TypeORM {
  static async init() {
    try {
      await appDataSource.initialize();
      console.log('--------------------');
      console.log('Connected to db!');
      console.log('--------------------');
    } catch (err) {
      console.log('Error during db connection initialization:', err);
      throw err;
    }
  }
}
