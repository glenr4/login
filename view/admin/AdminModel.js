Ext.define('Login.view.admin.AdminModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.admin',

    requires: ['Login.model.CurrentUser'],

    stores: {
        currentuser: {
            source: 'currentuserstore' // this is the id field from the store
        }
    }
});
