Ext.define('Login.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    requires: ['Login.model.User'],

    data: {
        name: 'Main', 
        firstRow: 0,
        lastRow: 9
    },

    // Filtering code
    stores: {
        users: {
            source: 'userstore', // this is the id field from the store
            
            // limit the number of records per page
            filters: [
                // cannot have two filters on the same property, the last object wins
                // therefore need to chain filtered stores together to achieve this result
                 {
                    property : 'userId',
                    operator : ">=",
                    value: '{firstRow}'
                 }
            ],
            sorters : [{
                property : "userId",
                direction : "ASC"
            }]
        },
        userspage: {
            source: '{users}',
            filters: [
                {
                    property : 'userId',
                    operator: "<=",
                    value: '{lastRow}'
                }
            ],
            sorters: [{
                property: "userId",
                direction: "ASC"
            }]
        }
    }
});
