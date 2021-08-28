import React from 'react'
import './contact.css';
import img7 from './Images/email.jpg';
import img8 from './Images/location.jpg';
import img9 from './Images/email.jpg';
import img10 from './Images/phone.jpg';

export default function Contact() {
    return (
        <div>
            <div class="Container">
      <span class="big-circle"></span>
      <img src={img7} class="square" alt="" />
            <div class="form">
                <div class="contact-info">
                <h3 class="title"><b>Get in touch with us</b></h3>
                <p class="text">
                Here we come with best deals for you.Please stay connected with us.Let us know 
                your issues.Connect with us with the followings.</p>
                <div class="info">
                    <div class="information">
                    <img src={img8} class="icon" alt="" />
                    <p>New town,Kolkata,700009.</p>
                    </div>
                    <div class="information">
                    <img src={img9} class="icon" alt="" />
                    <p>mobile@gmail.com</p>
                    </div>
                    <div class="information">
                    <img src={img10} class="icon" alt="" />
                    <p>111-222-333</p>
                    </div>
                </div>

                <div class="social-media">
                    <p><b>Connect with us:</b></p>
                    <div class="social-icons">
                    <a href="#">
                        <i class="fa fa-facebook-f"></i>
                    </a>
                    <a href="#">
                        <i class="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                        <i class="fa fa-instagram"></i>
                    </a>
                    <a href="#">
                        <i class="fa fa-linkedin"></i>
                    </a>
                    </div>
                </div>
                </div>

                <div class="contact-form">
                <span class="circle one"></span>
                <span class="circle two"></span>

                <form action="index.html" autocomplete="off">
                    <h3 class="title">Contact us</h3>
                    <div class="input-container">
                    <input type="text" name="name" class="input" />
                    <label for="">Username</label>
                    <span>Username</span>
                    </div>
                    <div class="input-container">
                    <input type="email" name="email" class="input" />
                    <label for="">Email</label>
                    <span>Email</span>
                    </div>
                    <div class="input-container">
                    <input type="tel" name="phone" class="input" />
                    <label for="">Phone</label>
                    <span>Phone</span>
                    </div>
                    <div class="input-container textarea">
                    <textarea name="message" class="input"></textarea>
                    <label for="">Message</label>
                    <span>Message</span>
                    </div>
                    <input type="submit" value="Send" class="btn" />
                </form>
                </div>
            </div>
    </div>
    </div>
    )
}