
(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {

    return new getIncidentDetails().getDetails(request.pathParams.number);
	
	// implement resource here

})(request, response);
