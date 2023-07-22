import Dropdown from "react-dropdown";
import { Button } from "@mui/material";
import "react-dropdown/style.css";
import { Link } from "react-router-dom";
import Prime from "../assets/ProductImg/prime.webp"
import AppStore from "../assets/ProductImg/appstore.png"
function Dropdownf(params) {
  const options1 = ["All","Television", "Mobiles", "Electronics","Iron","Computer","accessories","PC Games","Peripherals"];
  const defaultOption = options1[0];
  return (
    <div style={{ display: "flex" , justifyContent:"space-evenly",backgroundColor:"rgb(37,47,37)",color:"wheat"}}>
    <div>
        <Link to="/loginseller"><Button >Sell On Amazon</Button></Link>
    </div>
      <Dropdown
      style={{color:"white",backgroundColor:"rgb(37,47,37)"}}
      controlClassName='myControlClassName'
        options={options1}
        // value={defaultOption}
        placeholder="Browse All"
      />

<Button style={{color:"white"}}>Fresh</Button>

<Button style={{color:"white"}}>Gift Card</Button>

<Button style={{color:"white"}}>Baby</Button>
    <Button style={{color:"white"}}>Gift Ideas</Button>
    

<Button style={{color:"white"}}>Amazon Pay</Button>
      <div>
        <img src={Prime} alt="" />
        
      </div>
      <div>
        <img src={AppStore} style={{width:"8rem",height:"2.5rem"}}  alt="" />
        
      </div>
    </div>
  );
}
export default Dropdownf;
