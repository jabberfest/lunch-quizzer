define([
    'underscore',
    'backbone',
], function(_, Backbone){


    var LocationModel = Backbone.Model.extend({
        defaults: {
            name: 'Name',
            street:'Street',
            city:'City',
            zipcode:'Zipcode',
            submitText: "Add Location"
        },
        urlRoot: '/venues',
        url: '/venues'
    });

    return LocationModel;
});

