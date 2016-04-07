function rigger(request){
	if(typeof(request) == 'object'){
		
		var methodOption = request.method ? request.method : "POST";
		var dataFormat = request.type ? request.type : "json";
		var asynchSetting = request.async ? request.async : false;

		if(request.url){
			$.ajax({
				url: request.url, 
				data: {dataIn: JSON.stringify(request.data)}, 
				method: methodOption, 
				async: asynchSetting,
        		dataType: dataFormat,
        		cache:false
        	})
			.done(function(doneResult){
				if(typeof(request.success) == 'function'){
					request.success(doneResult);
				}
			})
			.error(function(errorResult){
				 if(typeof(request.error) == 'function'){
					request.error(errorResult);
				}
			})
			.complete(function(completeResult){
				if(typeof(request.complete) == 'function'){
					request.complete(completeResults);
				}
			});
		}
		else{
			console.log("Error Handled - Invalid URL");
		}
	}
	else{
		console.log("Error Handled - Invalid Request");
	}
}
