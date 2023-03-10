import './Contact.css'
import '../App/App.css'
import '../Logo/Logo.css'
import Logo from '../Logo/Logo';

function Contact() {
    return (
        <div className='contact'>
            <h1>Contact Me</h1>
            <div className='line'></div>
            <div className='mediasContainer'>
                <div className='firstContainer'>
                    <Logo name='github' link="https://github.com/nicksosnivka"></Logo>
                    <Logo name='instagram' link="https://www.instagram.com/nicholas__sos/"></Logo>
                </div>
                <div className='secondContainer'>
                    <Logo name='linkedin' link="https://www.linkedin.com/in/nicholas-sosnivka/"></Logo>
                    <div className='image'>
                        <p>nicksosnivka@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;