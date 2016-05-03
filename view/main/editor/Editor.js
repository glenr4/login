Ext.define('Login.view.main.editor.Editor', {
    extend: 'Ext.form.Panel',
    xtype: 'personeditorview',
    //reference: 'personeditorviewref',

    requires: [
        'Login.view.main.editor.EditorModel',
        'Login.view.main.editor.EditorController'
    ],

    controller: 'personeditor',
    viewModel: 'personeditor',

    defaultType: 'textfield',
    items: [
        {
            fieldLabel: 'User  Name',
            name: 'userName',
            allowBlank: false,
            bind: {
                value: '{record.userName}'
            }
        }, {
            fieldLabel: 'First  Name',
            name: 'firstName',
            allowBlank: false,
            bind: {
                value: '{record.firstName}'
            }
        },
        {
            fieldLabel: 'Last Name',
            name: 'lastName',
            allowBlank: false,
            bind: {
                value: '{record.lastName}'
            }
        },
        {
            fieldLabel: 'Email',
            name: 'email',
            allowBlank: false,
            bind: {
                value: '{record.email}'
            }
        },
        {
            fieldLabel: 'Password',
            name: 'password',
            allowBlank: false,
            bind: {
                value: '{record.password}'
            }
        }
    ],
    buttons: [
        {
            text: 'Back',
            listeners : {
                click: 'onBackToGrid'
            }
        },
        {
            text: 'Save',
            listeners: {
                click: 'onSave'
            }
        }
    ],
    listeners: {
        afterrender: 'onAfterRender',
        dirtychange: 'onDirtyChange'
    },
    //width: 200,
    //height: 200,
    floating: true,
    padding: 10
});

