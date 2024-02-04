import { AutoMapper, ProfileBase } from '@nartc/automapper';
import { User } from '../../services/models/User';
import { UserResponse } from '../responses/user/UserResponse';

export class ControllerMapperProfile extends ProfileBase {
  constructor(mapper: AutoMapper) {
    super();
    mapper.createMap(User, UserResponse).reverseMap();
  }
}
