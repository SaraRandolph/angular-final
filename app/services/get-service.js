app.service('GetService', function($rootScope, $firebaseArray, $firebaseObject, CONSTANTS){
    
    this.getGallery = function(){
        return $firebaseArray(new Firebase(CONSTANTS.gallery));
    }
    
    this.getCalculations = function(){
        return $firebaseArray(new Firebase(CONSTANTS.calculator));
    }
    
    
})    