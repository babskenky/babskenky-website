import React from 'react';
import {Link} from 'react-router-dom'
import './nav.css';


const Nav = () => {

    return (
<div>
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">

            <div className="container-fluid">
                <a className="navbar-brand" href=""><div className={'img'}><img alt='img-babskenky' src={'img/BabskenkyLogo-01.png'}/></div></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="icon-menu m-auto text-gold"></i>
                </button>
                <div className="collapse navbar-collapse text-uppercase" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" activestyle={{color:'#d1ac66'}} to={'/'}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" activestyle={{color:'#d1ac66'}}  to={'/aboutbaba'} >About Baba</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" activestyle={{color:'#d1ac66'}}  to={'/products'} >Products</Link>
                        </li>
                        <li className="nav-item disabled-link">
                            <a className="nav-link"  href={'https://isajitechnology'} target={'_blank'}>Isajitechnology</a>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" activestyle={{color:'#d1ac66'}} to={'/contactbaba'}>Contact</Link>
                        </li>
                        <li className="nav-item ">
                            <a href="https://gilbertsosa.wetransfer.com/downloads/e9922fb00d22279e7e349f339f99a21a20180706025711/00d61319de5cd02b7025a28d044fdae920180706025711/03d7dd" target="_blank">Videos</a>
                         </li>
                    </ul>
                </div>
            </div>
        </nav>


</div>

    )
}

export default Nav