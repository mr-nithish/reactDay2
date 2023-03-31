import React from 'react'
import logo1 from './logo1.svg'
import insta from './insta.svg'
import email from './email.svg'
import twitter from './twitter.svg'
import github from './github.svg'
import linkedin from './linkedin.svg'


export default function Header() {  
return (
    <div class="card text-center">
        <div class="card-header">
            <div class="row">
                <div class="col">
                    <a class="navbar-brand" href="#">
                        <img src={logo1} width="30" height="24" class="d-inline-block align-text-top"/>
                        Nestle
                    </a>
                </div>
                <div class="col">
                    <nav class="nav"  >
                        <a class="nav-link" href="#">Home</a>
                        <a class="nav-link" href="#">About</a>
                        <a class="nav-link" href="#">Blogs</a>
                        <a class="nav-link" href="#">Portfolio</a>
                        <a class="nav-link" href="#">Profile</a>
                        <a class="nav-link" href="#">Contact</a>
                    </nav>
                </div>
            </div>

        </div>
        <div class="card-body">
        <h1>Hii Welcome to Our Web Page</h1>
        </div>
            
        <div class="card-footer text-body-secondary">
            <img src={insta} width="30" height="24" class="d-inline-block align-text-top"/>
            <img src={twitter} width="30" height="24" class="d-inline-block align-text-top"/>
            <img src={github} width="30" height="24" class="d-inline-block align-text-top"/>
            <img src={linkedin} width="30" height="24" class="d-inline-block align-text-top"/>
            <img src={email} width="30" height="24" class="d-inline-block align-text-top"/>
        </div>
    </div>
)
}
