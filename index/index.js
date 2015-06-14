var myFirstApp = angular.module('myApp', []);

myFirstApp.controller("myController", function($scope){	
	
	$scope.tasks = [
	                {
	                	desc: "Learn AngularJS", complete:false
	                }
	                ];
	
	$scope.submit = function(){
		$scope.tasks.push({desc:$scope.currentTask, complete:false});
	    $scope.currentTask = '';
	};

	$scope.remove = function() {
	   var old = $scope.tasks;
	   $scope.tasks = [];
	   angular.forEach(old, function(task) {
         if (!task.complete) 
        	 $scope.tasks.push(task);
       });
	};
	
	$scope.getNumOfTasks = function(){
		return $scope.tasks.length;
	};
});