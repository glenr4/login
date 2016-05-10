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
        'Login.view.login.Login',
        'Login.util.Msg',
        'Login.view.admin.Admin' 
    ],

    controllers: [
        'Login.controller.Route'
    ],

    stores: [
        'Login.store.User'
        ,
        'Login.store.CurrentUser'
    ],
    
    launch: function () {
        console.log('Application: launch');
       // debugger;
        // It's important to note that this type of application could use
        // any type of storage, i.e., Cookies, LocalStorage, etc.
        var loggedIn;

        // Check to see the current value of the localStorage key
        //loggedIn = localStorage.getItem("loginValid");
        var store = Ext.data.StoreManager.lookup('currentuserstore');
        //console.log(store);

        var data = store.getData();
        console.log(data);

        //loggedIn = data.items[0].data.loggedIn;
        loggedIn = data.items[0].get('loggedIn');

        //console.log(loggedIn);
        //console.log(data.items[0].data.userName);

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
