import "./news.scss"
import { Button} from '@mui/material';
import { useState } from "react";
import Footer from "../components/footer";

const styles={
    backgroundColor:'white',
    color:'black',
    transition: "500ms all ",
    width:"170px",
    "&:hover":{
      color:'white'
    }
  }

const News =({setdisplay,setdisplay2})=>{
    const [first,setfirst]=useState()
    const [second,setsecond]=useState()
    const value=()=>{
        setdisplay(first)
        setdisplay2(second)
    }
    
    return(
        <div className="logindiv">
            <form className="form">
                <div className="formdiv">
                    <h1 className="login" >Login</h1>
                    <div className="namediv">
                        <p className="name">Firstname:</p>
                        <input className="textbox" type="text" onChange={(e)=> setfirst(e.target.value)} />
                    </div>
                    <div className="namediv">
                        <p className="name" >Secondname:</p>
                        <input className="textbox" type="text" onChange={(e)=> setsecond(e.target.value)} />
                    </div>
                    <button className='subbtn' onClick={value} >Submit</button>
                </div>    
            </form>
            <Footer/>
        </div>
    )
}
export default News;