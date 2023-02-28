import './Contact.css'
import './App.css'
import './Logo.css'
import Logo from './Logo';

function Contact() {
    return (
        <div className='contact'>
            <h1>Contact Me</h1>
            <div className='line'></div>
            <div className='mediasContainer'>
                <Logo name='github' link="https://github.com/nicksosnivka"></Logo>
                <Logo name='instagram' link="https://www.instagram.com/nicholas__sos/"></Logo>
                <Logo name='linkedin' link="https://www.linkedin.com/in/nicholas-sosnivka/"></Logo>
                <div className='image'>
                    <p>nicksosnivka@gmail.com</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;