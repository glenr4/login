Ext.define('Login.store.User', {
    extend: 'Ext.data.Store',
    model: 'Login.model.User',

    storeId: 'userstore',
    autoLoad: true,

    proxy: {
        type: 'localstorage',
        id: 'userstorage',
        reader: {
            type: 'json'
        },
        writer: {
            type: 'json'
        }
    },

    data: [
        { userId: 1, userName: 'whodat', firstName: 'Whois', lastName: 'That', email: 'blah@gmail.com', password: '1234' },
        { userId: 2, userName: 'me', firstName: 'Me', lastName: 'Myself', email: 'blah@gmail.com', password: '123' },
        { userId: 3, userName: 'guy', firstName: 'That', lastName: 'Guy', email: 'blah@gmail.com', password: '1234' },
        { userId: 4, userName: 'smithy', firstName: 'John', lastName: 'Smith', email: 'blah@gmail.com', password: '1234' },
        { userId: 5, userName: 'UserName5', firstName: 'User', lastName: 'Name5', email: 'UserName5@gmail.com', password: '123' },
        { userId: 6, userName: 'UserName6', firstName: 'User', lastName: 'Name6', email: 'UserName6@gmail.com', password: '123' },
        { userId: 7, userName: 'UserName7', firstName: 'User', lastName: 'Name7', email: 'UserName7@gmail.com', password: '123' },
        { userId: 8, userName: 'UserName8', firstName: 'User', lastName: 'Name8', email: 'UserName8@gmail.com', password: '123' },
        { userId: 9, userName: 'UserName9', firstName: 'User', lastName: 'Name9', email: 'UserName9@gmail.com', password: '123' },
        { userId: 10, userName: 'UserName10', firstName: 'User', lastName: 'Name10', email: 'UserName10@gmail.com', password: '123' },
        { userId: 11, userName: 'UserName11', firstName: 'User', lastName: 'Name11', email: 'UserName11@gmail.com', password: '123' },
        { userId: 12, userName: 'UserName12', firstName: 'User', lastName: 'Name12', email: 'UserName12@gmail.com', password: '123' },
        { userId: 13, userName: 'UserName13', firstName: 'User', lastName: 'Name13', email: 'UserName13@gmail.com', password: '123' },
        { userId: 14, userName: 'UserName14', firstName: 'User', lastName: 'Name14', email: 'UserName14@gmail.com', password: '123' },
        { userId: 15, userName: 'UserName15', firstName: 'User', lastName: 'Name15', email: 'UserName15@gmail.com', password: '123' },
        { userId: 16, userName: 'UserName16', firstName: 'User', lastName: 'Name16', email: 'UserName16@gmail.com', password: '123' },
        { userId: 17, userName: 'UserName17', firstName: 'User', lastName: 'Name17', email: 'UserName17@gmail.com', password: '123' },
        { userId: 18, userName: 'UserName18', firstName: 'User', lastName: 'Name18', email: 'UserName18@gmail.com', password: '123' },
        { userId: 19, userName: 'UserName19', firstName: 'User', lastName: 'Name19', email: 'UserName19@gmail.com', password: '123' },
        { userId: 20, userName: 'UserName20', firstName: 'User', lastName: 'Name20', email: 'UserName20@gmail.com', password: '123' },
        { userId: 21, userName: 'UserName21', firstName: 'User', lastName: 'Name21', email: 'UserName21@gmail.com', password: '123' },
        { userId: 22, userName: 'UserName22', firstName: 'User', lastName: 'Name22', email: 'UserName22@gmail.com', password: '123' },
        { userId: 23, userName: 'UserName23', firstName: 'User', lastName: 'Name23', email: 'UserName23@gmail.com', password: '123' },
        { userId: 24, userName: 'UserName24', firstName: 'User', lastName: 'Name24', email: 'UserName24@gmail.com', password: '123' },
        { userId: 25, userName: 'UserName25', firstName: 'User', lastName: 'Name25', email: 'UserName25@gmail.com', password: '123' },
        { userId: 26, userName: 'UserName26', firstName: 'User', lastName: 'Name26', email: 'UserName26@gmail.com', password: '123' },
        { userId: 27, userName: 'UserName27', firstName: 'User', lastName: 'Name27', email: 'UserName27@gmail.com', password: '123' },
        { userId: 28, userName: 'UserName28', firstName: 'User', lastName: 'Name28', email: 'UserName28@gmail.com', password: '123' },
        { userId: 29, userName: 'UserName29', firstName: 'User', lastName: 'Name29', email: 'UserName29@gmail.com', password: '123' },
        { userId: 30, userName: 'UserName30', firstName: 'User', lastName: 'Name30', email: 'UserName30@gmail.com', password: '123' },
        { userId: 31, userName: 'UserName31', firstName: 'User', lastName: 'Name31', email: 'UserName31@gmail.com', password: '123' },
        { userId: 32, userName: 'UserName32', firstName: 'User', lastName: 'Name32', email: 'UserName32@gmail.com', password: '123' },
        { userId: 33, userName: 'UserName33', firstName: 'User', lastName: 'Name33', email: 'UserName33@gmail.com', password: '123' },
        { userId: 34, userName: 'UserName34', firstName: 'User', lastName: 'Name34', email: 'UserName34@gmail.com', password: '123' },
        { userId: 35, userName: 'UserName35', firstName: 'User', lastName: 'Name35', email: 'UserName35@gmail.com', password: '123' },
        { userId: 36, userName: 'UserName36', firstName: 'User', lastName: 'Name36', email: 'UserName36@gmail.com', password: '123' },
        { userId: 37, userName: 'UserName37', firstName: 'User', lastName: 'Name37', email: 'UserName37@gmail.com', password: '123' },
        { userId: 38, userName: 'UserName38', firstName: 'User', lastName: 'Name38', email: 'UserName38@gmail.com', password: '123' },
        { userId: 39, userName: 'UserName39', firstName: 'User', lastName: 'Name39', email: 'UserName39@gmail.com', password: '123' },
        { userId: 40, userName: 'UserName40', firstName: 'User', lastName: 'Name40', email: 'UserName40@gmail.com', password: '123' },
        { userId: 41, userName: 'UserName41', firstName: 'User', lastName: 'Name41', email: 'UserName41@gmail.com', password: '123' },
        { userId: 42, userName: 'UserName42', firstName: 'User', lastName: 'Name42', email: 'UserName42@gmail.com', password: '123' },
        { userId: 43, userName: 'UserName43', firstName: 'User', lastName: 'Name43', email: 'UserName43@gmail.com', password: '123' },
        { userId: 44, userName: 'UserName44', firstName: 'User', lastName: 'Name44', email: 'UserName44@gmail.com', password: '123' },
        { userId: 45, userName: 'UserName45', firstName: 'User', lastName: 'Name45', email: 'UserName45@gmail.com', password: '123' },
        { userId: 46, userName: 'UserName46', firstName: 'User', lastName: 'Name46', email: 'UserName46@gmail.com', password: '123' },
        { userId: 47, userName: 'UserName47', firstName: 'User', lastName: 'Name47', email: 'UserName47@gmail.com', password: '123' },
        { userId: 48, userName: 'UserName48', firstName: 'User', lastName: 'Name48', email: 'UserName48@gmail.com', password: '123' },
        { userId: 49, userName: 'UserName49', firstName: 'User', lastName: 'Name49', email: 'UserName49@gmail.com', password: '123' },
        { userId: 50, userName: 'UserName50', firstName: 'User', lastName: 'Name50', email: 'UserName50@gmail.com', password: '123' }
    ]
});