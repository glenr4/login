Ext.define('Login.view.login.LoginController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.login',

    onLoginClick: function () {
        console.log('LoginController: onLoginClick');
        //Check user credentials
        var store = Ext.data.StoreManager.lookup('userstore');
        var username = this.lookupReference('username').value;
        var password = this.lookupReference('password').value;

        var match = store.findBy(function (record, id) {
            if (record.get('userName') == username &&
                record.get('password') == password) {
                console.log('match: true');
                return true;
            };
        });
        console.log(match);

        if (match != -1) {
            console.log('if match true');
            // Set the localStorage value to true
            // In a real App use a Store and Model
            localStorage.setItem("loginValid", true);

            // Remove Login Window
            this.getView().destroy();

            // Add the main view to the viewport
            Ext.create({
                xtype: 'app-main'
                //,     // Does not work
                //scrollable: false
            });
        } else {
            console.log('if match false');
            //Ext.Msg.show({
            Login.util.Msg.show({
                title: 'Login Details Not Valid',
                message: 'Please check your user name and password and try again.',
                buttons: Ext.Msg.OK,
                icon: Ext.Msg.WARNING
            });
        };
    }
});

