Ext.define('Login.model.CurrentUser', {
    extend: 'Ext.data.Model',
    idProperty: 'userId',

    fields: [
        { name: 'userName' },
        { name: 'userRole' },
        { name: 'loggedIn' },
        { name: 'loginTime' }

    ]
})