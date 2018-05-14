import { PLATFORM } from 'aurelia-pal';
import { RouterConfiguration, Router } from 'aurelia-router';

export class UserIndex {
  private router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.map([
      {
        route: '',
        moduleId: PLATFORM.moduleName('./profile'),
        name: 'user-profile',
        nav: true,
        title: 'Profile'
      },
      {
        route: '/comments',
        moduleId: PLATFORM.moduleName('./comments'),
        name: 'user-comments',
        nav: true,
        title: 'Comments'
      },
      {
        route: '/followers',
        moduleId: PLATFORM.moduleName('./followers'),
        name: 'user-followers',
        nav: true,
        title: 'Followers'
      },
      {
        route: '/followed',
        moduleId: PLATFORM.moduleName('./followed'),
        name: 'user-followed',
        nav: true,
        title: 'Followed'
      },
      {
        route: '/reblogs',
        moduleId: PLATFORM.moduleName('./reblogs'),
        name: 'user-reblogs',
        nav: true,
        title: 'Reblogs'
      },
      {
        route: '/feed',
        moduleId: PLATFORM.moduleName('./feed'),
        name: 'user-feed',
        nav: true,
        title: 'Feed'
      },
      {
        route: '/transfers',
        moduleId: PLATFORM.moduleName('./transfers'),
        name: 'user-transfers',
        nav: true,
        title: 'Transfers'
      },
      {
        route: '/activity',
        moduleId: PLATFORM.moduleName('./activity'),
        name: 'user-activity',
        nav: true,
        title: 'Activity'
      },
    ]);

    this.router = router;
  }
}
