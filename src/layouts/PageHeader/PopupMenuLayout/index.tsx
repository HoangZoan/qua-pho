import React, { useEffect, useState } from "react";
import { Box, ClickAwayListener, Grow } from "@mui/material";
import { styled } from "shared/theme";
import IconButton from "layouts/PageHeader/IconButton";

interface PopupMenuLayoutProps {
  children: React.ReactNode;
  icon: React.ReactNode;
  isClose?: boolean;
}

const BoxArrow = styled(Box)({
  position: "absolute",
  top: "-3px",
  right: "2.2rem",
  width: "2.4rem",
  height: "2.4rem",
  backgroundColor: "white",
  transform: "rotateZ(45deg)",
  zIndex: "-1",
});

const PopupMenuLayout = ({ children, icon, isClose }: PopupMenuLayoutProps) => {
  const [open, setOpen] = useState(false);

  function handleOpenMenu() {
    setOpen(!open);
  }

  function handleCloseMenu() {
    setOpen(false);
  }

  useEffect(() => {
    setOpen(false);
  }, [isClose]);

  return (
    <ClickAwayListener onClickAway={handleCloseMenu}>
      <Box position="relative">
        <IconButton onClick={handleOpenMenu} variant="contained">
          {icon}
        </IconButton>

        <Grow in={open} style={{ transformOrigin: "90% 0" }}>
          <Box
            sx={{
              position: "absolute",
              top: "120%",
              right: "-1rem",
            }}
          >
            {children}

            <BoxArrow />
          </Box>
        </Grow>
      </Box>
    </ClickAwayListener>
  );
};

export default React.memo(PopupMenuLayout);
