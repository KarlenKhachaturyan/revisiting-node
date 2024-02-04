import { AutoMap } from '@nartc/automapper';

export class User {
  @AutoMap()
  public id: string;

  @AutoMap()
  public fullName: string;

  @AutoMap()
  public email: string;

  @AutoMap()
  public passwordHash: string;

  @AutoMap()
  public status: string;

  @AutoMap()
  public role: string;

  @AutoMap()
  verificationToken: string;

  @AutoMap()
  isEmailSent: boolean;

  @AutoMap()
  resetPasswordToken: string;

  @AutoMap()
  public createdAt: Date;

  @AutoMap()
  public updatedAt: Date;

  public get welcome(): string {
    return `Welcome ${this.fullName}`;
  }
}
