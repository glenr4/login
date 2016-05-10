/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Login.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onEditUsers: function(){

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

        //var mainStore = viewModel.get('userstore');
        //var storeLimit = mainStore.getCount();

        var store = viewModel.get('users');
        var storePage = viewModel.get('userspage');
        //console.log(store);

        //console.log(Ext.getClassName(store));

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
        var view = this.getView();

        Login.util.Msg.show({
            buttons: Ext.Msg.YESNO,
            title: 'Please Confirm',
            message: 'Do you want to logout?',
            icon: Ext.Msg.QUESTION,
            fn: function (btn) {
                console.log(btn);
                if (btn === 'yes') {
                    console.log("MainController: Logout: yes clicked");
                    // Remove the localStorage key/value
                    localStorage.removeItem('loginValid');

                    // Remove Main View
                    view.destroy();

                    // Add the Login Window
                    Ext.create({
                        xtype: 'loginview'
                    });
                }
            }
        })
    },

    onAdmin: function () {
        console.log("MainController: onAdmin");
        this.getView().destroy();
        this.redirectTo('editusers');
    }
});
