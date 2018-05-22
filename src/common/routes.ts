import { PLATFORM } from 'aurelia-pal';

export const ApplicationRoutes = [
    { route: ['', 'home'], name: 'home', moduleId: PLATFORM.moduleName('modules/home/home'), title: 'Home', nav: true },
    { route: ':username', name: 'user', moduleId: PLATFORM.moduleName('modules/user/user'), title: 'User', nav: false },
    { route: 'bookmarks', name: 'bookmarks', moduleId: PLATFORM.moduleName('modules/bookmarks/bookmarks', 'bookmarks'), title: 'Bookmarks', nav: true },
    { route: 'drafts', name: 'drafts', moduleId: PLATFORM.moduleName('modules/drafts/drafts', 'drafts'), title: 'Drafts', nav: true },
    { route: 'replies', name: 'replies', moduleId: PLATFORM.moduleName('modules/replies/replies', 'replies'), title: 'Replies', nav: true },
    { route: 'activity', name: 'activity', moduleId: PLATFORM.moduleName('modules/activity/activity', 'activity'), title: 'Activity', nav: true },
    { route: 'wallet', name: 'wallet', moduleId: PLATFORM.moduleName('modules/wallet/wallet', 'wallet'), title: 'Wallet', nav: true },
    { route: 'editor', name: 'editor', moduleId: PLATFORM.moduleName('modules/editor/editor', 'editor'), title: 'Editor', nav: true },
    { route: 'settings', name: 'settings', moduleId: PLATFORM.moduleName('modules/settings/settings', 'settings'), title: 'Settings', nav: true },
    { route: 'edit-profile', name: 'edit-profile', moduleId: PLATFORM.moduleName('modules/edit-profile/edit-profile', 'edit-profile'), title: 'Edit Profile', nav: true },
    { route: 'invite', name: 'invite', moduleId: PLATFORM.moduleName('modules/invite/invite', 'invite'), title: 'Invite', nav: true },
    { route: 'notifications', name: 'notifications', moduleId: PLATFORM.moduleName('modules/notifications/notifications', 'notifications'), title: 'Notifications', nav: true },
    { route: ':author/:permlink', name: 'view-post', moduleId: PLATFORM.moduleName('modules/content/content'), title: 'Post', nav: false }
];
