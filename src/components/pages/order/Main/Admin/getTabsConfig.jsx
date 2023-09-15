import { AiOutlinePlus } from 'react-icons/ai';
import { MdModeEditOutline } from 'react-icons/md';
import AddForm from './AdminPanel/AddForm';
import EditForm from './AdminPanel/EditForm';

// export const getTabsConfig = (isCollapsed, setIsCollapsed) => [
export const getTabsConfig = [
  // {
  //   index: 'chevronUpDown',
  //   label: '',
  //   Icon: isCollapsed ? <FiChevronUp /> : <FiChevronDown />,
  //   onClick: () => {
  //     setIsCollapsed(!isCollapsed);
  //   },
  //   className: isCollapsed ? 'is-active' : '',
  // },
  {
    index: 'add',
    label: 'Ajouter un produit',
    Icon: <AiOutlinePlus />,
    Content: <AddForm />,
  },
  {
    index: 'edit',
    label: 'Modifier un produit',
    Icon: <MdModeEditOutline />,
    Content: <EditForm />,
  },
];

export const getTabSelected = (tabs, currentTabSelected) => {
  return tabs.find((tab) => tab.index === currentTabSelected);
};