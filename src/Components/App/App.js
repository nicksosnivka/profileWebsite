import './App.css';
import React from 'react';
import HomePage from '../HomePage/Home';
import Personal from '../PersonalPage/Personal';
import Contact from '../ContactPage/Contact';
import SidebarNav from '../Sidebar/Sidebar';

export const appContext = React.createContext("Default Value")

function App() {

  // This is to handle which page is to be displayed [Home, Personal, Contact]
  const [pageState, setPageState] = React.useState([true, false, false]);

  return (
    <appContext.Provider value={{pageState, setPageState}}>
      <div className="App">
        <SidebarNav></SidebarNav>
        <div className='Body-container'>
          {pageState[0] ? <HomePage></HomePage> 
          : pageState[1] ? <Personal></Personal> 
          : pageState[2] ? <Contact></Contact>
          : <div>Error</div>}
        </div>
      </div>
    </appContext.Provider>
  );
}

export default App;
