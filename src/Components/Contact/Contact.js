import React from 'react';
import { Element } from 'react-scroll';
import {IconButton} from "@material-ui/core";
import {Facebook,LinkedIn,Instagram} from "@material-ui/icons";
import "./Contact.css";

const Contact = () => {
    return (
        <Element className="contact">
            <h1>Contact</h1>
            <div className="contact_container">
                <p>
                   Email<span>  : prasannakumar20000320@gmail.com</span>
                </p>
                <p>
                    Github Username <span> : @prsnaoffl</span>
                </p>
                <div className="contact_icons">
                  <a href="google.com">
                      <IconButton className="icon1">
                          <LinkedIn/>
                      </IconButton>
                   </a>
                   <a href="google.com">
                       <IconButton>
                           <Facebook/>
                       </IconButton>
                  </a>
                  <a href="google.com">
                       <IconButton>
                           <Instagram/>
                       </IconButton>
                 </a>
                </div>
            </div>
        </Element>
    )
}

export default Contact
