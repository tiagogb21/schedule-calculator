import React, { useState } from 'react';
import { Menu, MenuItem, IconButton } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { dummyMenuItems } from '../../data/data';

const Options: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e: any) => {
    setAnchorEl(e.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  const nativeOnChange = (e: any) => {
    const detail = {
      selectedIndex: e.target.selectedIndex
    };

    e.target.selectedIndex = 0;

    e.target.dispatchEvent(new CustomEvent("itemClick", { detail }));
  };

  const itemClick = (e: any) => {
    console.log("Item Clicked " + e.detail);
  };

  return (
    <>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        aria-label="Open to show more"
        title="Open to show more"
      >
        <MoreHorizIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {
          dummyMenuItems.map((item) => (
            <MenuItem
              onClick={ handleClose }
              key={ item.title }
              value={ item.title }
            >
              {item.title}
            </MenuItem>
          ))
        }
      </Menu>
    </>
  );
}

export default Options;
