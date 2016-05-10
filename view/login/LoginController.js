Ext.define('Login.view.login.LoginController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.login',

    onLoginClick: function () {
        console.log('LoginController: onLoginClick');
        //Check user credentials
        var userStore = Ext.data.StoreManager.lookup('userstore');
        var username = this.lookupReference('username').value;
        var password = this.lookupReference('password').value;
        var userRole = 'administrator'; // TODO: update data with
        // userRole field before this can be implemented

        var match = userStore.findBy(function (record, id) {
            if (record.get('userName') == username &&
                record.get('password') == password) {
                console.log('match: true');
                //userRole = record.get('userRole');
                return true;
            };
        });
        console.log(match);

        if (match != -1) {
            console.log('if match true');
            // Store current user information
            var store = Ext.data.StoreManager.lookup('currentuserstore');
            console.log(store);
            var data = store.getData();
            console.log(data);

            console.log("LoginController: store userName");
            data.userName = username;
            data.userRole = userRole;
            data.loggedIn = true;
            data.loginTime = Date();
            console.log(data);

            console.log('LoginController: login');
            var newRecord = Ext.create(Ext.data.schema.Schema.lookupEntity('Login.model.CurrentUser'));
            console.log(newRecord);

            newRecord.data = data;
            store.add(newRecord);
            console.log(newRecord);

            this.syncStore(store);

            // Set the localStorage value to true
            // In a real App use a Store and Model
            //localStorage.setItem("loginValid", true);

            // Remove Login Window
            this.getView().destroy();

            // Add the main view to the viewport
            Ext.create({
                xtype: 'app-main'
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
    },
    syncStore: function (store) {
        console.log('LoginController: syncStore');
        store.sync({
            success: function (e) {
                console.log("syncSuccess");
                console.log(e);
            },
            failure: function () {
                console.log("syncFailure");
                console.log(e);
            },
            callback: function () {
                console.log("callback");
                console.log(store);
                console.log('Load store');
                store.load();
                console.log(store);

            }
        });
    }

});

