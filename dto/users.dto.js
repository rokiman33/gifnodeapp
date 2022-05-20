module.exports = {
    
"AccountId" : { required: true, type: "number"},
"UserName" : { required: true, type: "string"},
"Password" : { required: true, type: "string"},
"Email" : { required: true, type: "string"},
"IsActive" : { required: true, type: "boolean"},
"IsAdmin" : { required: true, type: "boolean"},
"LastLoginTime" : { required: false, type: "date"},
"CreatedDate" : { required: true, type: "date"},
"Creator" : { required: true, type: "number"},
"ModifiedDate" : { required: false, type: "date"},
"Modifier" : { required: false, type: "number"},
};

// allowed types - number, string, boolean, object, undefined
