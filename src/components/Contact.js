import React from 'react'

const Contact = () => (

    <>
        <h1>Nous contactez</h1>

        <h3>Retrouvez nous sur nos Linkedin respectifs !</h3>

        <div id="blocLinkedin">
            <label htmlFor="logo_linkedin">Pierre Pellegrin : </label>
            <a href="https://www.linkedin.com/in/pierre-pellegrin-0723a2199/"><img src="logo_linkedin.png"
                                                                                   name="logo_linkedin"
                                                                                   alt="logo_linkedin"/></a>

            <br/>
            <label htmlFor="logo_linkedin">Pierre Zelnio : </label>
            <a href="https://www.linkedin.com/in/pierre-zelnio-43595a199/"><img src="logo_linkedin.png"
                                                                                name="logo_linkedin"
                                                                                alt="logo_linkedin"/></a>

        </div>
    </>


);

export default Contact;