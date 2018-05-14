import { PLATFORM } from 'aurelia-pal';

export const ApplicationRoutes = [
  { route: 'bookmarks', name: 'bookmarks', moduleId: PLATFORM.moduleName('../modules/bookmarks', 'bookmarks'), title: 'Bookmarks', nav: true },
  { route: 'drafts', name: 'drafts', moduleId: PLATFORM.moduleName('../modules/drafts', 'drafts'), title: 'Drafts', nav: true },
  { route: 'replies', name: 'replies', moduleId: PLATFORM.moduleName('../modules/replies', 'replies'), title: 'Replies', nav: true },
  { route: 'activity', name: 'activity', moduleId: PLATFORM.moduleName('../modules/activity', 'activity'), title: 'Activity', nav: true },
  { route: 'wallet', name: 'wallet', moduleId: PLATFORM.moduleName('../modules/wallet', 'wallet'), title: 'Wallet', nav: true },
  { route: 'editor', name: 'editor', moduleId: PLATFORM.moduleName('../modules/editor', 'editor'), title: 'Editor', nav: true },
  { route: 'settings', name: 'settings', moduleId: PLATFORM.moduleName('../modules/settings', 'settings'), title: 'Settings', nav: true },
  { route: 'edit-profile', name: 'edit-profile', moduleId: PLATFORM.moduleName('../modules/edit-profile', 'edit-profile'), title: 'Edit Profile', nav: true },
  { route: 'invite', name: 'invite', moduleId: PLATFORM.moduleName('../modules/invite', 'invite'), title: 'Invite', nav: true },
  { route: 'notifications', name: 'notifications', moduleId: PLATFORM.moduleName('../modules/notifications', 'notifications'), title: 'Notifications', nav: true },
  { route: 'user/:name', name: 'user', moduleId: PLATFORM.moduleName('../modules/user/index'), title: 'User', nav: false }
];
