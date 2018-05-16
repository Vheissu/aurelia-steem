import { Container } from 'aurelia-framework';
import { getAccounts, vote, getDiscussionsByFeed } from '../helpers';

export async function castVote(state, wif, voter, author, permlink, weight) {
    const castedVoted = await vote(wif, voter, author, permlink, weight);

    return state;
}

export async function loadAccounts(state, names) {
    const accounts = await getAccounts(names);

    return {...state, ...{ accounts } };
}

export async function loadAccount(state, name) {
    // Get user account and load data
    const fetchedAccount = await getAccounts([ name ]);

    let account = null;

    if (fetchedAccount.length) {
        account = fetchedAccount[0];
    }

    return { ...state, ...{ account } };
}

export async function loadFeed(state, name) {
    const posts = await getDiscussionsByFeed({ tag: name, limit: 100 });

    return { ...state, ... { posts } };
}

export async function loadPosts(state) {
    return { ...state, ...{} }
}

export async function loadPostContent(state, author, permlink) {
    return { ...state, ...{} };
}

export async function loadFeedContent(state, sortBy = 'trending', category, limit = 20) {
    return { ...state, ...{} };
}

export async function loadMoreFeedContent(state, sortBy, category, limit = 20) {
    return { ...state, ...{} };
}

export async function loadUserComments(state, username, limit = 20) {
    return { ...state, ...{} };
}

export async function loadMoreUserComments(state, username, limit = 20) {
    return { ...state, ...{} };
}

export async function setSelectedProject(state, projectId) {
    return { ...state, ...{ projectId } };
}

export async function setUser(state, user) {
    return { ...state, ...{ user } };
}

export function setCategory(state, currentCategory) {
    return { ...state, ...{ currentCategory } };
}
