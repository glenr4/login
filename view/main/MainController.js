Ext.define('Login.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    mixins: [
        'Login.mixin.Common'
    ],
    
    onAdmin: function(){

    },

    // Open in a form for editing
    onRowClick: function (cmp, record) {
        console.log('MainController: onRowClick');

        var editorForm = Ext.create('Login.view.main.editor.Editor', {
            viewModel: {
                data: {
                    record: record
                }
            }
        });
        editorForm.show();
    },

    // Add a new record to the store and then pass it to the Form
    onNew: function () {
        console.log('MainController: onNew');

        var newRecord = Ext.create(Ext.data.schema.Schema.lookupEntity('Login.model.User'));
        var store = Ext.data.StoreManager.lookup('userstore');
        store.add(newRecord);

        var editorForm = Ext.create('Login.view.main.editor.Editor', {
            viewModel: {
                data: {
                    record: newRecord
                }
            }
        });
        editorForm.show();
    },

    // testing only
    onGetFilters: function () {
        console.log("MainController: onGetFilters");
        var view = this.getView();
        var store = view.getStore();

        var filters = store.getFilters();
        console.log(filters);
    },

    // Display next page of records
    // TODO: Need to add limit check
    onNextPage: function () {
        console.log('MainController: onNextPage');

        var viewModel = this.getViewModel();

        var store = viewModel.get('users');
        var storePage = viewModel.get('userspage');

        store.clearFilter();
        storePage.clearFilter();
        
        var data = viewModel.getData();
        var range = data.lastRow - data.firstRow + 1;
        
        data.firstRow += range;
        data.lastRow += range;

        store.addFilter({
            property: 'userId',
            operator: ">=",
            value: data.firstRow
        });

        storePage.addFilter({
            property: 'userId',
            operator: "<=",
            value: data.lastRow
        });
    },

    // Display previous page of records
    // TODO: Need to add limit check
    onPrevPage: function () { 
            console.log('MainController: onPrevPage');
            var viewModel = this.getViewModel();
            var store = viewModel.get('users');
            var storePage = viewModel.get('userspage');
            console.log(store);

            console.log(Ext.getClassName(store));

            store.clearFilter();
            storePage.clearFilter();
        
            var data = viewModel.getData();
            var range = data.lastRow - data.firstRow + 1;
        
            data.firstRow -= range;
            data.lastRow -= range;

            store.addFilter({
                property: 'userId',
                operator: ">=",
                value: data.firstRow
            });

            storePage.addFilter({
                property: 'userId',
                operator: "<=",
                value: data.lastRow
            });
    },


    // Logout
    onLogout: function () {
        console.log('MainController: onLogout');

        var view = this.getView();
        var self = this;

        console.log(view);


        Login.util.Msg.show({
            buttons: Ext.Msg.YESNO,
            title: 'Please Confirm',
            message: 'Do you want to logout?',
            icon: Ext.Msg.QUESTION,
            fn: function (btn) {
                console.log(btn);
                if (btn === 'yes') {
                    console.log("MainController: Logout: yes clicked");

                    // remove user
                    Login.util.UserCtrl.logout();

                    if (!Login.util.UserCtrl.getLoginState()) {
                        // Remove Main View
                        //view.destroy();

                        //self.redirectTo('login');
                        self.createView(self.getView().getXType(), 'loginview');

                        // Add the Login Window
                        //Ext.create({
                        //    xtype: 'loginview'
                        //});
                    } else {
                        console.log('MainController: failed to update current user store');
                    }
                }
            }
        })
    },

    // Route to admin page
    onAdmin: function () {
        console.log("MainController: onAdmin");
        this.getView().destroy();
        this.redirectTo('admin');
    }
});
