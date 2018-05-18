import { loadAccount, loadFeed } from 'common/store/actions';
import { LOAD_FEED, LOAD_ACCOUNT } from '../../common/store/constants';
import { State } from '../../common/store/state';
import { autoinject, computedFrom } from 'aurelia-framework';
import { connectTo, Store } from 'aurelia-store';
import { Redirect, Router } from 'aurelia-router';

@autoinject()
@connectTo()
export class Profile {
    public state: State;

    constructor(private router: Router, private store: Store<State>) {

    }

    canActivate(params) {
        if (typeof params.username === 'undefined') {
            return new Redirect('/');
        }
    }

    async activate(params) {
        const { username } = params;

        await loadAccount(username);
        await loadFeed(username);
    }

    @computedFrom('state.account')
    get user() {
        return this.state ? this.state.account : {};
    }

    @computedFrom('state.posts')
    get posts() {
        return this.state ? this.state.posts : [];
    }

    @computedFrom('state.account')
    get profile() {
        let metadata: any = {};

        if (this.state) {
            try {
                metadata = JSON.parse(this.state.account.json_metadata);
                metadata = metadata.profile;
            } catch (e) {
                metadata = {};
            }
        }

        return metadata;
    }
}
