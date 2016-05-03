Ext.define('Login.view.main.editor.EditorController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.usereditor',

    onBack: function () {
        console.log('EditorController: onBack');

        var self = this;
        var form = this.getView().getForm();
        var store = Ext.data.StoreManager.lookup('userstore');

        //console.log(this.getView().getForm().isDirty());
        //console.log(form.isDirty());

        var viewModel = this.getViewModel();
        var record = viewModel.get('record'); // from viewmodel
        //console.log("** record**");
        //console.log(record.dirty);

        if (record.dirty) { // must use this test with data binding
            Ext.Msg.show({
                title: 'Save Changes?',
                message: 'You are closing a tab that has unsaved changes. Would you like to save your changes?',
                buttons: Ext.Msg.YESNOCANCEL,
                icon: Ext.Msg.QUESTION,
                fn: function (btn) {
                    if (btn === 'yes') {
                        console.log('Yes pressed');

                        self.syncStore(store);
                        self.close();
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
    }
});

