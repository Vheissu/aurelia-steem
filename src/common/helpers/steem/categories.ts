import * as steem from '@steemit/steem-js';

export async function getTrendingCategories(after, limit = 20) {
    return new Promise((resolve, reject) => {
        steem.api.getTrendingCategories(after, limit, (err, res) => {
            if (err) {
                reject(err);
            }

            resolve(res);
        });
    });
};

export async function getBestCategories(after, limit = 20) {
    return new Promise((resolve, reject) => {
        steem.api.getBestCategories(after, limit, (err, res) => {
            if (err) {
                reject(err);
            }

            resolve(res);
        });
    });
};

export async function getActiveCategories(after, limit = 20) {
    return new Promise((resolve, reject) => {
        steem.api.getActiveCategories(after, limit, (err, res) => {
            if (err) {
                reject(err);
            }

            resolve(res);
        });
    });
};

export async function getRecentCategories(after, limit = 20) {
    return new Promise((resolve, reject) => {
        steem.api.getRecentCategories(after, limit, (err, res) => {
            if (err) {
                reject(err);
            }

            resolve(res);
        });
    });
};
