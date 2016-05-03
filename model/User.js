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
    ],
    validators: {
        userName: [
            {type: 'presence'}
        ],
        password: [
            {type: 'presence'}
        ],
        email: [
            {
                type: 'email'
                //,
                //matcher: '/\S+@\S+\.\S+/',
                //message: 'Not a valid email address'
            }
        ]
    }
});