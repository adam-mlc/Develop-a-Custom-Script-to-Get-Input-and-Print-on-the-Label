/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 */
define([], function() {
    function pageInit(context) {
        // This function runs when the page is initialized
        console.log('Client Script is running on Item Record view.');
    }

    function exportLBL() {
        var itemId = nlapiGetRecordId();
        var quantity = prompt('Please enter the quantity:');
        if (quantity !== null && quantity !== '') {
            var suiteletUrl = 'https://6734885.app.netsuite.com/app/site/hosting/scriptlet.nl?script=1964&deploy=1&itemId=' + itemId + '&quantity=' + quantity;
            window.open(suiteletUrl, '_blank');
        } else {
            alert('Quantity is required to print the LBL.');
        }
    }

    return {
        pageInit: pageInit,
        exportLBL: exportLBL
    };
});