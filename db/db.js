const mongoose = require("mongoose");

mongoose.connection.on("open", () => {
  console.log(">> Conectado a DB");
});

const { DB_NAME, DB_PASSWORD, DB_HOST } = process.env;

// Cloud DB:
const URI = `mongodb+srv://dbAdmin:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

// LocalHost DB;
// const URI = `mongodb://127.0.0.1:27017/pasteleria-next`;

async function connectDb() {
  // Checkear si ya está concetado a la DB
  if (!mongoose.connection.readyState) {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
}

module.exports = connectDb;
