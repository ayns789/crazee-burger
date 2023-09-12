import styled from 'styled-components';
import Tab from '../../../../reusable-ui/Tab';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { theme } from '../../../../../theme';
import { useContext } from 'react';
import OrderContext from '../../../../../context/OrderContext';
import { getTabsConfig } from './getTabsConfig';

export default function AdminTabs() {
  const { isCollapsed, setIsCollapsed, currentTabSelected, setCurrentTabSelected } =
    useContext(OrderContext);

  const selectTab = (tabSelected) => {
    setIsCollapsed(false);
    setCurrentTabSelected(tabSelected);
  };

  const tabs = getTabsConfig();

  return (
    <AdminTabsStyled>
      {/* <Tab
        label=''
        Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        onClick={() => {
          setIsCollapsed(!isCollapsed);
        }}
        className={isCollapsed ? 'is-active' : ''}
      />
      <Tab
        label='Ajouter un produit'
        Icon={<AiOutlinePlus />}
        onClick={() => selectTab('add')}
        className={isAddSelected ? 'is-active' : ''}
      />
      <Tab
        label='Modifier un produit'
        Icon={<MdModeEditOutline />}
        onClick={() => selectTab('edit')}
        className={isEditSelected ? 'is-active' : ''}
      /> */}
      <Tab
        label=''
        Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        onClick={() => {
          setIsCollapsed(!isCollapsed);
        }}
        className={isCollapsed ? 'is-active' : ''}
      />
      {tabs.map((tab) => (
        <Tab
          key={tab.label}
          label={tab.label}
          Icon={tab.Icon}
          onClick={() => selectTab(tab.index)}
          className={currentTabSelected === tab.index ? 'is-active' : ''}
        />
      ))}
    </AdminTabsStyled>
  );
}

AdminTabs.propTypes = {
  isCollapsed: PropTypes.bool,
  setIsCollapsed: PropTypes.func,
  currentTabSelected: PropTypes.bool,
  setCurrentTabSelecte: PropTypes.func,
};

const AdminTabsStyled = styled.div`
  display: flex;
  padding: 0 20px;

  .is-active {
    background: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border-color: ${theme.colors.background_dark};
  }

  button {
    margin-left: 1px;
  }
`;
