// Defines all of the routes for this application
Ext.define('Login.controller.Route', {
    extend: 'Ext.app.Controller',

    routes: {
        'home': 'routeToHome',
        'app-main': { action: 'routeToMain' },
            //before: 'isLoggedIn'},
        'admin': 'routeToAdmin',
        'loginview': 'routeToLogin'
    },

    //isLoggedIn: function () {
    //    var loggedIn = Login.util.UserCtrl.getLoginState();

    //    // If loginValid isn't true, we display the login window,
    //    // otherwise, we display the main view
    //    //Ext.create({
    //    //    xtype: loggedIn ? 'app-main' : 'loginview'
    //    //});

    //    if (loggedIn) {
    //        this.redirectTo('app-main');
    //    } else {
    //        this.redirectTo('loginview');
    //        //this.routeToLogin();
    //    };
    //},

    routeToHome: function () {
        console.log("Route: routeToHome");
        // Check the users current login state
        var loggedIn = Login.util.UserCtrl.getLoginState();

        // If loginValid isn't true, we display the login window,
        // otherwise, we display the main view
        //Ext.create({
        //    xtype: loggedIn ? 'app-main' : 'loginview'
        //});

        if (loggedIn) {
            this.redirectTo('app-main');
        } else {
            this.redirectTo('loginview');
            //this.routeToLogin();
        };
    },

    routeToMain: function () {
        console.log("Route: routeToMain");
        // call generic create view function that destroys
        Ext.create({
            xtype: 'app-main'
        });
    },

    routeToAdmin: function () {
        console.log("Route: routeToAdmin");
        Ext.create({
            xtype: 'admin'
        });
    },

    routeToLogin: function () {
        console.log("Route: routeToLogin");
        Ext.create({
            xtype: 'loginview'
        });

    }
});

