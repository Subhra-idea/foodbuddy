const mongoose = require("mongoose");
const URI = "mongodb://127.0.0.1/foodbuddy "; //mongoose.connect('mongodb://127.0.0.1/test')
const connectToMongo = async () => {
  mongoose.connect(URI, async (err, result) => {
    if (!err) {
      console.log("Connected to mongo sucessfully");
      const fetched_data = await mongoose.connection.db.collection("fooddata");
      //fetching the data of food items form mongo
      fetched_data.find({}).toArray(function (err, data) {
        if (err) console.log(err);
        else {
          global.fooditems = data;
          // console.log(global.fooditems);
        }
      });

      //fetching the data of food catergory form mongo

      const fetched_foodcat = await mongoose.connection.db.collection(
        "foodcategory"
      );
      fetched_foodcat.find({}).toArray(function (err, catdata) {
        if (err) console.log(err);
        else {
          global.foodcat = catdata;
          // console.log(global.foodcat);
        }
      });
    } else console.log(err);
  });
};

module.exports = connectToMongo;
