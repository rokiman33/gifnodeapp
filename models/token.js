const {getRows} = require('../database/query');

exports.authLogin = async (username,password) => {
    const query = `SELECT  t.* FROM users t  WHERE t.UserName='${username}' AND t.Password='${password}' LIMIT 0,1`;
   // console.log(query);
return getRows(query); 
}

