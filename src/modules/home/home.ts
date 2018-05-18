import { loadTrending } from 'common/store/actions';
import { State } from '../../common/store/state';
import { Store, connectTo } from 'aurelia-store';
import { autoinject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-binding';

@autoinject()
@connectTo()
export class Home {
    public state: State;

    constructor() {
        loadTrending();
    }

    @computedFrom('state.posts')
    get posts() {
        return this.state.posts;
    }
}
