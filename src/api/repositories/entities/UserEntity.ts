import 'reflect-metadata';
import { Entity, Column, Index, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { UserRole } from '../../enums/UserRoles';
import { UserStatus } from '../../enums/UserStatus';
import { AutoMap } from '@nartc/automapper';
import { AuthProviderEntity } from './AuthProviderEntity';

@Entity('users')
export class UserEntity {
  @AutoMap()
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @AutoMap()
  @IsNotEmpty()
  @Column({ name: 'full_name', type: 'varchar', length: 25 })
  public fullName: string;

  @AutoMap()
  @IsEmail()
  @Index({ unique: true })
  @Column()
  public email: string;

  @AutoMap()
  @Column({ name: 'password_hash', nullable: true })
  public passwordHash: string;

  @AutoMap()
  @Column({ type: 'enum', enum: UserRole, default: UserRole.USER })
  role: string;

  @AutoMap()
  @IsNotEmpty()
  @Column({ type: 'enum', enum: UserStatus, default: UserStatus.NEW })
  public status: string;

  @AutoMap()
  @Column({ name: 'verification_token', nullable: true })
  @IsNotEmpty()
  verificationToken: string;

  @AutoMap()
  @Column({ name: 'is_email_sent', default: false })
  isEmailSent: boolean;

  @AutoMap()
  @Column({ name: 'reset_password_token', nullable: true })
  @IsNotEmpty()
  resetPasswordToken: string;

  @OneToMany(() => AuthProviderEntity, (provider) => provider.user)
  public authProviders: AuthProviderEntity[];

  @AutoMap()
  @Column({ name: 'is_online', type: 'boolean', default: false })
  isOnline: boolean;

  @AutoMap()
  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @AutoMap()
  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt: Date;
}
