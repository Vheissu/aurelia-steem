import steem from '../../steem';

export async function getFollowers(following, startFollower, followType, limit = 20) {
    return new Promise((resolve, reject) => {
        steem.api.getFollowers(following, startFollower, followType, limit, (err, res) => {
            if (err) {
                reject(err);
            }

            console.log(res);

            resolve(res);
        });
    });
};

export async function getFollowing(follower, startFollowing, followType, limit = 20) {
    return new Promise((resolve, reject) => {
        steem.api.getFollowing(follower, startFollowing, followType, limit, (err, res) => {
            if (err) {
                reject(err);
            }

            console.log(res);

            resolve(res);
        });
    });
};

export async function getFollowCount(account) {
    return new Promise((resolve, reject) => {
        steem.api.getFollowCount(account, (err, res) => {
            if (err) {
                reject(err);
            }

            console.log(res);

            resolve(res);
        });
    });
};
