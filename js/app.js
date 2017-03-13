angular.module('miniRouting', ['ui.router'])

  .congfig(function($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('home') , {
      templateUrl: 'js/home/homeCtrl',
      controller: homeCtrl,
      url: '/'
    },

    $stateProvider
    .state('settings') , {
      templateUrl: 'js/settings/homeCtrl',
      controller: settingsCtrl,
      url: '/settings'
    },

    $stateProvider
    .state('products') , {
      templateUrl: 'js/products/productsCtrl',
      controller: productsCtrl,
      url: '/products'
    }

    $urlRouterProvider
          .otherwise('/')


  });
