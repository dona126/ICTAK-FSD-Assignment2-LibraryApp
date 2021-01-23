//Accessing Mongoose package
const mongoose=require("mongoose");

//Database connection
mongoose.connect("mongodb://localhost:27017/library");

// mongoose.connect("mongodb+srv://userone:userone@libraryapp.5vzr3.mongodb.net/Library?retryWrites=true&w=majority")


//Schema definition (used for both books and authors)
const Schema = mongoose.Schema;
const BookSchema = new Schema({

                title: String,
                author: String,
                life:String,
                genre: String,
                image1: String,
                image2: String
            })


mongoose.models = {};

//Model creation
var Bookdata = mongoose.model('bookdata',BookSchema);
module.exports = Bookdata;