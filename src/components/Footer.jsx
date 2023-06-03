import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Typography, styled } from "@mui/material";
import { Title } from "./styles";
const OrangeText = styled(Typography)`
  font-size: 16px;
  font-weight: 600;
  color: #ff6600;
  margin-bottom: 10px;
`;
const Component = styled(Box)`
  display: flex;
  margin-top: 70px;
  margin-bottom: 30px;
  justify-content: space-evenly;
  @media screen and (max-width: 700px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
const ImageWrapper = styled(Box)`
  display: flex;
  & > svg {
    color: "#4d148c";
    margin: 0px 15px 0px 0px;
    border-radius: 10px;
    font-size: 30px;
    cursor: pointer;
  }
`;

const NavigateText = styled(Typography)`
  color: #606060;
  font-size: 14px;
  margin-bottom: 7px;
`;
function Footer() {
  return (
    <Component>
      <Box sx={{ display: "flex" }}>
        <img
          src='/assets/logo.png'
          alt='logo'
          style={{ width: "55px", height: "40px", marginRight: "10px" }}
        />
        <Title sx={{ color: "#ff6600" }}>Adventure Store</Title>
      </Box>

      <Box>
        <OrangeText>Quick NavigateText</OrangeText>
        <NavigateText>Group Bookings </NavigateText>
        <NavigateText>Blogs </NavigateText>
        <NavigateText>Home </NavigateText>
      </Box>

      <Box>
        <OrangeText>Work with us</OrangeText>
        <NavigateText>Hostel Sign up</NavigateText>
        <OrangeText style={{ marginTop: 10 }}>About Us</OrangeText>
        <NavigateText>Careers</NavigateText>
        <NavigateText>Press</NavigateText>
      </Box>

      <Box>
        <OrangeText>Accommodations</OrangeText>
        <NavigateText>Hostel</NavigateText>
        <OrangeText style={{ marginTop: 10 }}>Customer Support</OrangeText>
        <NavigateText>Talk to us</NavigateText>
        <NavigateText>Help</NavigateText>
      </Box>
    </Component>
  );
}

export default Footer;
