exports.getMongoConnectUri = () => {
  return `mongodb://${process.env.MONGO_DB_SERVER}/${process.env.MONGO_DB_DATABASE_NAME}`;
};
