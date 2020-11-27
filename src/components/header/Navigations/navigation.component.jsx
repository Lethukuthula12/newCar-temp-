import React, {useState} from 'react';
import SideBar from "../side-menu.component";
import Header from "../header.component";



const Navigations = () => {
  const [isOpen, setIsOpen] = useState(false);

 const toggle = ()=>{
  setIsOpen(!isOpen)
 }
  return(
      <div><Header toggle= {toggle} />
    <SideBar isOpen={isOpen} toggle={toggle} /></div>
    )
}


export default Navigations
