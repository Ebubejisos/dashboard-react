import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
}

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);

  // function for displaying different right side navigations when clicked
  const handleClick = (clicked) => {
    // resets state to initial state then searches the object using the argument passed and updates the value to 'true' 
    setIsClicked({ ...initialState, [clicked]: true });
  }

  return (
    <StateContext.Provider
      // whatever is passed into value is passed to all components
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize
      }}
    >
      {/* whatever is wrapped with this is displayed in the Dom, children here represents any html tag or react component in our case it will be the App since we want everything in our App to have access to the value passed*/}
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);
