import { Button } from "@mui/material";
import React from "react";

const CustomButton = ({
  children,
  variant,
  href,
  className = "no-underline",
}) => {
  return (
    <a variant={variant} className={className} href={href}>
      {children}
    </a>
  );
};

export default CustomButton;
