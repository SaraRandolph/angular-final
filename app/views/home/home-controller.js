app.controller('HomeController', function($scope, $state){
   
    $scope.goToGallery = function(){
        $state.go('gallery')
    }
    
    $scope.goToCalculator = function(){
        $state.go('calculator')
    }
    
})