import { LOAD_TRENDING } from '../../common/store/constants';
import { State } from '../../common/store/state';
import { Store, connectTo } from 'aurelia-store';
import { autoinject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-binding';

@autoinject()
@connectTo()
export class Home {
    public state: State;

    constructor(private store: Store<State>) {
        this.store.dispatch(LOAD_TRENDING);
    }

    @computedFrom('state.posts')
    get posts() {
        return this.state.posts;
    }
}
