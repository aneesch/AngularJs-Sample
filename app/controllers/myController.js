
sampleApp.controller("myController", function($scope,$http) {
    alert('All Set ...');
   	
	$scope.message = 'This is Index screen';
	$scope.firstName = "test" ;
	$scope.showTable = false ;
	//Initialize
    $scope.student = [{name:'Jane'},{name:'Hege'},{name:'Kai'}] ;
	
	$http.get('http://localhost/projects/angularSamp/app/services/Data_JSON.cfm')
		.success(function(response){$scope.student=response;})
		.error(function(data) { alert('Table load from server failed, Now showing static data..!'); });
		
	//$scope.$watch('user',function() {alert('Listener alert (watch) for username..!!');});	
	
	
});
