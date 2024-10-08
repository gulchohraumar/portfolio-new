import './about.scss';

function About() {
    return (
        <div data-aos="fade-in" id='about' className='row mt-5 pt-3 pb-5 bg-about'>
            <div className="row mt-1 px-5 align-items-center">
                <div className="col-md-2 mt-3 ">
                    <div>
                        <h1 className='font-bold' style={{ fontSize: '90px', color: 'cornflowerblue' }}>
                            2+
                        </h1>
                        <h4 className='mt-2 font-bold'>
                            Years
                            <br />
                            Working
                            <br />
                            Experience
                        </h4>
                    </div>
                </div>

                <div className="col-md-10 mt-3">
                    <div className="col-lg-12 mb-3">
                        <h3 className='d-flex align-items-center justify-content-center px-2 font-semibold text-4xl header-title'>
                            About me
                        </h3>
                    </div>

                    <div className='about-content mt-3 ps-5'>
                        <div className="text-center">
                            <strong>“If you're already a front-end developer, well, pretend you're also wearing a pirate hat.” - <span style={{ color: '#ffb703' }}>Ethan Marcotte.</span></strong>
                        </div>
                        <div className="pt-4 text-justify">
                            I have been wearing this hat for two years now. In the end I reached the middle level. During this time, I specialized in Angular, Angular material, RxJS and Tailwind CSS, which enabled the creation of dynamic and responsive user interfaces.
                        </div>

                        <div className="pt-3 text-justify">
                            During my work experience, I have been involved in writing the user interface of
                            many projects such as logistics, cargo transportation, etc., supporting other projects
                            written from the beginning, etc.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
