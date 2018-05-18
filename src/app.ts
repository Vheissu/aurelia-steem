import { autoinject } from 'aurelia-framework';
import { RouterConfiguration, Router } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';

import { ApplicationRoutes } from './common/routes';

export class App {
    private router: Router;

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'Aurelia Steem';
        config.options.pushState = true;
        config.options.root = '/';

        config.map(ApplicationRoutes);

        config.mapUnknownRoutes(PLATFORM.moduleName('./modules/not-found', 'not-found'));

        this.router = router;
    }
}
