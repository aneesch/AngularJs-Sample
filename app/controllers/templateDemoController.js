
sampleApp.controller("templateDemoController", function($scope,$http) {
    
	$scope.templates = [
		{name : 'atomDescTemplate1.html', url : 'app/views/elementDesc.html', tableClass : 'table table-striped table-hover'},
		{name : 'atomDescTemplate2.html', url : 'app/views/elementDesc2.html', tableClass : 'table table-bordered'}
	];
	
	$scope.template = $scope.templates[0];
	
	$scope.chemicalElement = [
		{name : 'Hydrogen',atomicNumber : 1, atomicWeight : 1.00794 },
		{name : 'Helium',atomicNumber : 2, atomicWeight : 4.002602 },
		{name : 'Lithium',atomicNumber : 3, atomicWeight : 6.941 }
	];
	
	$scope.elementNameKey = "" ;
	$scope.selectedTemplate = $scope.template;
	
});
