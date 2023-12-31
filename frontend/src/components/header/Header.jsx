
import { AppBar, Box, Toolbar, styled } from "@mui/material";
import { Link } from "react-router-dom";

//components
import Searchbar from "./Searchbar";
import CustomButton from "./CustomButton";

const StyleHeader = styled(AppBar)`
   background:#2874f0;
   height:54px;
`
const StyleBox = styled(Link)`
  margin-left:12%;
  text-decoration:none;
`
const CustomButtonWrapper = styled(Box)`
margin:0 auto 0 5%;
`
const Header = () => {
  const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  return (

    <StyleHeader>
      <Toolbar style={{ minHeight: 55 }}>
        <StyleBox to="/">
          <img src={logoURL} alt="logo" style={{ width: 75 }} />

        </StyleBox>
        <Searchbar />
        <CustomButtonWrapper>
          <CustomButton />
        </CustomButtonWrapper>
      </Toolbar>
    </StyleHeader>

  )
}

export default Header
