Ext.define('Login.view.main.editor.EditorController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.personeditor',

    init: function () {
        console.log("EditorController init");
    },
    onAfterRender: function (cmpt) {
        console.log('EditorController: onAfterRender');
    },
    onDirtyChange: function(cmpt){
        console.log('onDirtyChange');
        
    },
    onBackToGrid: function () {
        console.log('EditorController: onBackToGrid');

        var self = this;
        var form = this.getView().getForm();
        var store = Ext.data.StoreManager.lookup('personstore');

        console.log(this.getView().getForm().isDirty());
        console.log(form.isDirty());

        var viewModel = this.getViewModel();
        var record = viewModel.get('record'); // from viewmodel
        console.log("** record**");
        console.log(record.dirty);

        if (record.dirty) { // must use this test with data binding
            //if (form.isDirty()) {
            Ext.Msg.show({
                title: 'Save Changes?',
                message: 'You are closing a tab that has unsaved changes. Would you like to save your changes?',
                buttons: Ext.Msg.YESNOCANCEL,
                icon: Ext.Msg.QUESTION,
                fn: function (btn) {
                    if (btn === 'yes') {
                        console.log('Yes pressed');

                        self.syncStore(store);
                        self.loadPreviousTab();
                    } else if (btn === 'no') {
                        console.log('No pressed');

                        store.rejectChanges();
                        self.loadPreviousTab();
                    } else {
                        console.log('Cancel pressed');
                        // Stay on the form
                    }
                }
            });
        } else {
            self.loadPreviousTab();
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

        var store = Ext.data.StoreManager.lookup('personstore');
        this.syncStore(store);
        this.loadPreviousTab();
    },
    loadPreviousTab: function () {
        // get tabs control
        var tabs = Ext.ComponentQuery.query('app-main');
        // get current tab i.e. the editor
        var currentTab = tabs[0].getActiveTab();
        // remove it 
        tabs[0].remove(currentTab);
        // replace/with the one we have in global area
        var previoustab = Login.Globals.getCurrentab();
        var newtab = tabs[0].add(previoustab);
        // effectively 'shows' the new tab
        tabs[0].setActiveTab(newtab);
    }
});

