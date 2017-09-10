var AWS = require("aws-sdk")
require("amazon-cognito-js")

if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
  global.window = {localStorage}
}

AWS.config.region = "eu-central-1"
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: "eu-central-1:4c98ce77-afde-4a8d-aa52-49050d7fd9ff"
})

AWS.config.credentials.get(function() {
  var accessKeyId = AWS.config.credentials.accessKeyId
  var secretAccessKey = AWS.config.credentials.secretAccessKey
  var sessionToken = AWS.config.credentials.sessionToken

  // console.log({accessKeyId, secretAccessKey, sessionToken})

  var syncManager = new AWS.CognitoSyncManager()
  syncManager.openOrCreateDataset("hiscore", function(err, dataset) {

    dataset.put("pekka", "100", function(err, record) {
      console.log(record)
    })

    dataset.synchronize({
      onSuccess: function(dataset, newRecords) { console.log({dataset, newRecords})}
    })

  })
})
