import { createContext } from 'react';

export default createContext({
  isModeAdmin: false,
  setIsModeAdmin: () => {},

  isCollapsed: true,
  setIsCollapsed: () => {},

  isAddSelected: false,
  setIsAddTabSelected: () => {},

  isEditSelected: false,
  setIsEditTabSelected: () => {},

  currentTabSelected: '',
  setCurrentTabSelected: () => {},
});
