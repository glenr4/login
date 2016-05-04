Ext.define("Login.controller.Messages", {
    extend: "Ext.app.Controller",
    requires: ["Ext.MessageBox"],

    routes: {
        "alert/:title/:message": {
            action: "showAlert",
            conditions: {
                ":title": "([^\/]+)",
                ":message": "(.*)"
            }
        },
        "message/:title/:message": {
            action: "showMessage",
            conditions: {
                ":title": "([^\/]+)",
                ":message": "(.*)"
            }
        }
    },
    listen: {
        global: {
            showalert: "alert",
            showconfirm: "confirm",
            showprompt: "prompt",
            showmessagebox: "show"
        }
    },

    // Displays an alert message box with an OK button and plays the alert sound
    alert: function (title, message, fn, scope, redirectToOnClose) {
        this.message(title, message, fn, scope, redirectToOnClose);

        if ("plugins" in window && "notification" in window.plugins) {
            window.plugins.notification.alert();
        }
    },

    // Displays a confirmation message box with Yes and No buttons
    confirm: function (title, message, fn, scope, redirectToOnClose) {
        this.show({
            title: title || null,
            message: message || null,
            buttons: Ext.MessageBox.YESNO,
            prompt: false,
            scope: scope,
            fn: function () {
                if (fn) {
                    Ext.callback(fn, scope, arguments);
                }
            }
        }, redirectToOnClose);
    },

    // Displays a message box with an OK button
    message: function (title, message, fn, scope, redirectToOnClose) {
        this.show({
            title: title || null,
            message: message || null,
            buttons: Ext.MessageBox.OK,
            prompt: false,
            fn: function () {
                if (fn) {
                    Ext.callback(fn, scope, arguments);
                }
            },
            scope: scope
        }, redirectToOnClose);
    },

    // Displays a message box with OK and Cancel buttons prompting the user to enter some text
    prompt: function (title, message, fn, scope, multiline, value, prompt, redirectToOnClose) {
        this.show({
            title: title || null,
            message: message || null,
            buttons: Ext.MessageBox.OKCANCEL,
            scope: scope,
            prompt: prompt || true,
            multiline: multiline,
            value: value,
            fn: function () {
                if (fn) {
                    Ext.callback(fn, scope, arguments);
                }
            }
        }, redirectToOnClose);
    },

    // Displays a message box with the specified configuration
    show: function (config, redirectToOnClose) {
        var msgbox = Ext.create("Ext.MessageBox");

        // Monitor for back button changes
        Ext.util.History.on({
            change: {
                fn: msgbox.hide,
                args: [Ext.Msg.defaultAllowedConfig.hideAnimation],
                scope: msgbox,
                single: true
            }
        });

        // When we hide the message box, remove our back button monitor and go back to the previous or specified route
        msgbox.on("hide", function () {
            Ext.util.History.un({
                change: {
                    fn: msgbox.hide,
                    args: [Ext.Msg.defaultAllowedConfig.hideAnimation],
                    scope: msgbox,
                    single: true
                }
            });

            // Don't destroy it immediately, or the button callback will not be called...
            Ext.defer(msgbox.destroy, 1000, msgbox);

            if (redirectToOnClose) {
                this.redirectTo(redirectToOnClose);
            } else {
                //    Ext.util.History.back();
            }
        }, this);

        msgbox.show(config);
    },

    // Displays an alert message
    showAlert: function (title, message) {
        this.alert(title, message, Ext.emptyFn, this);
    },

    // Displays a message
    showMessage: function (title, message) {
        this.message(title, message, Ext.emptyFn, this);
    }
});