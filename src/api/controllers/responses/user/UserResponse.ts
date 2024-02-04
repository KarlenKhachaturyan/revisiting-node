import { AutoMap } from '@nartc/automapper';

export class UserResponse {
  @AutoMap()
  public id: string;

  @AutoMap()
  public fullName: string;

  @AutoMap()
  public email: string;

  @AutoMap()
  public status: string;

  @AutoMap()
  public role: string;
}
