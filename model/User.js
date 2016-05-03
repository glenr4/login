Ext.define('Login.model.User', {
    extend: 'Ext.data.Model',
    idProperty: 'userId',

    fields: [
        { name: 'userId' },
        { name: 'userName' },
        { name: 'firstName' },
        { name: 'lastName' },
        { name: 'email' },
        { name: 'password' }
    ]

});