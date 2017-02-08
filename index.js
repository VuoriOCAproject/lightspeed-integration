require('dotenv')
	.config()


const lightspeed = require('./lib/lightspeed');

let accountId = null;

lightspeed
	.getCurrentAccount()
    .then(account => {
    	console.log('GOT ACCOUNT', account);
    	accountId = account.accountID;
        return lightspeed.getInventory(account.accountID);
    })
    .then(inventory => {
    	console.log('GOT INVENTORY', inventory);
    	return lightspeed.getReports(accountId);
    })
    .then(reports => {
    	console.log('GOT REPERTOS', reports);
    })
    .catch(console.log);