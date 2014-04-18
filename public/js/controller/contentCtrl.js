app.controller('homeCtrl',function( ){
//function to be used in home Controller
});
app.controller("areaguidesCtrl",['$scope','contentService', function ($scope,contentService){

	var name="areaguides";
	contentService.getObject(name);	
	$scope.Object = contentService.contentObject;
	
//	$http.get("/areaguides")
//    .then(function(results){
//    	$scope.contentObject= results.data;
//    }, function(results){
//    	//Error
//    });
 
}]);
app.controller("attractionsCtrl",['$scope','contentService', function ($scope,contentService){
	
		var name="attractions";
		contentService.getObject(name);		
		$scope.Object = contentService.contentObject;
		
}]);
app.controller("restaurantsCtrl",['$scope','contentService', function ($scope,contentService){
	
	var name="restaurants";
	contentService.getObject(name);		
	$scope.Object = contentService.contentObject;
	
}]);
app.controller("nightlifeCtrl",['$scope','contentService', function ($scope,contentService){
	
	var name="nightlife";
	contentService.getObject(name);		
	$scope.Object = contentService.contentObject;
	
}]);
app.controller("activitiesCtrl",['$scope','contentService', function ($scope,contentService){
	
	var name="activities";
	contentService.getObject(name);		
	$scope.Object = contentService.contentObject;
	
}]);
app.controller("infoCtrl",['$scope','contentService', function ($scope,contentService){
	
	var name="info";
	contentService.getObject(name);		
	$scope.Object = contentService.contentObject;
	
}]);