const {getRows, insertRow, updateRow, deleteRow} = require('../database/query');
var SqlString = require('sqlstring');

exports.find = async (offset, pageSize) => {
    const query = `SELECT  t.* FROM customer t  LIMIT ?, ?`;
    return getRows(query,[offset,pageSize]);
}

exports.findById = async (CustomerId) => {
    const query = `SELECT  t.* FROM customer t  WHERE t.CustomerId=? LIMIT 0,1`;
    return getRows(query,[CustomerId]);
}

exports.insert = async (object) => {
    const query = `INSERT INTO customer set ?`;
    const id = await insertRow(query, object);
    return id > 0 ;
}

exports.update = async (CustomerId, object) => {
    const updateKeys = [];
    let updateValues = [];
    for (const key in object) {
        updateKeys.push(`${key}=?`);
        updateValues.push(`${object[key]}`);
    }
    let query = `UPDATE customer SET ? WHERE CustomerId= ?`;
    updateValues = updateValues.concat([CustomerId])
    query = query.replace("?", updateKeys.join(","));
    const result = await updateRow(query, updateValues);
    return result ? this.findById(CustomerId) : null;
}

exports.remove = async (CustomerId) => {
    const query = `DELETE FROM customer Where CustomerId= ? `;
    return deleteRow(query,[CustomerId]);
}

exports.count = async () => {
    const query = `SELECT count(*) TotalCount FROM customer t  `;
    const result = await getRows(query);
    if (result && result[0] && result[0].TotalCount && result[0].TotalCount > 0) {
        return result[0].TotalCount;
    } else {
        return 0;
    }
}

exports.search = async (offset, pageSize, key) => {
    const query = `SELECT  t.* FROM customer t  WHERE  LOWER(t.CustomerId) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.CustName) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.CustIdentity) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.CustCert) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.CustDocType) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.CustFinalDate) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.CustActivationDate) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.CustSale) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.CustPay) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.CustReLoad) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.CustStatus) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.CustInfoAdic1) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.CustInfoAdic2) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.CustInfoAdic3) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.CustInfoAdic4) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.CustDateAdic1) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.CustDateAdic2) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.CustValueAdic1) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.CustValueAdic2) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.CustValueAdic3) LIKE `+SqlString.escape('%'+key+'%')+` LIMIT ?, ?`;
    return getRows(query,[offset, pageSize]);
}

exports.searchCount = async (key) => {
    const query = `SELECT count(*) TotalCount FROM customer t  WHERE  LOWER(t.CustomerId) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.CustName) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.CustIdentity) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.CustCert) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.CustDocType) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.CustFinalDate) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.CustActivationDate) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.CustSale) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.CustPay) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.CustReLoad) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.CustStatus) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.CustInfoAdic1) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.CustInfoAdic2) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.CustInfoAdic3) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.CustInfoAdic4) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.CustDateAdic1) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.CustDateAdic2) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.CustValueAdic1) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.CustValueAdic2) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.CustValueAdic3) LIKE `+SqlString.escape('%'+key+'%')+` `;
    const result = await getRows(query);
    if (result && result[0] && result[0].TotalCount && result[0].TotalCount > 0) {
        return result[0].TotalCount;
    } else {
        return 0;
    }
}


