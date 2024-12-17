require('dotenv').config();

const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const menuRouter=require('./routes/menu-routes')
const menuItemRouter=require('./routes/menuItems-routes')


const app=express()
const PORT=process.env.PORT || 5000;

app.use(
    cors({
        origin:process.env.CLIENT_BASE_URL,
        methods:['GET','POST','PUT','DELETE'],
        allowedHeaders:[
            "Content-Type",
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma'
        ],
        credentials:true
    })
)

// app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/menu',menuRouter)
app.use('/api/menuItems',menuItemRouter)


app.listen(PORT,()=>(console.log('Server is Running on Port:'+PORT)))

mongoose.connect(
    // 'mongodb+srv://31akarshb:akarshb31@cluster0.nwx4z.mongodb.net/'
    process.env.MONGO_URL
)
.then(()=>console.log("MongoDB connected Successfully"))
.catch((err)=>console.log(err))