app.factory("contentService", function($http){
    var _contentObject = [];
 
    var _getObject = function(value){
    	//alert('INSIDE');
    	$http.get('/'+value)
	      .then(function(results){
	    	 // alert(results.data.toSource());
	      	angular.copy(results.data,_contentObject);
	      	
	      	//alert(_contentObject.toSource());
	      }, function(results){
	      	//Error
	      });
    };
    return{
    	contentObject: _contentObject,
    	getObject: _getObject,
        
    };
});
