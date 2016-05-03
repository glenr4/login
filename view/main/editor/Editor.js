Ext.define('Login.view.main.editor.Editor', {
    extend: 'Ext.form.Panel',
    xtype: 'usereditorview',
    //reference: 'usereditorviewref',

    requires: [
        'Login.view.main.editor.EditorModel',
        'Login.view.main.editor.EditorController'
    ],

    controller: 'usereditor',
    viewModel: 'usereditor',

    modelValidation: true,  // link the Model's validation rules to the form
    defaultType: 'textfield',
    items: [
        {
            fieldLabel: 'User  Name',
            name: 'userName',
            //allowBlank: false,
            bind: {
                value: '{record.userName}'
            }
        }, {
            fieldLabel: 'First  Name',
            name: 'firstName',
            //allowBlank: false,
            bind: {
                value: '{record.firstName}'
            }
        },
        {
            fieldLabel: 'Last Name',
            name: 'lastName',
            //allowBlank: false,
            bind: {
                value: '{record.lastName}'
            }
        },
        {
            fieldLabel: 'Email',
            name: 'email',
            //allowBlank: false,
            bind: {
                value: '{record.email}'
            }
        },
        {
            fieldLabel: 'Password',
            name: 'password',
            //allowBlank: false,
            bind: {
                value: '{record.password}'
            }
        }
    ],
    buttons: [
        {
            text: 'Back',
            listeners : {
                click: 'onBack'
            }
        }, {
            text: 'Delete',
            listeners: {
                click: 'onDelete'
            }
        },
        {
            text: 'Save',
            listeners: {
                click: 'onSave'
            }
        }
    ],

    floating: true,
    padding: 10
});

