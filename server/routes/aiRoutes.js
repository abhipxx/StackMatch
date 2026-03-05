const express=require('express');
const router=express.Router();
const {getAISuggestion}=require('../controllers/aiController');
const authMiddleware=require('../middleware/authMiddleware');

router.post('/suggest',authMiddleware,getAISuggestion);

module.exports=router;
