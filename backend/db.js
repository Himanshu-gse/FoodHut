const mongoose = require("mongoose");
const mongo_URI = "mongodb+srv://foodHut:Himanshu%40%3F02@cluster0.a6ettuu.mongodb.net/foodhut?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongo_URI, { useNewUrlParser: true });

    console.log("Database connected");

    // const database = mongoose.connection.db;
    
    // Now you can access the collection and perform operations on it
    const fetched_data = mongoose.connection.db.collection('food_items');
    
    // Perform operations on the collection, for example:
    const foodCategories = await fetched_data.find({}).toArray();
    global.food_items = foodCategories;
    // console.log(global.food_items)


    const fetched_catdata = mongoose.connection.db.collection('foodCategory');
    const foodCategories2 = await fetched_catdata.find({}).toArray();
    global.foodCategory = foodCategories2;
    // console.log(global.foodCategory)



  } catch (error) {
    console.error("Error connecting to database:", error);
  }
};

module.exports = mongoDB;































// ___________________________________ For POSTMAN (http://localhost:5000/foodCategories)_____________________________
/*

const mongoose = require("mongoose");
const mongo_URI = "mongodb+srv://foodHut:Himanshu%40%3F02@cluster0.a6ettuu.mongodb.net/foodhut?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongo_URI, { useNewUrlParser: true });

    console.log("Database connected");

  } catch (error) {
    console.error("Error connecting to database:", error);
  }
};

const getFoodCategories = async () => {
  try {
    // const database = mongoose.connection.db;
    
    // Now you can access the collection and perform operations on it
    const fetched_data = mongoose.connection.db.collection('food_items');
    
    // Perform operations on the collection, for example:
    const foodCategories = await fetched_data.find({}).toArray();
    return foodCategories;

  } catch (error) {
    console.error("Error connecting to getFoodCategories:", error);
  }
};


 
module.exports = {
    mongoDB, 
    getFoodCategories};


*/
