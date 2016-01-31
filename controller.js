angular.module('myApp',[])
    .controller('MyController',['$scope','$timeout',function($scope,$timeout){
        $scope.msg = "こんにちは！angular js ";

        // リンク生成時の時間差の検証
        // ng-hrefの動作検証も含めて
        $timeout(function(){
        $scope.url= "https://google.jp";
        },5000);
    }]);
