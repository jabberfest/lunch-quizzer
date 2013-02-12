
define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    //'<%= javascript_path('backbone/app/router') %>',
    //'<%= javascript_path('backbone/plugins/extensions') %>',
    'marionette'

], function($, _, Backbone){

		/*
        var MainApp = new Backbone.Marionette.Application();

        MainApp.addRegions({
            main_app_container: '#main_app_container'
        });


        MainApp.addInitializer(function(){
            Backbone.history.start();
        });
	*/
		var App = {};

        return App;
});

/*
var app = (function(){
	
	var app = new Backbone.Marionette.Application();


	app.addInitializer(function(){
		Backbone.history.start();
	});

	return app;

})();
*/