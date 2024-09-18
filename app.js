import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import hbs from 'hbs';
import path from 'path';
import { fileURLToPath } from 'url';
import connectToDB from './db/dbConn.js';
import User from './models/user.model.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const static_path=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../public/templates/views");



const app=express();
app.set('view engine', 'hbs');
app.set('views',template_path);


app.use(express.static(static_path));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.render('index')
})

app.use("/ping",(req,res)=>{
    res.send("pong");
})
app.get("/signup",(req,res)=>{
    res.render('signup')
})
app.post("/signin",async(req,res)=>{
    const {email,password}=req.body;
    if(!email || !password){
        res.send("All Fields are required");
    }
    const user=await User.findOne({email}).select("+password");
    if(!user && (await user.comparePassword(password))){
        res.send("Invalid credentials");
        return;
    }

    res.render("index")

})
app.post("/signup",async(req,res)=>{
    try {
        const {fullname,email,password}=req.body;
        if(!fullname || !email || !password){
            res.send("All Fields are required");
        }
        const userExists=await User.findOne({email});
        if(userExists){
            res.send("user already exists");
            return;
        }
        const user=await User.create({
            fullname,
            email,
            password
        })
        if(!user){
            res.send("unable to create account");
        }
        await user.save();
        res.render("index")
        // res.status(200).json({
        //     success:true,
        //     message:"Account created successfully",
        //     user
        // })
    } catch (error) {
        console.log(error)
    }
})


app.listen(3000,async()=>{
    await connectToDB();
    console.log(`listening to port`);
})