import { LOAD_ACCOUNTS } from '../../common/store/constants';
import { State } from '../../common/store/state';
import { Store, connectTo } from 'aurelia-store';
import { autoinject } from 'aurelia-dependency-injection';

@autoinject()
@connectTo()
export class Home {
    public state: State;

    constructor(private store: Store<State>) {
        this.store.dispatch(LOAD_ACCOUNTS);
    }
}
