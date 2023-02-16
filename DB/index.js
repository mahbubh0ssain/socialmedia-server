const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@social-media.qehxvpk.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

module.exports = client;

const dbConnect = async () => {
  try {
    await client.connect();
    console.log("DB connected successfully.");
  } catch (err) {
    console.log(err?.message);
  }
};
dbConnect();
