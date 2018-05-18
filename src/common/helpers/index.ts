import * as steem from '@steemit/steem-js';

export * from './steem/accounts';
export * from './steem/actions';
export * from './steem/categories';
export * from './steem/content';
export * from './steem/discussions';
export * from './steem/follow';
export * from './steem/formatters';

export async function getActiveVotes(author, permlink) {
    return new Promise((resolve, reject) => {
        steem.api.getActiveVotes(author, permlink, (err, res) => {
            if (err) {
                reject(err);
            }

            resolve(res);
        });
    });
};

export async function getTrendingTags(afterTag, limit = 20) {
    return new Promise((resolve, reject) => {
        steem.api.getTrendingTags(afterTag, limit, (err, res) => {
            if (err) {
                reject(err);
            }

            resolve(res);
        });
    });
};
