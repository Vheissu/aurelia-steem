import * as steem from '@steemit/steem-js';

export async function accountValue(account) {
    return new Promise((resolve, reject) => {
        resolve(steem.formatter.accountValue(account));
    });
};

export async function accountReputation(account) {
    return new Promise((resolve, reject) => {
        resolve(steem.formatter.accountValue(account));
    });
};
