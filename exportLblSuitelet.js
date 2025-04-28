/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */
define(['N/render', 'N/record', 'N/file'], function(render, record, file) {
    function onRequest(context) {
        if (context.request.method === 'GET') {
            var itemId = context.request.parameters.itemId;
            var quantity = context.request.parameters.quantity;
            var itemRecord = record.load({
                type: record.Type.INVENTORY_ITEM,
                id: itemId
            });

            var currentDate = new Date();
            var day = ('0' + currentDate.getDate()).slice(-2);
            var month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
            var year = currentDate.getFullYear();
            var customFormattedDate = day + '-' + month + '-' + year;

            var renderer = render.create();
            renderer.setTemplateByScriptId('CUSTTMPL_510_6734885_198'); // Replace with your template ID
            renderer.addRecord('record', itemRecord);
            renderer.addCustomDataSource({
                format: render.DataSource.OBJECT,
                alias: 'customData',
                data: {
                    quantity: quantity,
                    printedDate: customFormattedDate
                }
            });

            var pdfFile = renderer.renderAsPdf();
            context.response.writeFile({
                file: pdfFile,
                isInline: true
            });
        }
    }
    return {
        onRequest: onRequest
    };
});