(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['locations_template'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<form class=\"form-horizontal\">\n  <div class=\"control-group\">\n    <label class=\"control-label\" for=\"inputName\">Name</label>\n    <div class=\"controls\">\n      <input type=\"text\" id=\"inputName\" placeholder=\"";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">\n    </div>\n  </div>\n  <div class=\"control-group\">\n    <label class=\"control-label\" for=\"inputStreet\">Street</label>\n    <div class=\"controls\">\n      <input type=\"text\" id=\"inputStreet\" placeholder=\"";
  foundHelper = helpers.street;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.street; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">\n    </div>\n  </div>\n  <div class=\"control-group\">\n    <label class=\"control-label\" for=\"inputCity\">City</label>\n    <div class=\"controls\">\n      <input type=\"text\" id=\"inputCity\" placeholder=\"";
  foundHelper = helpers.city;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.city; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">\n    </div>\n  </div>\n  <div class=\"control-group\">\n    <label class=\"control-label\" for=\"inputCity\">ZipCode</label>\n    <div class=\"controls\">\n      <input type=\"text\" id=\"inputZipCode\" placeholder=\"";
  foundHelper = helpers.zipcode;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.zipcode; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">\n    </div>\n  </div>\n  <div class=\"control-group\">\n    <div class=\"controls\">\n      <button type=\"text\" class=\"btn\">";
  foundHelper = helpers.submitText;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.submitText; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</button>\n    </div>\n  </div>\n</form>";
  return buffer;});
})();
