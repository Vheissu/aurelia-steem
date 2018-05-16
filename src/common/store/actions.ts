import { Container } from 'aurelia-framework';
import { getAccounts, vote, getDiscussionsByFeed, getDiscussionsByTrending } from '../helpers';

export function setUser(state, accessToken, tokenExpires, username) {
    return { ...state, ...{ accessToken, tokenExpires, username } };
}

export function clearUser(state) {
    return { ...state, ...{
        accessToken: '',
        tokenExpires: '',
        username: '',
        profile: {
            about: '',
            coverImage: '',
            location: '',
            name: '',
            profileImage: '',
            rep: '',
            balance: ''
        }
    } };
}

export function setProfile(state, social, name, profileImage, about, location, coverImage, rep, balance) {
    return { ...state, ...{ profile: about, coverImage, location, name, profileImage, rep, social, balance } };
}

export function setNewPost(state, newPost) {
    return { ...state, ...{ newPost } };
}

export function resetNewPost(state) {
    return { ...state, ...{ 
        newPost: {
            title: '',
            body: '',
            tags: ''
        } 
    } };
}

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

export async function loadTrending(state) {
    const trendingPosts = await getDiscussionsByTrending({ limit: 25 });
    return { ...state, ...{ posts: trendingPosts } };
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
