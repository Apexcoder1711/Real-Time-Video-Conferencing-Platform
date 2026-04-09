import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        name : {type : String , required : true},
        username : {type : String , required : true , unique : true},
        password : {type : String , requried : true},
        token : {type : String}
    }
)

const User = mongoose.model("User" , userSchema);

export {User} ; // curly braces me isiliye rkha hai kyuki agr kuch aur v add krna hua users ke liye toh add kr ke export isi  me kr ske