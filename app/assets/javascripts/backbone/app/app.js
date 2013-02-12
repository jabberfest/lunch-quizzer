var app = (function(){
	
	var app = new Backbone.Marionette.Application();


	app.addInitializer(function(){
		Backbone.history.start();
	});

	return app;

})();