import { createContext } from 'react';

export default createContext({
  isModeAdmin: false,
  setIsModeAdmin: () => {},

  isCollapsed: false,
  setIsCollapsed: () => {},

  isAddSelected: false,
  setIsAddTabSelected: () => {},

  isEditSelected: false,
  setIsEditTabSelected: () => {},
});
