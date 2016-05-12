Ext.define('Login.view.login.LoginController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.login',

    onLoginClick: function () {
        console.log('LoginController: onLoginClick');

        var userStore = Ext.data.StoreManager.lookup('userstore');

        // Get field data
        var userName = this.lookupReference('username').value;
        var password = this.lookupReference('password').value;

        // TODO: update data with
        // userRole field before this can be implemented
        var userRole = 'administrator'; 

        // Check the userstore to see if the user login details are correct
        var match = userStore.findBy(function (record, id) {
            if (record.get('userName') == userName &&
                record.get('password') == password) {
                console.log('match: true');
                //userRole = record.get('userRole');
                return true;
            };
        });
        console.log(match);

        // Store logged in user information in the currentuserstore
        if (match != -1) {
            console.log('if match true');
        
            Login.util.UserCtrl.addLoggedIn(userName, userRole);
            
            // check if the current user store was updated
            // correctly, if so then load the main view
            if (Login.util.UserCtrl.getLoginState()) {
                // Remove Login Window
                console.log('Remove Login Window');
                console.log(this.getView());
                this.getView().destroy();

                // Add the main view to the viewport
                //Ext.create({
                //    xtype: 'app-main'
                //});
                console.log('LoginController: redirecting to main');
                this.redirectTo('main');
            } else {
                console.log('LoginController: failed to update current user store');
            };
        } else {
            console.log('if match false');
            Login.util.Msg.show({
                title: 'Login Details Not Valid',
                message: 'Please check your user name and password and try again.',
                buttons: Ext.Msg.OK,
                icon: Ext.Msg.WARNING
            });
        };
    }
});

