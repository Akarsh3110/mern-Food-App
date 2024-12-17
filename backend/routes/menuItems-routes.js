const express=require('express')

const {
    addMenuItems,
    getMenuItems
}=require('../controllers/menuItem-controllers')

const router=express.Router();

router.post('/add/:menuId',addMenuItems)
router.get('/get',getMenuItems)

module.exports=router;