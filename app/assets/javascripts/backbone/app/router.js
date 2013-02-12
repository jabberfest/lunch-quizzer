var Router = (function(){
	
    var MainAppController = {

        Home: function() {    
        	var app_layout = new AppLayout();
          var app_region = new AppRegion();

          app_region.show(app_layout);

      
        }

    };


    var Router = Backbone.Marionette.AppRouter.extend({
          appRoutes : {
              '': 'Home',
          }

    });

    return new Router({controller: MainAppController});


})();