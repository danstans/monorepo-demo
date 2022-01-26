import { alpha, styled } from "@mui/material/styles";
import { FormControlLabel, Switch as MaterialSwitch } from "@mui/material";
import React from "react";

import { colors } from "../../styles/colors";
import { SwitchProps } from "./Switch.types";

const StyledSwitch = styled(MaterialSwitch)(({ theme, checked, disabled }) => {
  const getTrackStyles = () => {
    if (disabled)
      return {
        backgroundColor: "rgba(0, 0, 0, 1)",
        opacity: 1,
      };

    return {
      backgroundColor: "rgba(33, 33, 33, 0.08)",
      opacity: 1,
    };
  };

  return {
    "& .MuiSwitch-track": getTrackStyles(),
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: colors.switchGreen1,
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      border: "2px solid #979797",
      height: "20px",
      width: "20px",
    },
    "& .MuiSwitch-switchBase.Mui-checked .MuiSwitch-thumb": {
      border: "0 !important",
      backgroundColor: disabled ? "#a7dfbd" : `${colors.switchGreen1} !important`,
      opacity: 1,
    },
    "&  .Mui-disabled .MuiSwitch-thumb": {
      backgroundColor: !checked && "rgba(0, 0, 0, 0.6)",
      border: !checked && "0",
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      "&:hover": {
        backgroundColor: alpha(colors.switchGreen1, theme.palette.action.hoverOpacity),
      },
    },
  };
});

const Switch = ({
  label = "",
  labelPlacement = "start",
  isChecked,
  setIsChecked,
  style,
  disabled = false,
}: SwitchProps): JSX.Element => {
  return (
    <FormControlLabel
      label={label}
      labelPlacement={labelPlacement}
      sx={style}
      disabled={disabled}
      checked={isChecked}
      control={
        <StyledSwitch
          defaultChecked
          onChange={() => {
            setIsChecked(!isChecked);
          }}
        />
      }
    />
  );
};

export default Switch;
