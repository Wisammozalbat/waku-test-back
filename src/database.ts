import mongoose from "mongoose";

const URI = process.env.MONGODB_URI
  ? process.env.MONGODB_URI
  : "mongodb://localhost/apigames";

  // const URI = "mongodb://localhost/apigames";


mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})
.then(() => console.log("connection successful"))
.catch(err => console.error(`There was an error: ${err}`))

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("BD is connected");
});
