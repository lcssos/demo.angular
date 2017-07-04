import {HeroService} from './hero.service';
import {Logger} from '../logger.service';
import {UserService} from '../user/user.service';
import {Http} from "@angular/http";

let heroServiceFactory = (logger: Logger, userService: UserService, http: Http) => {
  return new HeroService(logger, userService.user.isAuthorized, http);
};

export let heroServiceProvider = {
    provide: HeroService,
    useFactory: heroServiceFactory,
    deps: [Logger, UserService]
  };
