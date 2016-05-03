/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Login.view.main.Main', {
    //extend: 'Ext.tab.Panel',
    extend: 'Ext.grid.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'Login.view.main.MainController',
        'Login.view.main.MainModel',

        'Login.view.main.editor.Editor'
    ],

    controller: 'main',
    viewModel: 'main',

    // Operate as our application’s viewport. 
    // This way, the Main view takes up all available width and height within the browser.
    plugins: 'viewport',    
    
    ui: 'navigation',

    columns: [
        { text: 'User Name', dataIndex: 'userName' },
        { text: 'First Name', dataIndex: 'firstName' },
        { text: 'Last Name', dataIndex: 'lastName' },
        { text: 'Email', dataIndex: 'email' }
    ],

    buttons: [
        {
            text: 'New',
            listeners: {
                click: 'onNew'
            }
        }
    ],

    bind: {
        store: '{users}'
    },

    listeners: {
            rowdblclick: 'onRowClick'
    },

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list',
        items: [{
            xtype: 'button',
            text: 'Logout',
            margin: '10 0',
            handler: 'onLogout'
        }]
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    }
});
