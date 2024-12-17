import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import TabBar from './Components/TabBar/TabBar';
import MenuCard from './Components/TabBar/MenuCard/MenuCard';
import { CurrentTabContext } from './Contexts/currentTab';
import { useState } from 'react';
import Footer from './Components/Footer/Footer';
import Copyright from './Components/Copyright/Copyright';

function App() {
  const [activeTabId, setActiveTabId] = useState(null);
  return (
    <div className="App">
      <CurrentTabContext.Provider value={{activeTabId,setActiveTabId}}>
        <NavBar/>   
        <Banner/>
        <TabBar/>
        <MenuCard/>
        <Footer/>
        <Copyright/>
      </CurrentTabContext.Provider>
      
    </div>
  );
}

export default App;
