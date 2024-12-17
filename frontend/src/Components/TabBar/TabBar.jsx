import React, { useContext, useEffect, useState } from 'react'
import '../TabBar/TabBar.css'
import { useDispatch, useSelector } from 'react-redux';
import { addNewMenu, getMenu } from '../../redux/menu-slice';
import { CurrentTabContext } from '../../Contexts/currentTab';
function TabBar() {
    const {menus}=useSelector(state=>state.menu)


    

    const [isDialogOpen, setIsDialogOpen] = useState(false); // State to manage dialog visibility
    // const [activeTabId, setActiveTabId] = useState(null); // Track active tab ID
    const{activeTabId,setActiveTabId}=useContext(CurrentTabContext)
    const [menuValues, setmenuValues] = useState({
        name:'',
        description:'',
      })
      console.log(menuValues);

      const handleInputs=(e)=>{
        setmenuValues({
          ...menuValues,
          [e.target.name]:e.target.value
        })
      }

    //   const [tabs, setTabs] = useState([]);

    const closeDialog = () => {
        setIsDialogOpen(false);
        setmenuValues({ name: '', description: '' });
      };

      const dispatch=useDispatch()
      // Function to handle form submission
      const handleAddTab = (e) => {
        e.preventDefault();

        dispatch(addNewMenu(menuValues)).then(data=>{
            console.log(data,"addMessage");
            if(data?.payload?.success){
                dispatch(getMenu())
                // setTabs([...tabs, menuValues]);

                setmenuValues({ name: '', description: '' });
                setIsDialogOpen(false);
            }
        })

        
      };

     
      useEffect(() => {
        dispatch(getMenu())
      }, [dispatch])
      console.log(menus,'menuus');

      const handleTabClick = (tabId) => {
        setActiveTabId(tabId); // Set the clicked tab as the active tab
        console.log('Tab clicked:', tabId);
    };

  return (
    <div className='TabBar'>
        
        <div className="tab-list">
        { menus && menus.length>0?
            menus.map((tab) => (
            <div key={tab._id} 
                // className="tab-item" 
                className={`tab-item ${activeTabId === tab._id ? 'active' : ''}`} 
                onClick={() => handleTabClick(tab._id)}>
                <h3>{tab.name}</h3>
                {/* <p>{tab.description}</p> */}
            </div>
            )):null
        }
      </div>
      <button className='plus-btn' onClick={() => setIsDialogOpen(true)}>+</button>
        {/* Dialog Box */}
      {isDialogOpen && (
        <div className='dialog'>
          <div className='dialog-content'>
            <h2>Add New Tab</h2>
            <form onSubmit={handleAddTab}>
              <div className='form-group'>
                <label htmlFor='tabName'>Tab Name</label>
                <input
                  type='text'
                  id='tabName'
                  name='name'
                  value={menuValues.name}
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
                  value={menuValues.description}
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

export default TabBar