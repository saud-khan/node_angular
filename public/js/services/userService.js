app.factory("contentService", function($http,$location){
	
	
	var _getObject = function(formData){
	
		$http.post('/register',formData)
		.success(function(data) {
			alert("User Registered Successfully !");
			$location.path('#/home');
		 })
		 .error(function(response) {
			 console.log("error");
		 });
	
		return{
			contentObject: _contentObject,
	    	getObject: _getObject
		};
	};
});
	
	
	//var _addNewMovie = function(movie){    	
    	//if(movie.length){    		
//	$http.get('/addname/'+movie)
//    		.success(function(results){
//    			_movies.push(results);
//    			//success
//            }).error(function(results){//alert(results);
//                //Error
//            });
//    		}
//    	else { alert('Insert Item_Name to ADD');}
//    	
//    };
// 
//    return{
//        movies: _movies,
//        getMovies: _getMovies,
//        addNewMovie: _addNewMovie
//    };
//});
//    
//    
//    //////////////////////////////////////
//    var _contentObject = [];
// 
//    var _getObject = function(value){
//    	
//    	$http.get('/'+value)
//	      .then(function(results){	    	 
//	      	angular.copy(results.data,_contentObject);	      	
//	      }, function(results){
//	      	//Error
//	      });
//    };
//    return{
//    	contentObject: _contentObject,
//    	getObject: _getObject,
//        
//    };
//});
