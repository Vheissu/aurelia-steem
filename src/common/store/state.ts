export interface State {
    accounts: any[];
    account: any;
    tags: any[];
    posts: any[];
}

export const initialState: State = {
    accounts: [],
    account: {},
    tags: [],
    posts: []
};
