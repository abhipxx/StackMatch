const mongoose=require('mongoose');

const projectSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        default:" "
    },
    skills:{
        type:[String],
        required:true
    },
    github:{
        type:String,
        default:" "
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    membersNeeded:{
        type:Number,
        default:1
    },
    status:{
        type:String,
        enum:['open','in-progress','completed'],
        default:'open'
    }
}
,{timestamps:true});

module.exports=mongoose.model('Project',projectSchema);