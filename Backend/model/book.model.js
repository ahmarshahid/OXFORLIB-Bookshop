import mongoose from "mongoose";

const BookDetails = mongoose.Schema({
    name:String,
    price:Number,
    title:String,
    category:String,
    image:String

})

const BOOK = mongoose.model("Book",BookDetails)

export default BOOK;