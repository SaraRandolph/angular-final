app.controller('CalculatorController', function($scope, GetService){
   
   $scope.calculations = GetService.getCalculations();
   
    $scope.add = function(firstNum, secondNum){
        $scope.result = firstNum + secondNum; 
        var strNumOne = firstNum.toString();
        var strNumTwo = secondNum.toString();       
        var allToGethere = strNumOne + "+" + strNumTwo + "=" + $scope.result
        $scope.calculations.$add(allToGethere)
        $scope.firstNum = ""
        $scope.secondNum= ""
    }
    
    $scope.subtract = function(firstNum, secondNum){
        $scope.result = firstNum - secondNum;
        var strNumOne = firstNum.toString();
        var strNumTwo = secondNum.toString();       
        var allToGethere = strNumOne + "-" + strNumTwo + "=" + $scope.result
        $scope.calculations.$add(allToGethere)
        $scope.firstNum = ""
        $scope.secondNum= ""
    }
    
    $scope.multiply = function(firstNum, secondNum){
        $scope.result = firstNum * secondNum;
        var strNumOne = firstNum.toString();
        var strNumTwo = secondNum.toString();       
        var allToGethere = strNumOne + "*" + strNumTwo + "=" + $scope.result
        $scope.calculations.$add(allToGethere)
        $scope.firstNum = ""
        $scope.secondNum= ""
        
    }
    
    $scope.divide = function(firstNum, secondNum){
        if(firstNum === 0){
            alert ("You can't devide by a zero dummy!!")
        } else {
            $scope.result = firstNum / secondNum
        }
        var strNumOne = firstNum.toString();
        var strNumTwo = secondNum.toString();       
        var allToGethere = strNumOne + "/" + strNumTwo + "=" + $scope.result
        $scope.calculations.$add(allToGethere)
        $scope.firstNum = ""
        $scope.secondNum= ""
    }
    
    $scope.delete = function(result){
        $scope.calculations.$remove(result);
    }
    
    
})