Ext.define('Login.controller.Route', {
    extend: 'Ext.app.Controller',

    routes: {
        'main': 'onMain',
        'editusers': 'onEditUsers'
    },

    onMain: function () {
        console.log("Route: onMain");
        Ext.create({
            xtype: 'app-main'
        })
    },

    onEditUsers: function () {
        console.log("Route: onEditUsers");
        
        Ext.create({
            xtype: 'admin'
        })
    }
});

