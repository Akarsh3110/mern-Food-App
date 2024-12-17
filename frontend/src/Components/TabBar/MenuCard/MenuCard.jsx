import React, { useContext, useEffect, useState } from 'react'
import '../MenuCard/MenuCard.css'
import LeftDesign from "../../../assets/Images/leftDesign.png"
import RightDesign from "../../../assets/Images/rightDesign.png"
import TopPic from "../../../assets/Images/topPic.png"
import BottomPic from "../../../assets/Images/bottomPic.png"
import { useDispatch, useSelector } from 'react-redux'
import { addMenuItems, getMenuItems } from '../../../redux/menuItem-slice'
import { CurrentTabContext } from '../../../Contexts/currentTab'
function MenuCard() {
    const {menuItems}=useSelector(state=>state.menuItem)
    const{activeTabId}=useContext(CurrentTabContext)
     const [isDialogOpen, setIsDialogOpen] = useState(false); // State to manage dialog visibility
    const [itemValues, setItemValues] = useState({
            name:'',
            description:'',
            price:''
          })
          console.log(itemValues);
    
          const handleInputs=(e)=>{
            setItemValues({
              ...itemValues,
              [e.target.name]:e.target.value
            })
          }
    
        //   const [tabs, setTabs] = useState([]);
    
        const closeDialog = () => {
            setIsDialogOpen(false);
            setItemValues({ name: '', description: '',price:'' });
          };
          const dispatch=useDispatch()

          const handleAddItem = (e) => {
                  e.preventDefault();
                  if(activeTabId){
                      dispatch(addMenuItems({itemValues,menuId:activeTabId})).then(data=>{
                        console.log(data,"addItemsMessage");
                        if(data?.payload?.success){
                          //   dispatch(getMenu())
                          dispatch(getMenuItems())
                            // setTabs([...tabs, menuValues]);
            
                            setItemValues({ name: '', description: '',price:'' });
                            setIsDialogOpen(false);
                        }
                    })
                  }
                  
          
                  
                };

             useEffect(() => {
                dispatch(getMenuItems())
             }, [dispatch])   
             console.log(menuItems,'Items');
             if (!Array.isArray(menuItems)) {
              console.error("menuItems is not an array:", menuItems);
              return null; // or some fallback UI
            }

            const currentTabItems = menuItems?.find((menu) => menu._id === activeTabId)?.items || [];
            console.log(currentTabItems,'currentTabItems');
            

  return (
    <div className='MenuCard'>
        <img className='left-design' src={LeftDesign} alt="left" />
        <div className="center-card">
            {/* <img className='top-pic' src={TopPic} alt="TopPic" /> */}
            <div className='cardheader'>
                <div className="line"></div>
                <h2>BRUNCH COCKTAILS</h2>
                <div className="line"></div>
            </div>
            <div className="card-contents">
            {
                currentTabItems && currentTabItems.length>0?
                currentTabItems.map((item) => (
                    
                        <div className="item" key={item._id}>
                            <div className="item-head">
                                <h3>{item?.name}......................</h3>
                                {/* <div className="dotted-line"></div> */}
                                <h4>${item.price}</h4>
                            </div>
                            <p>{item.description}</p>
                        </div>
                        )):null
              }
              </div>
            
            <button className='addItem-btn' onClick={() => setIsDialogOpen(true)}>ADD ITEMS</button>

            {/* <img className='bottom-pic' src={BottomPic} alt="BottomPic" /> */}
        </div>
        <img className='right-design' src={RightDesign} alt="right" />
        {isDialogOpen && (
        <div className='dialog'>
          <div className='dialog-content'>
            <h2>Add New Tab</h2>
            <form onSubmit={handleAddItem}>
              <div className='form-group'>
                <label htmlFor='tabName'>Tab Name</label>
                <input
                  type='text'
                  id='tabName'
                  name='name'
                  value={itemValues.name}
                  onChange={handleInputs}
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor='description'>Description</label>
                <input
                  type='text'
                  id='description'
                  name='description'
                  value={itemValues.description}
                  onChange={handleInputs}
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor='description'>price</label>
                <input
                  type='text'
                  id='price'
                  name='price'
                  value={itemValues.price}
                  onChange={handleInputs}
                  required
                />
              </div>
              <div className='dialog-actions'>
                <button type='submit'>Add Tab</button>
                <button type='button' onClick={closeDialog}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default MenuCard