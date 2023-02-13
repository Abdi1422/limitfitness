import './about.scss'
import img1 from '../images/aboutpic.jpg'
import img0 from '../images/aboutpic2.png'
import {Link} from "react-router-dom"
import Footer from "../components/footer";

const styles2={
    fontSize:"50px",
    fontWeight:"600",
  }

const About =({fetch})=>{
    return(
        <>
            <div className="aboutwrapper">  
                <div className="textdiv">
                    <div className="text1">
                        <h1 className="text1h1">Click one below</h1>
                        <p className="downarrow">↓</p>
                    </div>
                    <Link to="../exercises" className='link'>
                        <div className="text one" >
                            <h1 >Experience exercises</h1>
                            <p>Our exercises are for you with your personal fitness goals in mind. We are here to help, so check out what I have to offer.</p>
                        </div> 
                    </Link> 
                    <Link to="../exercises" className='link'>
                        <div className="text" onClick={fetch} >
                            <h1 id="abs">Abs & core exercises</h1>
                            <p id="abs">An abs and core workout involves a variety of exercises designed to strengthen the muscles around the middle of your body</p>
                        </div>   
                    </Link>
                    <Link to="../exercises" className='link'>
                        <div className="text" onClick={fetch} >
                            <h1 id="bic" >Arms & shoulder exercises</h1>
                            <p id="bic">Arms and shoulder workouts involve a variety of exercises to work biceps, triceps, and deltoids, using free weights or bodyweight</p>
                        </div>
                    </Link>
                    <Link to="../exercises" className='link'>
                        <div className="text" onClick={fetch}>
                            <h1 id="back">Back exercises</h1>
                            <p id="back">Back exercises work the big muscles across your back like the latissimus Dorsi and trapezius</p>
                        </div>
                    </Link>
                    <Link to="../exercises" className='link'>
                        <div className="text" onClick={fetch}>
                            <h1 id="ham">Cardio exercises</h1>
                            <p id="ham">In the gym, cardio machines include the treadmill, elliptical trainer, stationary cycle, stepping machine, rowing machine</p>
                        </div>
                    </Link>
                    <Link to="../exercises" className='link'>
                        <div className="text" onClick={fetch} >
                            <h1 id="glu">Legs & glutes exercises</h1>
                            <p id="glu">Work your legs and glutes using the leg press, extension or curls. You can also squat or deadlift to target this area</p>
                        </div>
                    </Link>
                    <Link to="../exercises" className='link'>
                        <div className="text" onClick={fetch} >
                            <h1 id="nec" >Neck exercises</h1>
                            <p id="nec">Check out our beginner’s guide to neck training, how to use our cardio machines and some tips to plan your workout at home</p>
                        </div>
                    </Link>
                    <Link to="../exercises" className='link'>
                        <div className="text" onClick={fetch} >
                            <h1 id="ches" >Chest exercises</h1>
                            <p id="ches" >Stretch big muscles in your chest. A good warm up is also important to maximise your workout</p>
                        </div>
                    </Link>
                </div>
                <div className="imgdiv">
                    <img classname="aboutimg" src={img1}/>
                    <img classname="aboutimg" src={img0}/>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default About;
