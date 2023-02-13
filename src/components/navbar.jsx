import './navbar.scss'
import {Link} from "react-router-dom"
import { Button } from '@mui/material';
import { useState } from 'react';

const styles={
  backgroundColor:'black',
  color:'white',
  transition: "500ms all ",
  "&:hover":{
    color:'black'
  }
}
const Navbar =({display,display2})=>{
  const [showmenu,setshowmenu]=useState(false)
  const closemenu=()=>{
    setshowmenu(false)
  }
  return(
    <div className='navwrapper' >
      <nav className='navbar'>
        <div className='titlediv'>
          <h1 className='title'>Limit fitness</h1>
          <ion-icon name="barbell-outline"></ion-icon>
        </div>   
        <div className='btns' id={showmenu ? "hidden": ""}>   
          <Link to="/limitfitness/" className='link'><Button sx={styles} color='inherit' variant='outlined' size='large' className='btn' onClick={closemenu}>Home</Button></Link>
          <Link to="about" className='link'><Button sx={styles} color='inherit' variant='outlined' size='large' className='btn' onClick={closemenu}>About</Button></Link>
          <Link to="exercises" className='link'><Button sx={styles} color='inherit' variant='outlined' size='large' className='btn' onClick={closemenu}>Exercises</Button></Link>
          <Link to="news" className='link'><Button sx={styles}  color='inherit' variant='outlined' size='large' className='btn' onClick={closemenu}>Login</Button></Link>
          <Link to="contact" className='link'><Button sx={styles} color='inherit' variant='outlined' size='large' className='btn' onClick={closemenu}>Contact</Button></Link>
            <div className='profliediv'>
              <button className='proflie'><ion-icon name="person"></ion-icon></button>
              <div className='namediv'>
                <p className='namep'>{display}</p>
                <p className='namep'>{display2}</p>
              </div>
            </div>  
        </div>
        <button className='burg' onClick={()=>setshowmenu(!showmenu)}><ion-icon name="reorder-three"></ion-icon></button>
      </nav>
    </div>
  )
}
export default Navbar;