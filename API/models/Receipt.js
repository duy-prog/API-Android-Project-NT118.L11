var db = require('../dbconnection/dbconnection');

var receipt = {
    getAllReceipt: (callback) =>{
        return db.query("SELECT * FROM RECEIPT", callback); 
    },
    getAllCompleteReceipt: (callback) => {
        return db.query("SELECT * FROM receipt WHERE TYPE=1" , callback);
    },
    getAllInCompleteReceipt: (callback) => {
        return db.query("SELECT * FROM receipt WHERE TYPE=0" , callback);
    },
    deleteAReceipt: (deletedReceipt, callback) => {
        return db.query("DELETE FROM RECEIPT WHERE RECEIPT_ID=?", [deletedReceipt], callback);
    },
    getReceiptById: (RECEIPT_ID, callback) => {
        return db.query("SELECT * FROM receipt WHERE RECEIPT_ID = ?" , [RECEIPT_ID],  callback);
    }, 
    insertNewReceipt: (STAFFID, CUSTOMER_ID, TBID, TYPE, callback) => {
        return db.query("INSERT INTO RECEIPT(STAFFID, CUSTOMER_ID, TBID, TYPE) VALUES (?,?,?,1)", [STAFFID, CUSTOMER_ID, TBID, TYPE], callback);
    }, 
    getIdOfCurrentReceipt: (callback) =>{
        return db.query('SELECT RECEIPT_ID FROM RECEIPT ORDER BY RECEIPT_ID DESC LIMIT 1', callback);
    },
    updateReceiptTotalPrice: (callback) => {
        return db.query(`UPDATE receipt JOIN receiptdetails on receiptdetails.RECEIPT_ID = receipt.RECEIPT_ID SET TOTALPRICE = (SELECT SUM(receiptdetails.price) FROM receiptdetails WHERE receipt.RECEIPT_ID = receiptdetails.RECEIPT_ID) WHERE receipt.RECEIPT_ID = receiptdetails.RECEIPT_ID`, callback)
    }
}

module.exports = receipt;

