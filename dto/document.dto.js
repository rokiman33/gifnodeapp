module.exports = {
    
"CustomerId" : { required: true, type: "number"},
"DocType" : { required: true, type: "number"},
"DocIdentity" : { required: true, type: "string"},
"CreatedDate" : { required: true, type: "date"},
"ActivateDate" : { required: false, type: "date"},
"CancelDate" : { required: false, type: "date"},
"InAmount" : { required: false, type: "number"},
"OutAmount" : { required: false, type: "number"},
"BalanceAmount" : { required: false, type: "number"},
"DocStatus" : { required: false, type: "string"},
};

// allowed types - number, string, boolean, object, undefined
