Ext.define('Login.view.admin.AdminModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.admin',

    requires: ['Login.model.User'],

    stores: {
        users: {
            source: 'userstore' // this is the id field from the store
        }
    }
});
