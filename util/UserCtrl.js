Ext.define('Login.util.UserCtrl', {
    singleton: true,

    sharedVars: {
        store: null
    },

    init: function() {
        console.log('UserCtrl: init');
        this.store = Ext.data.StoreManager.lookup('currentuserstore');
        //console.log(this.store);
    },

    login: function () {

    },

    logout: function () {
        //var store = Ext.data.StoreManager.lookup('currentuserstore');
        var data = this.store.getData();

        // clear all current user data in the store
        // Should only be one entry here at most but
        // clear all in case a previous error has
        // caused entries to remain
        this.store.removeAll();
        this.syncStore(this.store);
    },

    getLoginState: function(){
        var data = this.store.getData();
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
                console.log(e);
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