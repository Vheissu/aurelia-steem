import { autoinject } from 'aurelia-framework';
import { RouterConfiguration, Router } from 'aurelia-router';
import { PLATFORM, DOM } from 'aurelia-pal';
import { Store, connectTo } from 'aurelia-store';

import { ApplicationRoutes } from './common/routes';

import { State } from './common/store/state';
import { GET_POSTS } from 'common/store/constants';
import { getPosts } from 'common/store/actions';

@autoinject()
export class App {
  private router: Router;

  constructor(private store: Store<State>) {
    this.setupStore();
  }

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Aurelia Steem';
    config.options.pushState = true;
    config.options.root = '/';

    config.map(ApplicationRoutes);

    config.mapUnknownRoutes(PLATFORM.moduleName('./modules/not-found', 'not-found'));

    this.router = router;
  }

  setupStore() {
    this.store.registerAction(GET_POSTS, getPosts);
  }
}
