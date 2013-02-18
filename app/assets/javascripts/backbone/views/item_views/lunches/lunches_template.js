(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['lunches_template'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<table class=\"table table-striped\">\n	\n	<tr>\n		<th>Name</th>\n		<th>Location</th>\n		<th># Attending</th>\n		<th>Status</th>\n	</tr>\n\n	<tr>\n		<td>Food Time</td>\n		<td>Firebowl</td>\n		<td>5</td>\n		<td><span class=\"label label-success\">Agreement</span></td>\n	<tr>\n\n	<tr>\n		<td>Happy Hour</td>\n		<td>Pending</td>\n		<td>10</td>\n		<td><span class=\"label label-important\">No Agreement</span></td>\n	</tr>\n\n</table>";});
})();
