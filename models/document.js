const {getRows, insertRow, updateRow, deleteRow} = require('../database/query');
var SqlString = require('sqlstring');

exports.find = async (offset, pageSize) => {
    const query = `SELECT  e.CustName as CustomerId_Value, t.* FROM document t  join customer e on t.CustomerId = e.CustomerId  LIMIT ?, ?`;
    return getRows(query,[offset,pageSize]);
}

exports.findById = async (DocumentId) => {
    const query = `SELECT  e.CustName as CustomerId_Value, t.* FROM document t  join customer e on t.CustomerId = e.CustomerId  WHERE t.DocumentId=? LIMIT 0,1`;
    return getRows(query,[DocumentId]);
}

exports.insert = async (object) => {
    const query = `INSERT INTO document set ?`;
    const id = await insertRow(query, object);
    return id > 0 ;
}

exports.update = async (DocumentId, object) => {
    const updateKeys = [];
    let updateValues = [];
    for (const key in object) {
        updateKeys.push(`${key}=?`);
        updateValues.push(`${object[key]}`);
    }
    let query = `UPDATE document SET ? WHERE DocumentId= ?`;
    updateValues = updateValues.concat([DocumentId])
    query = query.replace("?", updateKeys.join(","));
    const result = await updateRow(query, updateValues);
    return result ? this.findById(DocumentId) : null;
}

exports.remove = async (DocumentId) => {
    const query = `DELETE FROM document Where DocumentId= ? `;
    return deleteRow(query,[DocumentId]);
}

exports.count = async () => {
    const query = `SELECT count(*) TotalCount FROM document t  join customer e on t.CustomerId = e.CustomerId  `;
    const result = await getRows(query);
    if (result && result[0] && result[0].TotalCount && result[0].TotalCount > 0) {
        return result[0].TotalCount;
    } else {
        return 0;
    }
}

exports.search = async (offset, pageSize, key) => {
    const query = `SELECT  e.CustName as CustomerId_Value, t.* FROM document t  join customer e on t.CustomerId = e.CustomerId  WHERE  LOWER(t.DocumentId) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.CustomerId) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.DocType) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.DocIdentity) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.CreatedDate) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.ActivateDate) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.CancelDate) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.InAmount) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.OutAmount) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.BalanceAmount) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.DocStatus) LIKE `+SqlString.escape('%'+key+'%')+` LIMIT ?, ?`;
    return getRows(query,[offset, pageSize]);
}

exports.searchCount = async (key) => {
    const query = `SELECT count(*) TotalCount FROM document t  join customer e on t.CustomerId = e.CustomerId  WHERE  LOWER(t.DocumentId) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.CustomerId) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.DocType) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.DocIdentity) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.CreatedDate) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.ActivateDate) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.CancelDate) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.InAmount) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.OutAmount) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.BalanceAmount) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.DocStatus) LIKE `+SqlString.escape('%'+key+'%')+` `;
    const result = await getRows(query);
    if (result && result[0] && result[0].TotalCount && result[0].TotalCount > 0) {
        return result[0].TotalCount;
    } else {
        return 0;
    }
}


exports.getByCustomerid = async (offset, pageSize, CustomerId) => {
    const query = `SELECT  e.CustName as CustomerId_Value, t.* FROM document t  join customer e on t.CustomerId = e.CustomerId  WHERE t.CustomerId= ? LIMIT ?, ?`;
    return getRows(query,[CustomerId,offset,pageSize]);
}

exports.getByCustomeridCount = async (key) => {
    const query = `SELECT count(*) TotalCount FROM document t  join customer e on t.CustomerId = e.CustomerId  WHERE t.CustomerId= ?`;
    const result = await getRows(query,[CustomerId,offset,pageSize]);
    if (result && result[0] && result[0].TotalCount && result[0].TotalCount > 0) {
        return result[0].TotalCount;
    } else {
        return 0;
    }
}
