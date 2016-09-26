var bankAppModule = angular.module('bankApp', ['ngAnimate']);

bankAppModule.controller('bankAppController', function ($scope,$http) {

	var urlBase="http://localhost:";
	$scope.toggle=true;
	$scope.selection = [];
	$scope.statuses=['ACTIVE','COMPLETED'];
	$scope.priorities=['HIGH','LOW','MEDIUM'];
	$http.defaults.headers.post["Content-Type"] = "application/json";
	$http.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

    function findAllDepAccounts() {
        //get all tasks and display initially
        $http.get(urlBase + '9090/casa/accountsList').
            success(function (data) {

                if (data != undefined) {
                    $scope.depaccts = data;
                } else {
                    $scope.depaccts = [];
                }

            });
    }
    function findAllTimeDepAccounts() {
        //get all tasks and display initially
        $http.get(urlBase + '7070/timedeps/accountsList').
            success(function (data) {

                if (data != undefined) {
                    $scope.timedepaccts = data;
                    alert(timedepaccts);
                } else {
                    $scope.timedepaccts = [];
                }

            });
    }
    findAllDepAccounts();
    findAllTimeDepAccounts();


});
