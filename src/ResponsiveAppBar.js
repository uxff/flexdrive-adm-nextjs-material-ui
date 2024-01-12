import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import CloudIcon from '@mui/icons-material/Cloud';
// import * as Color from '@mui/material/Color';

import * as Icons from '@mui/icons-material';

// import WorkplaceIcon from '@mui/icons-material/Workplace';
// import { Group } from '@mui/icons-material';
// import SystemIcon from '@mui/icons-material/SystemUpdateAlt';

import NavBarItem from './NavBarItem';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const navBarMenu = [
  {
    pageTitle:"Cluster", 
    pageKey:"cluster", 
    subPages:[
      {pageTitle:"Cluster Node Management", pageKey:"node-management", pageTo:"node/list"}, //字段不能用to,href,key等
      {pageTitle:"File Management", pageKey:"file-management", pageTo:"fileindex/list"},
    ],
    icon:<Icons.Workspaces />,
  },
  { 
    pageTitle:"Membership", 
    pageKey:"membership", 
    icon: <Icons.Group />,
    subPages:[
      {pageTitle:"User", pageKey:"user", pageTo:"user/list"},
      {pageTitle:"User Level", pageKey:"userlevel", pageTo:"userlevel/list"},
      {pageTitle:"Order", pageKey:"order", pageTo:"order/list"},
      {pageTitle:"Share", pageKey:"share", pageTo:"share/list"},
    ]
  },
  {
    pageTitle:"System", 
    pageKey:"system", 
    icon: <Icons.Settings />,
    subPages:[
      {pageTitle:"Managger", pageKey:"manager", pageTo:"manager/list"},
      {pageTitle:"Roles & Permissions", pageKey:"role", pageTo:"role/list"},
    ]
  },
];

// use navBarItem.js

function ResponsiveAppBar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{background:'#64b5f6'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/* for web */}
          <CloudIcon sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1, color: 'white' }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            FlexDrive
          </Typography>

          {/* for web */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
            {navBarMenu.map((menuItem) => (
              <NavBarItem pageTitle={menuItem.pageTitle} pageKey={menuItem.pageKey} icon={menuItem.icon} subPages={menuItem.subPages} />
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
