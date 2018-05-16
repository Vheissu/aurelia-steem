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
        if (typeof params.name === 'undefined') {
            return new Redirect('/');
        }
    }

    async activate(params) {
        const { name } = params;

        await this.store.dispatch(LOAD_ACCOUNT, name);
        await this.store.dispatch(LOAD_FEED, name);
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
