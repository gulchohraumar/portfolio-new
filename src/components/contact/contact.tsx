
import { useState } from 'react';
import './contact.scss';

function Contact() {

    return (
        <div id='contact' className='row mt-5 py-4 px-4'>
            <div className="col-lg-12 mb-3">
                <h3 className='text-center px-2 font-semibold text-4xl header-title'>
                    Contact with me
                    <div className="header-bottom" ></div>
                </h3>
            </div>
            <div className="mt-2 row">
                <div className="col-md-5 mt-4">
                    <h5>CONTACT INFO</h5>
                    <h1 className='font-bold'>
                        Get in touch
                    </h1>

                    <div className="d-flex align-items-center mt-4">
                        <i className="me-3 get-in-touch-icon fa-regular fa-comments" ></i>
                        <div>
                            <p className='m-0 text-sm'>Talk to me:</p>
                            <p className='m-0 font-medium'>gulchohra.umarli@gmail.com</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center mt-4">
                        <i className="me-3 get-in-touch-icon fa-regular fa-mobile-button" ></i>
                        <div>
                            <p className='m-0 text-sm'>Call me:</p>
                            <p className='m-0 font-medium'>+994 70 258 44 74</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center mt-4">
                        <i className="me-3 get-in-touch-icon fa-regular fa-location-dot" ></i>
                        <div>
                            <p className='m-0 text-sm'>Address:</p>
                            <p className='m-0 font-medium'>Baku, Azerbaijan</p>
                        </div>
                    </div>

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


                <div className="col-md-7 mt-3">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="field">
                                <label htmlFor="name" title="Name" data-title="Name"></label>
                                <input type="text" name="name" id="name" placeholder='Name' />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="field">
                                <label htmlFor="surname" title="Surname" data-title="Surname"></label>
                                <input type="text" name="surname" id="surname" placeholder='Surname' />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="field">
                                <label htmlFor="phone" title="Phone" data-title="Phone"></label>
                                <input type="phone" name="phone" id="phone" placeholder='Phone' />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="field">
                                <label htmlFor="email" title="Email" data-title="Email"></label>
                                <input type="email" name="email" id="email" placeholder='Email' />
                            </div>
                        </div>
                    </div>

                    <div className="row ">
                        <div className="col-md-12">
                            <div className="field">
                                <label htmlFor="message" title="Message" data-title="Message"></label>
                                <textarea rows={4} name="message" id="message"></textarea>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="field">
                                <button className='col-lg-12 rounded save font-semibold'>Send message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
