import './home.scss'
import Imageslider from '../components/imageslider';
import home1 from '../images/aboutpic.jpg'
import home2 from '../images/aboutpic2.jpg'
import home3 from '../images/aboutpic3.jpg'
import Footer from '../components/footer';

const Home =()=>{
    const slides =[
        {url: home1,title:'image1'},
        {url:home2,title:'image2'},
        {url:home3,title:'image3'},
    ] 
    const containerstyle={
        width: '100%',
        height:'97vh',
        margin: '0px auto',
    }
    return(
        <>
            <main className='main'>
                <div style={containerstyle}>
                    <div className='h1div'>
                        <h1 className='h1' >Stay fit.</h1>
                    </div>
                    <Imageslider slides={slides}/>
                </div>
            </main>
            <Footer/>
        </>
    )
}
export default Home;