import React from "react";
import { Button, Menu, MenuItem, Popper, Paper } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

const DropdownMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ position: "sticky", top: 10, right: 10,zIndex:-1 }}>
      <Button onClick={handleClick} startIcon={<AccountCircle />}>
        Open Dropdown
      </Button>
      <Popper open={open} anchorEl={anchorEl} placement="bottom-end" transition>
        {({ TransitionProps }) => (
          <Paper>
            <Menu
              id="menu-list"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              {...TransitionProps}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Paper>
        )}
      </Popper>
    </div>
  );
};

export default DropdownMenu;
