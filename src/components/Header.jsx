import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../assets/imgs/logo.png";
import "../components/Header.css"

function Header(){

    return (
        <>
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 mb-4 px-4 border-bottom header">
                <div class="col-md-3 mb-2 mb-md-0">
                    <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
                    <img src={Logo} className="logo"/>
                    </a>
                </div>

                <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="#" class="nav-link px-2 link-secondary">Add new person</a></li>
                    <li><a href="#" class="nav-link px-2">About</a></li>
                    <li><a href="#" class="nav-link px-2">People</a></li>
                    <li><a href="#" class="nav-link px-2">FAQs</a></li>
                </ul>

                <div class="col-md-3 text-end">
                    <button type="button" class="btn btn-outline-primary me-2">Login</button>
                    <button type="button" class="btn btn-primary">Sign-up</button>
                </div>
        </div>
        </>
    )
}

export default Header