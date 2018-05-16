import sc2 from 'sc2-sdk';

const sc = sc2.Initalize({
    baseURL: 'https://v2.steemconnect.com',
    app: 'your.app',
    callbackURL: 'http://localhost/complete',
    scope: ['vote', 'comment', 'delete_comment', 'comment_options', 'custom_json', 'claim_reward_balance', 'login', 'offline']
});

export default sc;
