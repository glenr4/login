Ext.define('Login.mixin.Common', {
    extend: 'Ext.Mixin',

    createView: function (currentXType, newXType) {
        console.log('Common: createView');
        console.log(Ext.getClassName(currentXType));
        console.log(currentXType);
        console.log(newXType);

        console.log('Common: createView destroy');
        //currentXType.destroy();
        //var view = Ext.ComponentQuery.query(currentXType);
        //console.log(Ext.getClassName(view[0]));
        //view[0].destroy();

        view = this.getView('Viewport');
        console.log(Ext.getClassName(view));
        view.destroy();
        //view.close();

        console.log('Common: createView redirectTo');
        this.redirectTo(newXType);
    }
})