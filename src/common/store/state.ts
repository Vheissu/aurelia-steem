export interface State {
    accounts: any[];
    account: any;
    tags: any[];
    posts: any[];
    wif: string;
    accessToken: string;
    tokenExpires: string;
    username: string;
    profile: {
        balance: string;
        about: string;
        coverImage: string;
        location: string;
        name: string;
        profileImage: string;
        rep: string;
    },
    newPost: {
        title: string;
        body: string;
        tags: string;
    }
}

export const initialState: State = {
    accounts: [],
    account: {},
    tags: [],
    posts: [],
    wif: '',
    accessToken: '',
    tokenExpires: '',
    username: '',
    profile: {
        balance: '',
        about: '',
        coverImage: '',
        location: '',
        name: '',
        profileImage: '',
        rep: ''
    },
    newPost: {
        title: '',
        body: '',
        tags: ''
    }
};
