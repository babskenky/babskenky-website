import React from 'react';
import './contact.css';


const Contact = () => {

    return(

        <div>
            <header id="home" className="home">
                <div className="overlay-img">
                    <div className="container-fluid no-pd">

                        <div className="row">
                            <div className="col-md-12">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.466472685911!2d-95.69861318488672!3d29.96602138191089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640d5c824a5a37b%3A0xa2b53e928181a334!2s17802+Mound+Rd+%234103%2C+Cypress%2C+TX+77433%2C+USA!5e0!3m2!1sen!2sng!4v1534665450975"
                                    width="600" height="450" frameBorder="0" style="border:0" allowFullScreen></iframe>
                            </div>
                        </div>

                    </div>
                </div>
            </header>
            <section className={'contact bg-dark'}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form>
                            <ul className={'form'}>
                                <li>
                                    <input type='text' placeholder={'fullname'}/>
                                </li>
                                <li>
                                    <input type='text' placeholder={'Email Address'}/>
                                </li>
                                <li>
                                    <textarea rows="6" cols="50" placeholder={'Message'}>
                                    </textarea>
                                </li>
                                <li>

                                    <input className={'btn btn-gold'} type="submit" value="Send" />
                                </li>
                            </ul>

                        </form>
                        </div>

                    <div className="col-md-6 text-white">
                        <h2 style={{color:'#d1ac66'}}> <strong>BNY Holdings Incorporated</strong></h2>
                        <address className={'t-20'}>
                            13801 Napoli Drive<br/>
                            Houston TX 77070
                            <br/> 01234 567 890
                        </address>
                    </div>
                </div>
            </div>
            </section>
        </div>
    )
}

export default Contact