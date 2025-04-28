/**
 * @NApiVersion 2.x
 * @NScriptType UserEventScript
 */
define(['N/ui/serverWidget'], function(serverWidget) {
    function beforeLoad(context) {
        if (context.type === context.UserEventType.VIEW) {
            var form = context.form;
            form.addButton({
                id: 'custpage_export_lbl',
                label: 'Print Qty Lbl',
                functionName: 'exportLBL'
            });
            form.clientScriptModulePath = './exportLblClientScript.js';
        }
    }
    return {
        beforeLoad: beforeLoad
    };
});