Ext.define('Login.store.User', {
    extend: 'Ext.data.Store',
    model: 'Login.model.User',

    storeId: 'userstore',
    autoLoad: true,

    Proxy: {
        type: 'localstorage',
        id: 'userstorage',
        reader: {
            type: 'json'
        },
        writer: {
            type: 'json'
        }
    },

    data: [
        { userId: '1', userName: 'whodat', firstName: 'Whois', lastName: 'That', email: 'blah@gmail.com', password: '123' },
        { userId: '2', userName: 'me', firstName: 'Me', lastName: 'Myself', email: 'blah@gmail.com', password: '123' },
        { userId: '3', userName: 'guy', firstName: 'That', lastName: 'Guy', email: 'blah@gmail.com', password: '123' },
        { userId: '4', userName: 'smithy', firstName: 'John', lastName: 'Smith', email: 'blah@gmail.com', password: '123' }
    ]
});