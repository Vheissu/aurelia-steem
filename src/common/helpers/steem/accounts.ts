import * as steem from '@steemit/steem-js';

export async function getAccounts(accounts = [ 'ned' ]): Promise<any> {
    return new Promise((resolve, reject) => {
        steem.api.getAccounts(accounts, (err, res) => {
            if (err) {
                reject(err);
            }

            console.log(res);

            resolve(res);
        });
    });
};

export async function getAccountReferences(accountId) {
    return new Promise((resolve, reject) => {
        steem.api.getAccountReferences(accountId, (err, res) => {
            if (err) {
                reject(err);
            }

            console.log(res);

            resolve(res);
        });
    });
};

export async function lookupAccountNames(accounts = [ 'ned' ]) {
    return new Promise((resolve, reject) => {
        steem.api.lookupAccountNames(accounts, (err, res) => {
            if (err) {
                reject(err);
            }

            console.log(res);

            resolve(res);
        });
    });
};

export async function lookupAccounts(lowerBoundName, limit = 20) {
    return new Promise((resolve, reject) => {
        steem.api.lookupAccountNames(lowerBoundName, limit, (err, res) => {
            if (err) {
                reject(err);
            }

            console.log(res);

            resolve(res);
        });
    });
};

export async function getAccountCount() {
    return new Promise((resolve, reject) => {
        steem.api.getAccountCount((err, res) => {
            if (err) {
                reject(err);
            }

            console.log(res);

            resolve(res);
        });
    });
};

export async function getAccountHistory(account, from, limit = 20) {
    return new Promise((resolve, reject) => {
        steem.api.getAccountHistory(account, from, limit, (err, res) => {
            if (err) {
                reject(err);
            }

            console.log(res);

            resolve(res);
        });
    });
};

export async function getOwnerHistory(account) {
    return new Promise((resolve, reject) => {
        steem.api.getOwnerHistory(account, (err, res) => {
            if (err) {
                reject(err);
            }

            console.log(res);

            resolve(res);
        });
    });
};

export async function getAccountVotes(voter) {
    return new Promise((resolve, reject) => {
        steem.api.getAccountVotes(voter, (err, res) => {
            if (err) {
                reject(err);
            }

            resolve(res);
        });
    });
};
