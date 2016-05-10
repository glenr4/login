Ext.define('Login.store.CurrentUser', {
    extend: 'Ext.data.Store',
    model: 'Login.model.CurrentUser',

    storeId: 'currentuserstore',
    autoLoad: true,

    proxy: {
        type: 'sessionstorage',
        //type: 'localstorage',
        id: 'currentuserstorage',
        reader: {
            type: 'json'
        },
        writer: {
            type: 'json'
        }
    }
    //,
    //data: [{}]
});