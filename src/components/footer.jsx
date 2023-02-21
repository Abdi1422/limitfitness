import './footer.scss'
import {Link} from "react-router-dom"
const Footer =()=>{
    return(
        <footer className='footer'>
            <div className='columns'>
                <div className='columns1'>    
                    <div className='column'>
                        <h1>Limit fitness</h1>
                        <p>we are here to help more people in more places lead healthier lives every day. </p>
                    </div>
                    <div className='column'>
                        <h1 className='clo'>Pages</h1>
                        <div className='footerlinks'>
                            <Link to="/limitfitness/" className='footerlink'>Home</Link>
                            <Link to="/about" className='footerlink'>About</Link>
                            <Link to="/exercises" className='footerlink'>Exercises</Link>
                            <Link to="/news" className='footerlink'>Login</Link>
                            <Link to="/contact" className='footerlink'>Contact</Link>
                        </div>
                    </div>
                </div>
                <div className='columns2'>
                    <div className='column'>
                        <h1>Contact</h1>
                        <p>londongym@gmail.com</p>
                        <p>074982240130</p>
                        <p>@londongym</p>
                    </div>
                    <div className='column'>
                        <h1>Tips & Guides</h1>
                        <p>Physical fitness may help prevent depression, anxiety</p>
                        <p>Fitness: The best exercise to lose belly fat and tone up...</p>
                    </div>
                </div>
            </div>
            <div className='bottom'>
                <p>Copyright ©2023 All rights reserved</p>
            </div>
        </footer>
    )
}
export default Footer;