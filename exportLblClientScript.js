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
            var suiteletUrl = 'INSERT URL&itemId=' + itemId + '&quantity=' + quantity; // Replace "INSERT URL" with the URL of the Suitelet
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
