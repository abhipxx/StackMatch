const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
require('dotenv').config();

const app=express();

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

const authRoutes = require('./routes/authRoutes');const projectRoutes=require('./routes/projectRoutes');
const matchRoutes=require('./routes/matchRoutes');
const aiRoutes=require('./routes/aiRoutes')

app.use('/api/auth', authRoutes);
app.use('/api/projects',projectRoutes);
app.use('/api/match',matchRoutes);
app.use('/api/ai',aiRoutes);

app.get('/',(req,res)=>{
    res.json({message:'StackMatch API is running'});
});

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('MongoDB connected');
    app.listen(process.env.PORT || 5000,()=>{
        console.log('Server running on port 5000')
    });
})
.catch((err)=>console.log(err));