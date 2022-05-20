const {getRows, insertRow, updateRow, deleteRow} = require('../database/query');
var SqlString = require('sqlstring');

exports.find = async (offset, pageSize) => {
    const query = `SELECT  t.* FROM users t  LIMIT ?, ?`;
    return getRows(query,[offset,pageSize]);
}

exports.findById = async (Id) => {
    const query = `SELECT  t.* FROM users t  WHERE t.Id=? LIMIT 0,1`;
    return getRows(query,[Id]);
}

exports.insert = async (object) => {
    const query = `INSERT INTO users set ?`;
    const id = await insertRow(query, object);
    return id > 0 ;
}

exports.update = async (Id, object) => {
    const updateKeys = [];
    let updateValues = [];
    for (const key in object) {
        updateKeys.push(`${key}=?`);
        updateValues.push(`${object[key]}`);
    }
    let query = `UPDATE users SET ? WHERE Id= ?`;
    updateValues = updateValues.concat([Id])
    query = query.replace("?", updateKeys.join(","));
    const result = await updateRow(query, updateValues);
    return result ? this.findById(Id) : null;
}

exports.remove = async (Id) => {
    const query = `DELETE FROM users Where Id= ? `;
    return deleteRow(query,[Id]);
}

exports.count = async () => {
    const query = `SELECT count(*) TotalCount FROM users t  `;
    const result = await getRows(query);
    if (result && result[0] && result[0].TotalCount && result[0].TotalCount > 0) {
        return result[0].TotalCount;
    } else {
        return 0;
    }
}

exports.search = async (offset, pageSize, key) => {
    const query = `SELECT  t.* FROM users t  WHERE  LOWER(t.Id) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.AccountId) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.UserName) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.Password) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.Email) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.IsActive) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.IsAdmin) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.LastLoginTime) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.CreatedDate) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.Creator) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.ModifiedDate) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.Modifier) LIKE `+SqlString.escape('%'+key+'%')+` LIMIT ?, ?`;
    return getRows(query,[offset, pageSize]);
}

exports.searchCount = async (key) => {
    const query = `SELECT count(*) TotalCount FROM users t  WHERE  LOWER(t.Id) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.AccountId) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.UserName) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.Password) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.Email) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.IsActive) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.IsAdmin) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.LastLoginTime) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.CreatedDate) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.Creator) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.ModifiedDate) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.Modifier) LIKE `+SqlString.escape('%'+key+'%')+` `;
    const result = await getRows(query);
    if (result && result[0] && result[0].TotalCount && result[0].TotalCount > 0) {
        return result[0].TotalCount;
    } else {
        return 0;
    }
}


