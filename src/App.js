import './App.scss';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/home';
import About from './pages/about';
import News from './pages/News'
import Exercises from './pages/exercises'
import Contact from './pages/Contact'
import Navbar from './components/navbar';
import { useEffect,useState} from 'react';
import img3 from './images/abs3.png'
import img4 from './images/bic.png'
import img5 from './images/back.png'
import img6 from './images/hams.png'
import img7 from './images/glu.png'
import img8 from './images/neck.png'
import img9 from './images/chest.png'

function App() {
  const abs = "abdominals"
  const bic = "biceps"
  const back = "lats"
  const ham = "hamstrings"
  const glu = "glutes"
  const nec ="neck"
  const ches = "chest"
  const getexercises=(url)=>{
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '9cb9b72ffdmsh672191178f9bacfp19548djsn33b7d9e09267',
          'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
        }
    };  
    fetch(`https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=${url}`, options)
        .then(response => response.json())
        .then(data =>{ 
            console.log(data)
            setloop(data)
        })   
        .catch(err => console.error(err));
  }
  const [loop,setloop]=useState([])
  useEffect(()=>{
      getexercises(abs)
      setimage(img3)
  },[]) 
  const getexercisestype=(e)=>{
    if(e.target.id==="abs"){
      getexercises(abs)
      setimage(img3)
    }
    if(e.target.id==="bic"){
      getexercises(bic)
      setimage(img4)
    }
    if(e.target.id==="back"){
      getexercises(back)
      setimage(img5)
    }
    if(e.target.id==="ham"){
      getexercises(ham)
      setimage(img6)
    }
    if(e.target.id==="glu"){
      getexercises(glu)
      setimage(img7)
    }
    if(e.target.id==="nec"){
      getexercises(nec)
      setimage(img8)
    }
    if(e.target.id==="ches"){
      getexercises(ches)
      setimage(img9)
    }
  }
  const [display,setdisplay]=useState("Firstname:")
  const [display2,setdisplay2]=useState("Secondname:")
  const [image,setimage]=useState()
  return (
    <>
      <BrowserRouter>
        <Navbar display={display} display2={display2} />
          <Routes>
            <Route path='' element={<Home/>}/>
            <Route path='about' element={<About fetch={getexercisestype}/>}/>
            <Route path='exercises' element={<Exercises loop={loop} dataimg={image}/>}/>
            <Route path='news' element={<News setdisplay={setdisplay} setdisplay2={setdisplay2} />}/>      
            <Route path='contact' element={<Contact/>}/>
          </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;