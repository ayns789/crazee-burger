import styled from 'styled-components';
import Tab from '../../../../reusable-ui/Tab';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdModeEditOutline } from 'react-icons/md';
import PropTypes from 'prop-types';
import { theme } from '../../../../../theme';
import { useContext } from 'react';
import OrderContext from '../../../../../context/OrderContext';

export default function AdminTabs() {
  const {
    isCollapsed,
    setIsCollapsed,
    isAddSelected,
    setIsAddTabSelected,
    isEditSelected,
    setIsEditTabSelected,
  } = useContext(OrderContext);

  const selectTab = (tabSelected) => {
    setIsCollapsed(false);

    if (tabSelected === 'add') {
      setIsAddTabSelected(true);
      setIsEditTabSelected(false);
    }
    if (tabSelected === 'edit') {
      setIsEditTabSelected(true);
      setIsAddTabSelected(false);
    }
  };

  const tabsConfig = [
    {
      label: '',
      Icon: isCollapsed ? <FiChevronUp /> : <FiChevronDown />,
      onClick: () => {
        setIsCollapsed(!isCollapsed);
      },
      className: isCollapsed ? 'is-active' : '',
    },
    {
      label: 'Ajouter un produit',
      Icon: <AiOutlinePlus />,
      onClick: () => selectTab('add'),
      className: isAddSelected ? 'is-active' : '',
    },
    {
      label: 'Modifier un produit',
      Icon: <MdModeEditOutline />,
      onClick: () => selectTab('edit'),
      className: isEditSelected ? 'is-active' : '',
    },
  ];

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
      {tabsConfig.map((tab) => {
        return (
          <Tab label={tab.label} Icon={tab.Icon} onClick={tab.onClick} className={tab.className} />
        );
      })}
    </AdminTabsStyled>
  );
}

AdminTabs.propTypes = {
  isCollapsed: PropTypes.bool,
  setIsCollapsed: PropTypes.func,
  isEditSelected: PropTypes.bool,
  setIsEditTabSelected: PropTypes.func,
  isAddSelected: PropTypes.bool,
  setIsAddTabSelected: PropTypes.func,
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
