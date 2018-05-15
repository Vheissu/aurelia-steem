import steem from '../../steem';

export async function getDiscussionsByTrending(query) {
    return new Promise((resolve, reject) => {
        steem.api.getDiscussionsByTrending(query, (err, res) => {
            if (err) {
                reject(err);
            }

            resolve(res);
        });
    });
};

export async function getDiscussionsByCreated(query) {
    return new Promise((resolve, reject) => {
        steem.api.getDiscussionsByCreated(query, (err, res) => {
            if (err) {
                reject(err);
            }

            resolve(res);
        });
    });
};

export async function getDiscussionsByActive(query) {
    return new Promise((resolve, reject) => {
        steem.api.getDiscussionsByActive(query, (err, res) => {
            if (err) {
                reject(err);
            }

            resolve(res);
        });
    });
};

export async function getDiscussionsByCashout(query) {
    return new Promise((resolve, reject) => {
        steem.api.getDiscussionsByActive(query, (err, res) => {
            if (err) {
                reject(err);
            }

            resolve(res);
        });
    });
};

export async function getDiscussionsByPayout(query) {
    return new Promise((resolve, reject) => {
        steem.api.getDiscussionsByPayout(query, (err, res) => {
            if (err) {
                reject(err);
            }

            resolve(res);
        });
    });
};

export async function getDiscussionsByVotes(query) {
    return new Promise((resolve, reject) => {
        steem.api.getDiscussionsByVotes(query, (err, res) => {
            if (err) {
                reject(err);
            }

            resolve(res);
        });
    });
};

export async function getDiscussionsByChildren(query) {
    return new Promise((resolve, reject) => {
        steem.api.getDiscussionsByVotes(query, (err, res) => {
            if (err) {
                reject(err);
            }

            resolve(res);
        });
    });
};

export async function getDiscussionsByHot(query) {
    return new Promise((resolve, reject) => {
        steem.api.getDiscussionsByHot(query, (err, res) => {
            if (err) {
                reject(err);
            }

            resolve(res);
        });
    });
};

export async function getDiscussionsByFeed(query) {
    return new Promise((resolve, reject) => {
        steem.api.getDiscussionsByFeed(query, (err, res) => {
            if (err) {
                reject(err);
            }

            resolve(res);
        });
    });
};

export async function getDiscussionsByBlog(query) {
    return new Promise((resolve, reject) => {
        steem.api.getDiscussionsByBlog(query, (err, res) => {
            if (err) {
                reject(err);
            }

            resolve(res);
        });
    });
};

export async function getDiscussionsByComments(query) {
    return new Promise((resolve, reject) => {
        steem.api.getDiscussionsByComments(query, (err, res) => {
            if (err) {
                reject(err);
            }

            resolve(res);
        });
    });
};
