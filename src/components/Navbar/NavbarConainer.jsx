import { connect } from "react-redux";
import Navbar from "./Navbar";

let mapStateToProps = (state) => {
  
  return {
    saidebar: state.saidebar
  }
}

const NavbarContainer = connect (mapStateToProps)(Navbar)
export default NavbarContainer;