import { LOAD_FEED } from './common/store/constants';
import { autoinject } from 'aurelia-framework';
import { RouterConfiguration, Router } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';
import { Store, connectTo } from 'aurelia-store';

import { ApplicationRoutes } from './common/routes';

import { State } from './common/store/state';
import { CAST_VOTE, LOAD_POSTS, LOAD_ACCOUNTS, LOAD_ACCOUNT } from 'common/store/constants';
import { castVote, loadAccounts, loadAccount, loadFeed, loadPosts } from 'common/store/actions';

@autoinject()
export class App {
    private router: Router;

    constructor(private store: Store<State>) {
        this.store.registerAction(LOAD_POSTS, loadPosts);
        this.store.registerAction(LOAD_ACCOUNTS, loadAccounts);
        this.store.registerAction(LOAD_ACCOUNT, loadAccount);
        this.store.registerAction(LOAD_FEED, loadFeed);
        this.store.registerAction(CAST_VOTE, castVote);
    }

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'Aurelia Steem';
        config.options.pushState = true;
        config.options.root = '/';

        config.map(ApplicationRoutes);

        config.mapUnknownRoutes(PLATFORM.moduleName('./modules/not-found', 'not-found'));

        this.router = router;
    }
}
