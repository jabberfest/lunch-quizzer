define([
    'underscore',
    'backbone'
], function(_, Backbone){


    var LunchesModel = Backbone.Model.extend({
        defaults: {
            name: ''
        },
        urlRoot: '/lunches',
        url: '/lunches'
    });


    return LunchesModel;
});