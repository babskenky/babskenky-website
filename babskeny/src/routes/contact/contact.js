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
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.896477983414!2d-95.6852118842372!3d29.896083381936617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640d701842cb4f5%3A0x119ec94497ed64e7!2s8190+Barker+Cypress+Rd%2C+Cypress%2C+TX+77433%2C+USA!5e0!3m2!1sen!2sng!4v1536332853647"
                                  height="450" frameBorder="0" style={{border:0,width:"100%"}} allowFullScreen>

                                </iframe>
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
                            8190 Barker Cypress Road<br/>
                            Suite 1900-90<br/>
                            Cypress TX 77433<br/>
                            USA<br/>
                         08007527207
                        </address>
                    </div>
                </div>
            </div>
            </section>
        </div>
    )
}

export default Contact