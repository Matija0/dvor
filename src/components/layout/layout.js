import React from "react"
import ContactForm from "./contactform"
import Footer from "./footer"
import Navigation from "./navigation"
const Layout=({children})=> {

    return(

        <>
        <Navigation/>
        <div id="app">
            {children}
        </div>
        <ContactForm />
        <Footer/>
        </>
    )
}

export default Layout