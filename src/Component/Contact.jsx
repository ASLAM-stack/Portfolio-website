import { FaInstagram, FaLinkedinIn, FaLocationDot, FaXTwitter } from 'react-icons/fa6';
import './css/Contact.css'
import { IoCallSharp } from 'react-icons/io5';
import { IoMdMail } from 'react-icons/io';
 
import { ImFacebook2 } from 'react-icons/im';
import Swal from 'sweetalert2';

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "52207a6d-c37a-47a2-8c78-93f41c108964");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your message has been send",
            showConfirmButton: false,
            timer: 1500
          });
        }
      };
    return (
        <div id='contact' className="max-w-7xl mx-auto my-24" >
             <div>
                <div className="content py-5">
                    <h1 className='md:text-5xl pop font-medium text-3xl text-white text-center'>Contact Me</h1>
                    <p className='md:text-base text-center pop text-[#dbdbdb]'>
Got a project or just want to connect? Feel free to reach out for <br /> any web development inquiries or opportunities.</p>
                </div>
                <div id='conten_rap' className="Rapper pop">
                    <div className="contactInfo">
                        <div className="box">
                            <div className="icon"><b></b><FaLocationDot className='icons'/></div>
                            <div className="text">
                                <h3>Address</h3>
                                <p>Rampal,Bagerhat 
                                    <br />
                                     Khulna,Bangladesh</p>
                                
                            </div>
                        </div>
                        <div className="box">
                            <div className="icon"><b></b><IoCallSharp className='icons' /></div>
                            <div className="text">
                                <h3>Phone</h3>
                                <p>+8801704495446</p>
                                
                            </div>
                        </div>
                        <div className="box">
                            <div className="icon"><b></b><IoMdMail className='icons' /></div>
                            <div className="text">
                                <h3>Email</h3>
                                <p className='contact_email'>arifhossainaslam6@gmail.com</p>
                                
                            </div>
                        </div>
                        <h2 className="txt">Contact with Me</h2>
                        <ul className='sci flex relative gap-[30px] my-5 list-none'>
                            <li><a className='icon_link' href=""><ImFacebook2  /></a></li>
                            <li><a className='icon_link' href=""><FaXTwitter  /></a></li>
                            <li><a className='icon_link' href=""><FaInstagram /></a></li>
                            <li><a className='icon_link' href=""> <FaLinkedinIn /></a></li>
                        </ul>
                    </div>
                    <div className="contactForm">
                        <form onSubmit={onSubmit} >
                        <h2>Send Message</h2>
                            <div className="inputBox">
                                
                                <input type="text" className="text " name='name' required/>
                                <span>Full Name</span>
                            </div>
                            <div className="inputBox">
                                 
                                <input type="email" className="text " name='email' required/>
                                <span>Email</span>
                            </div>
                            <div className="inputBox">
                                 <textarea rows={1} name="message" id=""  required></textarea>
                                <span>Type Your Message</span>
                            </div>
                            <div className="inputBox">
                                  <input type="submit" value="Send" />
                            </div>
                        </form>
                    </div>

                </div>
             </div>
        </div>
    );
};

export default Contact;