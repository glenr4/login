/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Login.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

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
    onNextPage: function () {
        console.log('MainController: onNextPage');
        var viewModel = this.getViewModel();
        //console.log(viewModel);

        //var store = Ext.data.StoreManager.lookup('userstore');
        var view = this.getView();
        console.log('view');
        console.log(view);

        var store = view.getStore();
        console.log('store');
        console.log(store);
        console.log(Ext.getClassName(store));

        var filters = store.getFilters();
        console.log(filters);

        console.log('Clear filters');
        var filters = store.getFilters();
        console.log(filters);
        store.clearFilter();
        var filters = store.getFilters();
        console.log(filters);


        var data = viewModel.getData();
        var range = data.lastRow - data.firstRow + 1;
        //console.log(data);
        data.firstRow += range;
        data.lastRow += range;

        console.log(data);
        //store.reload();   // cannot use on chained store
        console.log('addFilter');
        console.log(data.firstRow);
        console.log(data.lastRow);
        store.addFilter([

            // does not work either
            function (record) {
                if (record.userId >= 10 && record.userId <= 19) {
                    return record;
                }
            }

            ////Does not work
            //{
            //    property: 'userId',
            //    operator: ">=",
            //    value: data.firstRow
            //},
            //{
            //    property: 'userId',
            //    operator: "<=",
            //    value: data.lastRow
            //}
        ]);
        var filters = store.getFilters();
        console.log(filters);
    },

    // Display previous page of records
    onPrevPage: function () { 
        console.log('MainController: onNextPage');
        var viewModel = this.getViewModel();
        //console.log(viewModel);

        var store = Ext.data.StoreManager.lookup('userstore');
        //console.log(store);

        var data = viewModel.getData();
        var range = data.lastRow - data.firstRow;
        //console.log(data);
        data.firstRow -= range;
        data.lastRow -= range;

        console.log(data);
        //store.reload();   // cannot use on chained store
    },


    // Logout
    onLogout: function () {
        // Confirm logout
        //confirm: function (cfg, message, fn, scope) {
        //Login.util.Msg.confirm({
        //    buttons: Ext.Msg.YESNO,
        //    message: 'Do you want to logout?',
        //    handler: this.logout(id)
        //}
        // this should be outside cfg but does not work as expected
        //        'Do you want to logout?',
        //this.logout(id),
        //this
        //)
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
    }
});
