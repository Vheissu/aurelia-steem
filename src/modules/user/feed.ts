import { LOAD_FEED } from '../../common/store/constants';
import { State } from '../../common/store/state';
import { autoinject, computedFrom } from 'aurelia-framework';
import { connectTo, Store } from 'aurelia-store';
import { Redirect } from 'aurelia-router';

@autoinject()
@connectTo()
export class Feed {
    public state: State;

    constructor(private store: Store<State>) {

    }

    canActivate(params) {
        if (typeof params.name === 'undefined') {
            return new Redirect('/');
        }
    }

    async activate(params) {
        const { name } = params;

        await this.store.dispatch(LOAD_FEED, name);
    }

    @computedFrom('state.posts')
    get content() {
        return this.state.posts;
    }
}
