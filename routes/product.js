import express from 'express';

const router = express.Router();
router.get('/products',(req,res) =>{
    res.json({
        mess: 'success'
    })
})
module.exports = router;