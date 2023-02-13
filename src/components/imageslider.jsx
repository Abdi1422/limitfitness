import { useEffect, useState } from "react";

const Imageslider =({slides})=>{
    const [currentindex,setcurrentindex]=useState(0)
    useEffect(()=>{
        const timer = setTimeout(()=>{
            if(currentindex===2){
                setcurrentindex(0)
            }else{
                setcurrentindex(currentindex+1)
            }
        },5000)
        return()=>clearTimeout(timer)
    },[currentindex])
    const sliderstyles={
        height:'100%',
        position:'relative',
        bottom:'133px',
        zIndex:1,
       
    }
    const slidestyles ={
        width: '100%',
        height:'100%',
        borderRadius:'100px',
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundImage:`url(${slides[currentindex].url})`,
        margin:"0px auto",
        transition: "all .2s ease-out",
    }
    const leftstyle={
        position:'absolute',
        top:'50%',
        transform:'translate(0,-50%)',
        left:'32px',
        fontSize:'45px',
        color:'#fff',
        zIndex:2,
        cursor:'pointer',
    }
    const rightstyle={
        position:'absolute',
        top:'50%',
        transform:'translate(0,-50%)',
        right:'32px',
        fontSize:'45px',
        color:'#fff',
        zIndex:2,
        cursor:'pointer',
    }
    const previous =()=>{
        const isfirstslide = currentindex === 0
        const newindex = isfirstslide ? slides.length -1:currentindex -1
        setcurrentindex(newindex)
    }
    const next =()=>{
        const islastslide=currentindex ===slides.length -1
        const newindex =islastslide ? 0: currentindex +1
        setcurrentindex(newindex)
    }

    return(
        <div style={sliderstyles} className="imageslider">
            <div style={leftstyle} onClick={previous}>←</div>
            <div style={rightstyle} onClick={next}>→</div>
           <div style={slidestyles}></div>
        </div>
    )
}
export default Imageslider;