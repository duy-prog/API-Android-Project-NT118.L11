var db = require('../dbconnection/dbconnection');

var staff={
    getAllStaff: (callback) =>{
        return db.query("SELECT * FROM STAFF", callback); // get all staff from table STAFF
    },
    addAStaff: (STAFF, callback) =>{
        return db.query("INSERT INTO STAFF(STAFFID, STAFFNAME, DOB, PHONE, username, passwd, position) VALUES(?,?,?,?,?,?,?)",
         [STAFF.STAFFID, STAFF.STAFFNAME, STAFF.DOB, STAFF.PHONE, STAFF.username, STAFF.passwd, STAFF.position], callback); // truy van insert
    },
    deleteAStaff: (STAFF, callback) =>{
        return db.query("DELETE FROM")
    },
}
module.exports = staff;