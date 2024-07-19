
import './home.scss';
import me from '../../assets/bg.png'

function Home() {
    return (
        <div id='home' className='row align-items-center px-5  pt-3'>
            <div className="col-md-7 mt-4">
                <p className='font-semibold'>
                    👋 Hi, I'm <span style={{ color: 'cornflowerblue' }}>Gulchohra Umarli</span>
                </p>
                <p className='text-3xl font-semibold'>Frontend Web Developer</p>

                <p className='col-md-10'>
                    I am responsible for to develop aesthetic, responsive( for phone, tablet and desktop) design, easy navigate and smooth websites for you.
                </p>

                <div className="row align-items-center mt-5" style={{ gap: '20px' }}>
                    <a href="https://wa.me/994702584474" target='_blank' className='col-md-1 text-center social-links'>
                        <i className="fa-brands fa-whatsapp"></i>
                    </a>
                    <a href="mailto:email@example.com" target='_blank' className='col-md-1 text-center social-links'>
                        <i className="fa-regular fa-envelope"></i>
                    </a>
                    {/* <a href="https://github.com/umarllee" target='_blank' className='col-md-1 text-center social-links'>
                        <i className="fa-brands fa-github"></i>
                    </a> */}
                    <a href="https://www.linkedin.com/in/gulchohra-umarli-7b64a7200/" target='_blank' className='col-md-1 text-center social-links'>
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href={require("../../static/Gulchohra_Umarli_Front _End_developer.pdf")} title='Download cv' download target='_blank' className='col-md-1 text-center social-links'>
                        <i className="fa-regular fa-file-arrow-down"></i>
                    </a>
                </div>
            </div>

            <div className="col-md-5 mt-4">
                <div className="my-photo-con">
                    <img src={me} alt="" />
                </div>              
            </div>
        </div>
    );
}

export default Home;
