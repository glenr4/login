Ext.define("Login.util.Msg", {
    singleton: true,

    alert: function (title, message, fn, scope) {
        return this.messagebox().alert(title, message, fn, scope);
    },

    confirm: function (cfg, message, fn, scope) {
        return this.messagebox().confirm(cfg, message, fn, scope);
    },

    show: function (config) {
        return this.messagebox().show(config);
    },

    messagebox: function () {

        return Ext.Msg;
    }
});