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
import Link from '@mui/material/Link';

// subPages = [{pageTitle:"", pageKey:""}]
function NavBarItem({pageTitle, pageKey, icon, subPages}) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  

  return (
    <>
      <Button
        id={"button-appbar-"+pageKey}
        key={"button-appbar-"+pageKey}
        aria-controls={Boolean(anchorElNav) ? "menu-appbar-"+pageKey: undefined}
        aria-haspopup="true"
        aria-expanded={Boolean(anchorElNav) ? 'true' : undefined}
        onClick={handleOpenNavMenu}
        color="inherit"
        sx={{ my: 2, color: 'white', display: 'block' }}
      >
        {icon ? icon : null} {"   "}
        {pageTitle}
      </Button>
      <Menu
        id={"menu-appbar-"+pageKey}
        key={"menu-appbar-"+pageKey}
        MenuListProps={{
          'aria-labelledby': "button-appbar-"+pageKey,
        }}
        anchorEl={anchorElNav}
        // anchorOrigin={{
        //   vertical: 'bottom',
        //   horizontal: 'left',
        // }}
        // keepMounted
        // transformOrigin={{
        //   vertical: 'top',
        //   horizontal: 'left',
        // }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        // sx={{backgroundColor:"blue",backdropFilter: "blur(10px) !important",}} //not working
        color='inherit'
      >
        {/* {subPages} */}
        {subPages && subPages.map((subItem) => (
          <MenuItem key={subItem.pageKey} onClick={handleCloseNavMenu}>
            <Link href={"/"+subItem.pageTo} underline="none">
              {subItem.pageTitle}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </>

  );

}

export default NavBarItem;

