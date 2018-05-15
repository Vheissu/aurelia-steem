import steem from '../../steem';

export async function getContent(author, permlink) {
    return new Promise((resolve, reject) => {
        steem.api.getContent(author, permlink, (err, res) => {
            if (err) {
                reject(err);
            }

            console.log(res);

            resolve(res);
        });
    });
};

export async function getContentReplies(author, permlink) {
    return new Promise((resolve, reject) => {
        steem.api.getContentReplies(author, permlink, (err, res) => {
            if (err) {
                reject(err);
            }

            console.log(res);

            resolve(res);
        });
    });
};

export async function getDiscussionsByAuthorBeforeDate(author, startPermlink, beforeDate, limit = 20) {
    return new Promise((resolve, reject) => {
        steem.api.getDiscussionsByAuthorBeforeDate(author, startPermlink, beforeDate, limit, (err, res) => {
            if (err) {
                reject(err);
            }

            console.log(res);

            resolve(res);
        });
    });
};

export async function getRepliesByLastUpdate(startAuthor, startPermlink, limit = 20) {
    return new Promise((resolve, reject) => {
        steem.api.getRepliesByLastUpdate(startAuthor, startPermlink, limit, (err, res) => {
            if (err) {
                reject(err);
            }

            console.log(res);

            resolve(res);
        });
    });
};
