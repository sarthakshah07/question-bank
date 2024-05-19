import React from "react";
import { Button } from "@mui/material";



const MyButton = ({
  title,
  className,
  fullWidth,
  variant,
  handleClick,
  type,
  sx,
  img,
  Disabled,
  size
}) => {
  // const authState = useSelector(authSelector);
  // console.log("button",authState);
  return (
    <Button
      className={className}
      fullWidth={fullWidth || false}
      variant={variant}
      onClick={handleClick}
      type={type}
      sx={sx}
      img={img}
      size={size}
      disabled={Disabled}
    >
      {title}
    </Button>
  );
};

export default MyButton;
