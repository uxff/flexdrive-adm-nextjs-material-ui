import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function BasicMenu({menuKey, menuTitle, menuItems}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id={"basic-button-"+menuKey}
        hover="true"
        aria-controls={open ? 'basic-menu-'+menuKey : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {menuTitle}
      </Button>
      <Menu
        id={"basic-menu+"+menuKey}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button-'+menuKey,
        }}
      >
        {menuItems && menuItems.map((menuItem)=>(
            // this.menuItemIdx = this.menuItemIdx + 1,
            <MenuItem key={menuItem.menuKey} onClick={handleClose}>{menuItem.menuTitle}</MenuItem>
        ))}
        {/* <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem> */}
      </Menu>
    </>
  );
}