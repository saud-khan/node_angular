app.controller("regCtrl",['$scope','contentService', function ($scope,contentService){

	//$scope.movies = moviesService.movies;
	 
   // moviesService.getMovies();
$scope.myform=[];
	
	  $scope.save = function() {
		  if($scope.myform.answer == 6){
		    	if($scope.myform.password===$scope.myform.cpassword  ){
		    		alert('My form : '+$scope.myform.username);
		    		var formData = {
		    		   		'firstname': $scope.myform.firstname,
		    		   		'lastname': $scope.myform.lastname,
		    		   		'username' : $scope.myform.username,
		    		   		'password' : $scope.myform.password,
		    		   		'email' : $scope.myform.email,
		    		   		'gender': $scope.myform.gender
		    			    };
				    		$scope.myform.firstname ='';
				    		$scope.myform.lastname ='';
				    		$scope.myform.gender ='';
				    		$scope.myform.username = '';
				    		$scope.myform.password = '';
				    		$scope.myform.cpassword ='';
				    		$scope.myform.email = '';
		    		
		    				alert('formdata NAME: '+formdata.name);
		    				contentService.getObject(formdata);
		    				
		    	}
		    	else{
		    		$scope.message="Passwords Don't Match !";
		    		alert("Passwords Don't Match !");
		    	}
		    }
		    else{
		    	$scope.message="Wrong Answer!";
		    	alert("Wrong Answer!");
		    }
	    
	  };
//	var name="areaguides";
//	contentService.getObject(name);	
//	$scope.Object = contentService.contentObject;
//	
//	$http.get("/areaguides")
//    .then(function(results){
//    	$scope.contentObject= results.data;
//    }, function(results){
//    	//Error
//    });
 
}]);