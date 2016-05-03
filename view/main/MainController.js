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
    }
    //,

    //// Delete the current record
    //onDelete: function () {
    //    console.log('MainController: onDelete');

    //    var userGrid = Ext.ComponentQuery.query('app-main');
    //    console.log(userGrid);

    //    var record = userGrid[0].getSelection();
    //    if (record) {
    //        var store = Ext.data.StoreManager.lookup('userstore');
    //        store.remove(record);
    //    } else {
    //        console.log('No record selected');
    //    }
    //}
});
