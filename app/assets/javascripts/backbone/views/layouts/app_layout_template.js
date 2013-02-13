(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['app_layout_template'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div id=\"main_body\">\n\n<ul class=\"nav nav-tabs\">\n  <li><a href=\"#home\" data-toggle=\"tab\">Home</a></li>\n  <li><a href=\"#profile\" data-toggle=\"tab\">Profile</a></li>\n  <li><a href=\"#messages\" data-toggle=\"tab\">Messages</a></li>\n  <li><a href=\"#settings\" data-toggle=\"tab\">Settings</a></li>\n</ul>\n\n</div>";});
})();
