/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Login.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Login',

    requires: [
        'Login.view.main.Main',
        'Login.view.login.Login'
        //,
        //'Login.controller.Messages'
    ],

    stores: [
        'Login.store.User'
    ],
    
    launch: function () {

        // It's important to note that this type of application could use
        // any type of storage, i.e., Cookies, LocalStorage, etc.
        var loggedIn;

        // Check to see the current value of the localStorage key
        loggedIn = localStorage.getItem("loginValid");

        // This ternary operator determines the value of the loginValid key.
        // If loginValid isn't true, we display the login window,
        // otherwise, we display the main view
        Ext.create({
            xtype: loggedIn ? 'app-main' : 'loginview'
        });

    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
