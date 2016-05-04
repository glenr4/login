Ext.define('Login.view.main.editor.Editor', {
    extend: 'Ext.form.Panel',
    xtype: 'usereditorview',

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
            bind: {
                value: '{record.userName}'
            }
        }, {
            fieldLabel: 'First  Name',
            name: 'firstName',
            bind: {
                value: '{record.firstName}'
            }
        },
        {
            fieldLabel: 'Last Name',
            name: 'lastName',
            bind: {
                value: '{record.lastName}'
            }
        },
        {
            fieldLabel: 'Email',
            name: 'email',
            bind: {
                value: '{record.email}'
            }
        },
        {
            fieldLabel: 'Password',
            name: 'password',
            inputType: 'password',
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
            formBind: true,
            listeners: {
                click: 'onSave'
            }
        }
    ],

    floating: true,
    padding: 10
});

