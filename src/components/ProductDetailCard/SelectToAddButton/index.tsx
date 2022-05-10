import React, { useState } from "react";
import {
  Button,
  Menu as MuiMenu,
  MenuItem,
  MenuProps,
  Stack,
} from "@mui/material";
import { styled } from "shared/theme";
import { formatPriceText } from "shared/utils";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { productDetailState } from "states/productDetail";
import { addSideDish, removeSideDish } from "states/productDetail/actions";
import SideDishChips from "../SideDishChips";

const Menu = styled(({ children, ...props }: MenuProps) => {
  return (
    <MuiMenu
      {...props}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      elevation={3}
    >
      {children}
    </MuiMenu>
  );
})(({ theme }) => ({
  "& .MuiPaper-root": {
    border: `1px solid ${theme.palette.primary.main}`,
  },
  "& .MuiList-root": {
    padding: "0",
  },
}));

interface SelectToAddButtonProps {
  content: string;
}

const SelectToAddButton = ({ content }: SelectToAddButtonProps) => {
  const { availableSideDish, selectedSideDish } =
    useRecoilValue(productDetailState);
  const setProductState = useSetRecoilState(productDetailState);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAddSideDish = (itemName: string) => {
    setProductState((oldState) => addSideDish(oldState, itemName));
    handleClose();
  };

  const handleRemoveSideDish = (itemName: string) => {
    setProductState((oldState) => removeSideDish(oldState, itemName));
  };

  return (
    <Stack
      alignItems="flex-start"
      spacing={selectedSideDish.length > 0 ? 3 : 0}
    >
      <SideDishChips items={selectedSideDish} onDelete={handleRemoveSideDish} />

      {availableSideDish.length > 0 && (
        <>
          <Button id="select-button" onClick={handleClick} variant="outlined">
            {content}
          </Button>

          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            {availableSideDish.map(({ name, price }) => (
              <MenuItem
                key={name}
                onClick={() => handleAddSideDish(name)}
                sx={{
                  px: 4,
                  transition: "all 0.2s",
                  "&:hover": {
                    backgroundColor: (theme) => theme.colors.background.primary,
                    color: (theme) => theme.palette.primary.main,
                  },
                }}
              >
                {name} (
                {price === 0 ? "Miễn phí" : "+" + formatPriceText(price)})
              </MenuItem>
            ))}
          </Menu>
        </>
      )}
    </Stack>
  );
};

export default SelectToAddButton;
