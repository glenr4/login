// Launch the application
// Bring up a login window if not already logged in,
// if logged in then open main view

Ext.define('Login.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Login',

    requires: [
        'Login.view.main.Main',
        'Login.view.login.Login',
        'Login.view.admin.Admin',

        'Login.util.Msg',
        'Login.util.UserCtrl'
    ],

    controllers: [
        'Login.controller.Route'
    ],

    stores: [
        'Login.store.User',
        'Login.store.CurrentUser'
    ],
    
    launch: function () {
        console.log('Application: launch');

        // Initialise this utility object
        Login.util.UserCtrl.init();

        // Load the home page
        var ctrl = this.getController('Login.controller.Route');
        ctrl.redirectTo('', true);

        //// Check the users current login state
        //var loggedIn = Login.util.UserCtrl.getLoginState();

        //// If loginValid isn't true, we display the login window,
        //// otherwise, we display the main view
        //Ext.create({
        //    xtype: loggedIn ? 'app-main' : 'loginview'
        //});
    }
});
