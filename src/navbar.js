import React from 'react'
import logoyoutube from './assets/images/youtube-2017-seeklogo.com.svg'
import profilepic from './assets/images/fotoperfil.png'
const Navbar = () => {
    return (
        <header>
            <nav className="justify-content-sbt d-flex align-items-center">
                <div className="nav-div-1 d-flex">
                    <div className="nav-div-1-box-bars d-flex align-items-center">
                        <a className="margin-auto" href="#">
                            <i className="fas fa-bars bars"/>
                        </a>
                    </div>
                    <div className="nav-div-1-logo d-flex align-items-center">
                        <a href="#">
                            <img width="80px" height="24px" src={logoyoutube} alt="logo"/>
                        </a>
                    </div>
                </div>
                <div className="nav-div-2 d-flex justify-content-center">
                    <div className="div-input-search d-flex align-items-center">
                        <input className="input-navbar margin-auto" placeholder="Buscar" type="text"/>
                    </div>
                    <div className="div-icon-button-box d-flex align-items-center">
                        <button className="button-navbar">
                            <i className="fas fa-search"/>
                        </button>
                    </div>
                </div>
                <div className="nav-div-3 d-flex justify-content-sbt align-items-center">
                    <a href="#"><i className="fas fa-video icon-size-div-3"/></a>
                    <a href="#"><i className="fas fa-th icon-size-div-3"/></a>
                    <a href="#"><i className="fas fa-bell icon-size-div-3"/></a>
                    <a href="#"><img width="32px" height="32px" src={profilepic} alt="fotoperfil"/></a>
                </div>
            </nav>
        </header>
)
}

export default Navbar