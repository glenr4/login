Ext.define('Login.view.admin.Admin', {
    extend: 'Ext.grid.Panel',
    xtype: 'admin',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'Login.view.admin.AdminController',
        'Login.view.admin.AdminModel'
    ],

    controller: 'admin',
    viewModel: 'admin',

    // Operate as our application’s viewport. 
    // This way, the Main view takes up all available width and height within the browser.
    plugins: 'viewport',
    autoLoad: true,
    ui: 'navigation',
    //title: 'Admin',

    bind: {
        store: '{users}'
    },

    columns: [
        { text: 'User Name', dataIndex: 'userName' },
        { text: 'First Name', dataIndex: 'firstName' },
        { text: 'Last Name', dataIndex: 'lastName' },
        { text: 'Email', dataIndex: 'email' }
    ],

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            text: 'Admin',
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
                text: 'Main',
                margin: '10 0',
                handler: 'onMain'
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