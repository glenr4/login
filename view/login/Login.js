Ext.define('Login.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'loginview',
    
    requires: [
        'Login.view.login.LoginModel',
        'Login.view.login.LoginController'
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
            reference: 'username',
            name: 'username',
            fieldLabel: 'Username',
            allowBlank: false
        }, {
            xtype: 'textfield',
            reference: 'password',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Password',
            allowBlank: false
        }
],
        buttons: [{
            text: 'Login',
            formBind: true,     // on enable if form field values are valid
            listeners: {
                click: 'onLoginClick'
            }
        }]
    },

    bodyPadding: 10
});

