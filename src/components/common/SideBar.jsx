import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import EngineeringIcon from '@mui/icons-material/Engineering';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import PropTypes from 'prop-types';
import GROUP_1_PAGES_CONFIG from '../grupos/grupo1/pagesConfig';
import GROUP_2_PAGES_CONFIG from '../grupos/grupo2/pagesConfig';
import GROUP_3_PAGES_CONFIG from '../grupos/grupo3/pagesConfig';
import GROUP_4_PAGES_CONFIG from '../grupos/grupo4/pagesConfig';

const styles = {
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    px: [1],
  },
  listItemButton: {
    pl: 3,
  },
};

const buildCollapsableMenu = (menuItemConfig) => (
  <ListItemButton key={menuItemConfig.id} sx={styles.listItemButton} href={menuItemConfig.href}>
    <ListItemIcon>
      {menuItemConfig.icon}
    </ListItemIcon>
    <ListItemText primary={menuItemConfig.name} />
  </ListItemButton>
);

const SideBar = ({ open, drawerWidth, toggleDrawer }) => {
  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(7),
        },
      }),
    },
  }));

  const [openAdminMenu, setOpenAdminMenu] = React.useState(false);
  const [openCommercialMenu, setOpenCommercialMenu] = React.useState(false);
  const [openTechnicalMenu, setOpenTechnicalMenu] = React.useState(false);

  const toggleAdministrationMenu = () => setOpenAdminMenu(!openAdminMenu);
  const toggleCommercialAreaMenu = () => setOpenCommercialMenu(!openCommercialMenu);
  const toggleTechnicalAreaMenu = () => setOpenTechnicalMenu(!openTechnicalMenu);

  return (
    <Drawer variant="permanent" open={open}>
      <Toolbar sx={styles.toolbar}>
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        <ListItemButton onClick={toggleAdministrationMenu}>
          <ListItemIcon>
            <AdminPanelSettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Administración" />
          {openAdminMenu ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openAdminMenu} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {GROUP_2_PAGES_CONFIG.map(buildCollapsableMenu)}
            {GROUP_4_PAGES_CONFIG.map(buildCollapsableMenu)}
          </List>
        </Collapse>
        <ListItemButton onClick={toggleTechnicalAreaMenu}>
          <ListItemIcon>
            <EngineeringIcon />
          </ListItemIcon>
          <ListItemText primary="Área técnica" />
          {openTechnicalMenu ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openTechnicalMenu} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {GROUP_1_PAGES_CONFIG.map(buildCollapsableMenu)}
          </List>
        </Collapse>
        <ListItemButton onClick={toggleCommercialAreaMenu}>
          <ListItemIcon>
            <LocalAtmIcon />
          </ListItemIcon>
          <ListItemText primary="Comercial" />
          {openCommercialMenu ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openCommercialMenu} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {GROUP_3_PAGES_CONFIG.map(buildCollapsableMenu)}
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
};

SideBar.propTypes = {
  open: PropTypes.bool.isRequired,
  drawerWidth: PropTypes.number.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};

export default SideBar;
