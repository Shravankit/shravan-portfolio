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

//project Schema
const projectSchema = new mongoose.Schema({
    querierName: String,
    querierNumber: Number,
    querierEmail: String,
    projectTitle: String,
    projectDescription: String,
})
//----------------------------------------------------------------

//mongoose models-------------------------------------------------
const Users = mongoose.model("user", userSchema);
const Blogs = mongoose.model("blog", blogsSchema);
const Project = mongoose.model("project", projectSchema);
//................................................................

// project storing logic

app.post('/api/project', async (req, res) => {
    const {querierName, querierNumber, querierEmail, projectTitle, projectDescription} = req.body;
    
    try {

        const projectData = new Project({
            querierName,
            querierNumber,
            querierEmail,
            projectTitle,
            projectDescription,
        });

        await projectData.save();
        res.status(200).json({ message: 'saved successfully' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.get('/api/project', async (req, res) => {
    try {
        const response = await Project.find();
        res.status(200).json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'internal servevr issue'});
    }
});


//blogs logic
app.post('/api/blogs', async (req, res) => {
    const {blogTitle, blogData} = req.body;

    try {
        const newBlog = new Blogs({
            blogTitle,
            blogData,
        });

        await newBlog.save();
        res.status(200).json({message: 'blog saved succesfully'});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'internal server issue'});
    }
});

app.get('/api/blogs', async (req, res) => {
    try {
        const blogs = await Blogs.find();
        res.status(200).json(blogs);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'internal server issue'})
    }
})

app.delete('/api/blogs/:id', async (req, res) => {
    try {
        const deleteBlog = await Blogs.findByIdAndDelete(req.params.id);
        if(!deleteBlog)
        {
            return res.status(404).json({message: 'blog is not deleted'});
        }
        res.json({message: 'blog deleted succesfully'});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    } 
});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});