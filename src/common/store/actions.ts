import { Container } from 'aurelia-dependency-injection';
import { Api } from '../../services/api';

const api = Container.instance.get(Api);

export async function getAccount(state, name) {
  // Get user account and load data
  return {...state, ...{}};
}

export async function getPosts(state) {
  return {...state, ...{}}
}

export async function getPostContent(state, author, permlink) {
  return {...state, ...{}};
}

export async function getFeed(state) {
  return {...state, ...{}};
}

export async function getFeedContent(state, sortBy = 'trending', category, limit = 20) {
  return {...state, ...{}};
}

export async function getMoreFeedContent(state, sortBy, category, limit = 20) {
  return {...state, ...{}};
}

export async function getUserComments(state, username, limit = 20) {
  return {...state, ...{}};
}

export async function getMoreUserComments(state, username, limit = 20) {
  return {...state, ...{}};
}

export async function setSelectedProject(state, projectId) {
    return {...state, ...{ projectId }};
}

export async function setUser(state, user) {
    return {...state, ...{ user }};
}

export function setCategory(state, currentCategory) {
    return {...state, ...{ currentCategory }};
}
