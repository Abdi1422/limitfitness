import './footer.scss'
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
                            <a href='http://localhost:3000/home' className='footerlink'>Home</a>
                            <a href='http://localhost:3000/about' className='footerlink'>About</a>
                            <a href='http://localhost:3000/exercises' className='footerlink'>Exercises</a>
                            <a href='http://localhost:3000/news' className='footerlink'>Login</a>
                            <a href='http://localhost:3000/contact' className='footerlink'>Contact</a>
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