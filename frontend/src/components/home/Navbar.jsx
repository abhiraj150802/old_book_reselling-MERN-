
import { Box ,styled,Typography} from "@mui/material"
import { navData } from "../constant/Data"

const NavbarWrapper=styled(Box)(({theme})=>({
display:'flex',
margin:'55px 130px 0 130px',                                                    
justifyContent:'space-between',
overflow:'hiddern',
[theme.breakpoints.down('lg')]:{
   margin:0,
}
}))
const Container=styled(Box)`
padding:12px 8px;
text-align:center;
`
const Text=styled(Typography)`
 font-size:14px;
 font-weight:600;
 font-family:inherit:
`


const Navbar = () => {
  return (
    <NavbarWrapper>
    
       {
        navData.map(data=>{
           return (
              <Container >
              <img src={data.url} alt="logo" style={{width:64}}/>
              <Text>{data.text}</Text>
              </Container> 
           )
        })
       }
    </NavbarWrapper>
  )
}

export default Navbar
