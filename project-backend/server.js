import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

//moongoose connection

mongoose.connect("mongodb://127.0.0.1:27017/Personal-Portfolio", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//mongoose Schemas-----------------------------------------------

// user schema
const userSchema = new mongoose.Schema({
    userName: String,
    userEmail: String,
    userNumber: Number,
    userPassword: String,
});

//blogs schema
const blogsSchema = new mongoose.Schema({
    blogTitle: String,
    blogData: String,
});
//----------------------------------------------------------------

//mongoose models-------------------------------------------------
const Users = mongoose.model("user", userSchema);
const Blogs = mongoose.model("blog", blogsSchema);
//...............................................................


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});