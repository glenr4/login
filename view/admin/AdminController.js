Ext.define('Login.view.admin.AdminController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.admin',

    onMain: function () {
        console.log("AdminController: onMain");
        this.getView().destroy();
        this.redirectTo('main');
    },

    // Logout
    //TODO: put into a common function and use routing to redirect to the home page
    onLogout: function () {
        console.log('AdminController: onLogout');
        var view = this.getView();
        var self = this;

        // deleteme
        console.log('Viewport:');
        console.log(this.getView('Viewport'));

        Login.util.Msg.show({
            buttons: Ext.Msg.YESNO,
            title: 'Please Confirm',
            message: 'Do you want to logout?',
            icon: Ext.Msg.QUESTION,
            fn: function (btn) {
                console.log(btn);
                if (btn === 'yes') {
                    console.log("AdminController: Logout: yes clicked");

                    // remove user
                    Login.util.UserCtrl.logout();

                    if (!Login.util.UserCtrl.getLoginState()) {
                        // Remove current View
                        view.destroy();

                        self.redirectTo('login');
                        //// Add the Login Window
                        //Ext.create({
                        //    xtype: 'loginview'
                        //});
                    } else {
                        console.log('AdminController: failed to update current user store');
                    }
                }
            }
        })
    }
});