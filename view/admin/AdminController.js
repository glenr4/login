Ext.define('Login.view.admin.AdminController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.admin',

    onMain: function () {
        console.log("AdminController: onMain");
        this.getView().destroy();
        this.redirectTo('main');
    }
});