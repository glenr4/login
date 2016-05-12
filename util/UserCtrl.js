Ext.define('Login.util.UserCtrl', {
    singleton: true,

    sharedVars: {
        store: null
    },

    // Get reference to the store for all functions to use
    init: function() {
        console.log('UserCtrl: init');
        this.store = Ext.data.StoreManager.lookup('currentuserstore');
    },

    logout: function () {
        console.log('UserCtrl: logout');
        //var store = Ext.data.StoreManager.lookup('currentuserstore');
        var data = this.store.getData();

        // clear all current user data in the store
        // Should only be one entry here at most but
        // clear all in case a previous error has
        // caused entries to remain
        this.store.removeAll(); // not clearing all records
        this.syncStore(this.store);

        this.store.getProxy().clear();

        
        console.log(this.store);
    },

    // If a user successfully authenticates, then add them into the current user store
    addLoggedIn: function (userName, userRole) {
        console.log('UserCtrl: setLoginState');
        var data = this.store.getData();
        //this.store.getProxy().clear();
        //this.syncStore(this.store);

        data.userName = userName;
        data.userRole = userRole;
        data.loggedIn = true;
        data.loginTime = Date();
 
        var newRecord = Ext.create(Ext.data.schema.Schema.lookupEntity('Login.model.CurrentUser'));
        newRecord.data = data;
        this.store.add(newRecord);

        this.syncStore(this.store);
        //data = this.store.getData();
        //console.log(data);
    },

    getLoginState: function () {
        console.log('UserCtrl: getLoginState');
        var data = this.store.getData();
        console.log(this.store);

        // Check to see if Current User data exists
        if (data.items[0]) {
            console.log('UserCtrl: getLoginState: have data');
            //loggedIn = data.items[0].get('loggedIn');
            
            return data.items[0].get('loggedIn');
        } else {
            console.log('UserCtrl: getLoginState: no data');
            return false;
        }
    },

    syncStore: function (store) {
        console.log('UserCtrl: syncStore');
        store.sync({
            success: function (e) {
                console.log("syncSuccess");
            },
            failure: function (e) {
                console.log("syncFailure");
                console.log(e);
            },
            callback: function (e) {
                console.log("callback");
            }
        });
    }



})