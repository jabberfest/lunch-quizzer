define([
    'underscore',
    'backbone'
], function(_, Backbone){


    var LunchModel = Backbone.Model.extend({
        defaults: {
            name: ''
        },
        urlRoot: '/lunches',
        url: '/lunches'
    });


    return LunchModel;
});