//npm i express nodemon ejs //to install package //here we install ejs package
//"start":"nodemon app.js" add this line in package.json file in script property to setup nodemon
const express=require('express');//setup express
const app=express();            //setup express
const PORT=8080;                  //port value
const connectedDB=require('./DB/connectDB');//to require the connectedDB we made in DB folder
const cors=require('cors');
const morgan=require('morgan');
const routes=require('./routes/index');

//db
connectedDB();

//middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());   //use for json
app.use(express.urlencoded({extended:true}));

//routes
app.use(routes);

app.listen(PORT,()=>{   //listen the port
    console.log(`server is connected to ${PORT}`);
})