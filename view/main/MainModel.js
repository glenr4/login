Ext.define('Login.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    requires: ['Login.model.User'],

    data: {
        name: 'Login',
        firstRow: 0,
        lastRow: 9
    },

    // Filtering code
    stores: {
        users: {
            source: 'userstore', // this is the id field from the store
            
            // limit the number of records per page
            
            filters: [
                //// cannot have two filters on the same property, the last object wins
                // {
                //    property : 'userId',
                //    operator : ">=",
                //    value: '{firstRow}'
                // },
                {
                    property : 'userId',
                    operator : "<=",
                    value: '{lastRow}'
                }
            ],
            sorters : [{
                property : "userId",
                direction : "ASC"
            }]

        }
    }
});
