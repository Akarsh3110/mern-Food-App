const express=require('express')

const {
    addMenu,
    getMenu
}=require('../controllers/menu-controller')

const router=express.Router();

router.post('/add',addMenu)
router.get('/get',getMenu)
module.exports=router;