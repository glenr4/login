Ext.define('Login.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'loginview',
    
    requires: [
        'Login.view.login.LoginModel',
        'Login.view.login.LoginController'
        //,
        //'Ext.form.Panel'    // is this really required?
    ],

    controller: 'login',
    viewModel: 'login',

    closable: false,
    autoShow: true,

    title: 'Login',
    modelValidation: true,  // link the Model's validation rules to the form
    items: {
        xtype: 'form',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            name: 'username',
            fieldLabel: 'Username',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Password',
            allowBlank: false
        }, {
            xtype: 'displayfield',
            hideEmptyLabel: false,
            value: 'Enter any non-blank password'
        }],
        buttons: [{
            text: 'Login',
            formBind: true,     // on enable if form field values are valid
            listeners: {
                click: 'onLoginClick'
            }
        }]
    },

    //floating: true,
    bodyPadding: 10
});

