app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/app/views/home/home.html',
            controller: 'HomeController',
            controllerAs: 'gc'
        })
    $stateProvider
        .state('gallery', {
            url: '/gallery',
            templateUrl: '/app/views/gallery/gallery.html',
            controller: 'GalleryController',
            controllerAs: 'gc'
        })
     $stateProvider
        .state('calculator', {
            url: '/calculator',
            templateUrl: '/app/views/calculator/calculator.html',
            controller: 'CalculatorController',
            controllerAs: 'gc'
        })
        
})        