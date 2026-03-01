process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
require('dotenv').config();

const app=express();
app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/authRoutes');const projectRoutes=require('./routes/projectRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/projects',projectRoutes);

app.get('/',(req,res)=>{
    res.json({message:'StackMatch API is running'});
});

mongoose.connect(process.env.MONGO_URI, {
  tls: true,
  tlsAllowInvalidCertificates: true,
  tlsAllowInvalidHostnames: true
})
.then(()=>{
    console.log('MongoDB connected');
    app.listen(process.env.PORT || 5000,()=>{
        console.log('Server running on port 5000')
    });
})
.catch((err)=>console.log(err));