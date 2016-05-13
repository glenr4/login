Ext.define('Login.model.CurrentUser', {
    extend: 'Ext.data.Model',
    idProperty: 'userName',

    fields: [
        { name: 'userName' },
        { name: 'userRole' },
        { name: 'loggedIn' },
        { name: 'loginTime' }

    ]
})