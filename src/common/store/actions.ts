import store from './store';

import * as Mutations from './mutations';

export async function loadTrending() {
    await store.dispatch(Mutations.loadTrending);
}
export async function loadAccount(name) {
    await store.dispatch(Mutations.loadAccount, name);
}

export async function loadFeed(name) {
    await store.dispatch(Mutations.loadFeed, name);
}
