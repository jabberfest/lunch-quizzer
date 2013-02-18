(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['app_layout_template'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div id=\"main_body\">\n\n	<ul class=\"nav nav-tabs\" id=\"tab_nav\">\n	  <li><a href=\"#lunches\" id=\"lunch_tab\" data-toggle=\"tab\">Lunches</a></li>\n	  <li><a href=\"#new_event\" id=\"event_tab\" data-toggle=\"tab\">New Event</a></li>\n	  <li><a href=\"#locations\" id=\"location_tab\" data-toggle=\"tab\">Locations</a></li>\n	</ul>\n\n	<div class=\"tab-content\">\n	  <div class=\"tab-pane active\" id=\"lunches\">Lunch View Goes Here</div>\n	  <div class=\"tab-pane\" id=\"new_event\">New Event View Goes Here</div>\n	  <div class=\"tab-pane\" id=\"locations\">Locations View Goes Here</div>\n	</div>	\n\n</div>";});
})();
