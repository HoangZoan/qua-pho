import React from "react";
import { Menu } from "@mui/material";

interface PopupMenuProps {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode[];
  itemsMaxLength: number;
}

const PopupMenu = ({
  anchorEl,
  open,
  onClose,
  children,
  itemsMaxLength,
}: PopupMenuProps) => {
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      sx={{
        "& .MuiPaper-root": {
          overflow: "visible",
        },
        "& .MuiList-root": {
          maxHeight: "48rem",
          overflowY: itemsMaxLength > 4 ? "scroll" : "visible",
        },
      }}
    >
      {children}
    </Menu>
  );
};

export default PopupMenu;
