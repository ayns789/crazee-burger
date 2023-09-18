import { createContext } from 'react';

export default createContext({
  isModeAdmin: false,
  setIsModeAdmin: () => {},

  isCollapsed: true,
  setIsCollapsed: () => {},

  currentTabSelected: '',
  setCurrentTabSelected: () => {},

  products: [],
  handleAdd: () => {},
  handleDelete: () => {},
});
