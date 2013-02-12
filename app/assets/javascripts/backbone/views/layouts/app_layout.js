var AppLayout = (function(){

	var AppLayout = Backbone.Marionette.Layout.extend({
		template: Handlebars.templates['app_layout_template'],
		regions:{
			app_body: '#main_body'
		}

	});

	return AppLayout;

})();