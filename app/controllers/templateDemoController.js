
sampleApp.controller("templateDemoController", function($scope,$http) {
    
	$scope.templates = [
		{name : 'movieDescTemplate1.html', url : 'app/views/movieDesc.html', tableClass : 'table table-bordered table-striped table-hover'},
		{name : 'movieDescTemplate2.html', url : 'app/views/movieDesc2.html', tableClass : 'table table-bordered'}
	];
	
	$scope.template = $scope.templates[0];
	
	$scope.movieList = [
		{name : 'The Counselor',year : 2013, director : 'Ridley Scott' },
		{name : 'Eraserhead',year : 1977, director : 'David Lynch' },
		{name : 'To the Wonder',year : 2012, director : 'Terrence Malick' }
	];
	
	$scope.movieNameKey = "" ;
	$scope.selectedMovieUrl = "";
	$scope.selectedTemplate = $scope.template;
	
	$scope.setViewPanel = function(d){
		$scope.selectedMovieUrl = 'http://en.wikipedia.org/wiki/'+d;
	}
	
});
