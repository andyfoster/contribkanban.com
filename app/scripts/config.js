(function (angular) {
  'use strict';
  angular.module('appContribkanban').config(['$compileProvider', '$routeProvider', '$mdThemingProvider', '$locationProvider', 'AngularyticsProvider', 'DoubleClickProvider', function ($compileProvider, $routeProvider, $mdThemingProvider, $locationProvider, AngularyticsProvider, DoubleClickProvider) {
    AngularyticsProvider.setEventHandlers(['GoogleUniversal']);

    DoubleClickProvider
      .defineSlot('/122240946/CD-DEPLOY-SQUARE', [[120, 90], [320, 50]], 'div-gpt-ad-1421106878492-1')
      .defineSlot('/122240946/CKB-BOARD-HEADER', [[970, 90], [728, 90], [468, 60], [320, 50]], 'div-gpt-ad-1421106878492-0');
    DoubleClickProvider
      .defineSizeMapping('div-gpt-ad-1421106878492-0')
      .addSize([1024, 768], [970, 90])
      .addSize([980, 690], [728, 90])
      .addSize([640, 480], [468, 60])
      .addSize([0, 0], [320, 50]);

    $routeProvider
      .when('/', {
        title: 'Browse',
        redirectTo: '/browse'
      })
      .when('/browse/sprint', {
        title: 'Browse Sprints',
        templateUrl: 'views/browse.html',
        controller: 'browseSprintCtrl'
      })
      .when('/browse/:type?', {
        title: 'Browse Projects',
        templateUrl: 'views/browse.html',
        controller: 'browseCtrl'
      })
      .when('/board/:project/:branch?', {
        templateUrl: 'views/kanban.html',
        controller: 'boardCtrl'
      })
      .when('/sprint/:sprint/:needs?', {
        templateUrl: 'views/kanban-sprint.html',
        controller: 'sprintCtrl'
      })
      .when('/changelog', {
        title: 'Changelog',
        templateUrl: 'views/changelog.html'
      })
      .otherwise({
        title: 'Home',
        redirectTo: '/browse'
      });

    $locationProvider.html5Mode({enabled: true});

    $compileProvider.debugInfoEnabled(true);

    $mdThemingProvider.theme('default')
      .primaryPalette('light-blue')
      .accentPalette('blue-grey');
  }]);
})(window.angular);
