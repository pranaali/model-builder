const dotenv = require('dotenv');

dotenv.config();

const { connect } = require('mongoose');

const { getMongoConnectUri } = require('./lib/utils');
const { connectToMongoDB } = require('@pranaali/model-builder');

const app = require('./app');

(async () => {
  try {
    const mongoConnectUri = getMongoConnectUri();
    console.log(`mongoConnectUri->`, mongoConnectUri);
    const res = await connect(mongoConnectUri);
    // Step connect using mongo uri
    const connected = await connectToMongoDB(mongoConnectUri);
    if (res && connected) await app();
  } catch (e) {
    console.log(`e->`, e);
    process.exit(1);
  }
})();
