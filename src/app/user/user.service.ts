
import {User} from './user';
export class UserService {
  // private _user: User;

  get user(): User {
    return new User('zhangsan', true);
  }
}
