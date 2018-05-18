import * as steem from '@steemit/steem-js';

export async function vote(wif, voter, author, permlink, weight) {
    return new Promise((resolve, reject) => {
        steem.broadcasr.vote(wif, voter, author, permlink, weight, (err, res) => {
            if (err) {
                reject(err);
            }

            console.log(res);

            resolve(res);
        });
    });
};
