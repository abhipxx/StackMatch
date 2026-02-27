const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    skills:{
        type:[String],
        default:[]
    },
    yoe:{
        type:Number,
        default:0
    },
    rating:{
        type:Number,
        default:0
    },
    github:{
        type:String,
        default:" "
    }
},
{timestamps:true});
module.exports=mongoose.model('User',userSchema);