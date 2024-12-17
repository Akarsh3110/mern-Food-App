const Menu=require('../models/menu.models');

const getMenuItems=async(req,res)=>{
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

const addMenuItems=async(req,res)=>{
    const { name, description, price } = req.body;
    const menuId = req.params.menuId;

    if (!name || price == null) {
        return res.status(400).json({ message: "Item name and price are required" });
      }

    try {
        const menu = await Menu.findById(menuId);
        if (!menu) {
            return res.status(404).json({ message: "Menu not found" });
          }

        menu.items.push({ name, description, price });
        const updatedMenu = await menu.save();  
        res.status(200).json({
            success:true,
            data:updatedMenu,
            message:'MenuItems Added '
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
    getMenuItems,
    addMenuItems
}