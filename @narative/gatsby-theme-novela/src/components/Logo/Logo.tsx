import React from "react";
import styled from "@emotion/styled";

import Image from "@components/Image";
import logoImage from "../../assets/logo.png";

const Logo = () => {
  return (
    <LogoImage src={logoImage} />
  );
};

export default Logo;

const LogoImage = styled(Image)`
  width: 140px;
  height: auto;
`;
