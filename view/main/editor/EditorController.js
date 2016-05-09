Ext.define('Login.view.main.editor.EditorController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.usereditor',

    // TODO: refactor so that the Msg window is a mixin

    onBack: function () {
        console.log('EditorController: onBack');

        var self = this;
        var form = this.getView().getForm();
        var store = Ext.data.StoreManager.lookup('userstore');

        var viewModel = this.getViewModel();
        var record = viewModel.get('record'); // from viewmodel

        var formValid = form.isValid();
        console.log(form.isValid());

        if (record.dirty) { // must use this test with data binding
            //Ext.Msg.show({
            Login.util.Msg.show({
                title: 'Save Changes?',
                message: 'You are closing a tab that has unsaved changes. Would you like to save your changes?',
                icon: Ext.Msg.QUESTION,

                // Custom buttons not working
                //buttons: [
                //    {
                //        text: 'Yes',
                //        itemId: 'yes',
                //        //ui: 'action',
                //        //hidden: false,
                //        //disable: formValid,
                //        //autoShow: true,
                //        handler: function(){
                //            console.log('Yes pressed');
                //            if (form.isValid()) {
                //                console.log('Form valid');

                //                self.syncStore(store);
                //                self.close();
                //            }
                //        }
                //    },{
                //        text: 'No',
                //        itemId: 'no',
                //        //ui: 'action',
                //        //hidden: false,
                //        handler: function(){
                //            console.log('No pressed');

                //            store.rejectChanges();
                //            self.close();
                //        }
                //    },{
                //        text: 'Cancel',
                //        itemId: 'cancel',
                //        //ui: 'action',
                //        //hidden: false,
                //        handler: function(){
                //            console.log('Cancel pressed');
                //            // Stay on the form
                //        }
                //    }
                //],
                //scope: this

                buttons: Ext.Msg.YESNOCANCEL,
                fn: function (btn) {
                    if (btn === 'yes') {
                        console.log('Yes pressed');
                        if (form.isValid()) {
                            console.log('Form valid');

                            self.syncStore(store);
                            self.close();
                        }
                    } else if (btn === 'no') {
                        console.log('No pressed');

                        store.rejectChanges();
                        self.close();
                    } else {
                        console.log('Cancel pressed');
                        // Stay on the form
                    }
                }
            });
        } else {
            self.close();
        };
    },
    syncStore: function (store) {
        console.log('EditorController: syncStore');
        store.sync({
            success: function (e) {
                console.log("syncSuccess");
                console.log(e);
            },
            failure: function (e) {
                console.log("syncFailure");
                console.log(e);
            },
            callback: function () {
                console.log("callback")
            }
        });
    },
    onSave: function () {
        console.log("EditorController: onSave");

        var store = Ext.data.StoreManager.lookup('userstore');
        this.syncStore(store);
        this.close();
    },
    close: function () {
        console.log('EditorController: close');
        var view = this.getView();
        view.destroy();
    },

    // Delete the current record
    onDelete: function () {
        console.log('MainController: onDelete');

        var self = this;
        //Ext.Msg.show({
        Login.util.Msg.show({
            title: 'Delete Record?',
            message: 'You are about to PERMANANTLY DELETE this user, are you sure you want to do this?',
            buttons: Ext.Msg.YESNOCANCEL,
            icon: Ext.Msg.QUESTION,
            fn: function (btn) {
                if (btn === 'yes') {
                    console.log('Yes pressed');

                    var userGrid = Ext.ComponentQuery.query('app-main');
                    var record = userGrid[0].getSelection();
                    if (record) {
                        var store = Ext.data.StoreManager.lookup('userstore');
                        store.remove(record);
                    } else {
                        console.log('No record selected');
                    }

                    self.close();
                } else if (btn === 'no') {
                    console.log('No pressed');

                    self.close();
                } else {
                    console.log('Cancel pressed');
                    // Stay on the form
                }
            }
        });
    }
});

