app.controller('GalleryController', function($scope, GetService){
   
    $scope.gallery = GetService.getGallery()
    
    $scope.addToGallery = function(newPicture) {
        $scope.gallery.$add(newPicture)
        // this needs refactoring but anything like $scope.newPicture = "" didn't work
        newPicture.img = '';
        newPicture.artist = '';
        newPicture.title = '';
    }
    

    
    $scope.clear = function(){
        $scope.newPicture = ''
    }

    $scope.delete = function(picture){
         $scope.gallery.$remove(picture);
    }
    
    $scope.update = function(picture){ 
        $scope.gallery.$save(picture);
    }
    
})