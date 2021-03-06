/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Login.view.main.Main', {
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

    // Operate as our application�s viewport. 
    // This way, the Main view takes up all available width and height within the browser.
    plugins: 'viewport',    
    autoLoad: true,
    ui: 'navigation',

    bind: {
        store: '{userspage}'
    },

    columns: [
        { text: 'User Name', dataIndex: 'userName' },
        { text: 'First Name', dataIndex: 'firstName' },
        { text: 'Last Name', dataIndex: 'lastName' },
        { text: 'Email', dataIndex: 'email' }
    ],

    buttons: [
        {
            text: 'Prev. Page',
            listeners: {
                click: 'onPrevPage'
            }
        },
        {
            text: 'Next Page',
            listeners: {
                click: 'onNextPage'
            }
        },
        {
            text: 'New',
            listeners: {
                click: 'onNew'
            }
        },
        {
            text: 'Get Filters',
            listeners: {
                click: 'onGetFilters'
            }
        }

    ],

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
        items: [
            {
                xtype: 'button',
                text: 'Logout',
                margin: '10 0',
                handler: 'onLogout'
            },
            {
                xtype: 'button',
                text: 'Admin',
                margin: '10 0',
                handler: 'onAdmin'
            }
        ]
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
