import React from 'react';
import emailjs from 'emailjs-com';


export default function Contact() {

    function SendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('75699', 'template_c1saavd', e.target, 'user_l8UeNhzujpYkQ8cTqn9YQ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }
//75699
    return (
        <div>
            <div className="container">
                <form onSubmit={SendEmail}>
                    <label htmlFor="fname">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your name.." />
                    <label htmlFor="Emails">Email</label>
                    <input type="text" id="email" name="email" placeholder="Email address.."  />
                    <label htmlFor="subjectt">Subject</label>
                    <input type="text" id="subject" name="subject" placeholder="Subject.." />
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder="Write something.." style={{ height: '200px' }} />
                    <input type="submit" className="btn" />
                </form>
            </div>
        </div>
    );
}