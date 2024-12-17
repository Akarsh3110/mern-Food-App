const Menu=require('../models/menu.models');

const getMenu=async(req,res)=>{
    try {
        const menus = await Menu.find({});
        res.status(200).json({
            success:true,
            data:menus,
            message:'Menus fetched'
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success:false,
            message:'Some error occurred'
        })
    }
}

const addMenu=async(req,res)=>{
    const { name, description } = req.body;
    if (!name) {
        return res.status(400).json({ message: "Menu name is required" });
      }
    try {
        const newMenu=new Menu({ name, description });
        await newMenu.save()
        res.status(201).json({
            success:true,
            data:newMenu,
            message:'Menu Added'
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success:false,
            message:'Some error occurred'
        })
    }
}

module.exports={
    getMenu,
    addMenu
}