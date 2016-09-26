var bankAppModule = angular.module('bankApp', ['ngAnimate']);

bankAppModule.controller('bankAppController', function ($scope,$http) {

	var urlBase="http://localhost:";
	$scope.toggle=true;
	$scope.selection = [];
	$scope.statuses=['ACTIVE','COMPLETED'];
	$scope.priorities=['HIGH','LOW','MEDIUM'];
	$http.defaults.headers.post["Content-Type"] = "application/json";

    function findAllDepAccounts() {
        //get all tasks and display initially
        $http.get(urlBase + '9090/banking/accounts').
            success(function (data) {

                if (data._embedded != undefined) {
                    $scope.depaccts = data._embedded.depositAccounts;
                } else {
                    $scope.depaccts = [];
                }

            });
    }
    function findAllTimeDepAccounts() {
        //get all tasks and display initially
        $http.get(urlBase + '7070/timedeps/timedeps').
            success(function (datax) {

                if (datax._embedded != undefined) {
                    $scope.timedepaccts = data._embedded.timeDepositAccounts;
                    alert(timedepaccts);
                } else {
                    $scope.timedepaccts = [];
                }

            });
    }
    findAllDepAccounts();
    findAllTimeDepAccounts();


});
