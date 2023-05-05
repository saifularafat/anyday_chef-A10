import React from 'react';
import banner from '../../assets/banner/banner4.jpg'
import { FaMapMarked, FaPhoneAlt, FaEnvelope, FaLocationArrow } from 'react-icons/fa';

const Contact = () => {
    return (
        <div>
            <div style={{
                backgroundImage: `url(${banner})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: 'cover',
                height: '60vh',
                width: "100%"
            }}>
                <h2 className='page_banner-title text-white md:pt-32 pt-24'>Home/Contact</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
                <div className='contact-style'>
                    <div className='contact-img'><FaLocationArrow className='text-btn_color w-8 h-8' /></div>
                    <h2 className='contact-title italic text-2xl'>Our Address</h2>
                    <p className='contact-title'>Street: 3840 Winifred Way, Marion</p>
                </div>
                <div className='contact-style'>
                    <div className='contact-img'><FaEnvelope className='text-btn_color w-8 h-8' /></div>
                    <h2 className='contact-title italic text-2xl'>Email Address</h2>
                    <p className='contact-title'>info@example.com <br />
                        yourmail@gmail.com
                    </p>
                </div>
                <div className='contact-style'>
                    <div className='contact-img'><FaPhoneAlt className='text-btn_color w-8 h-8' /></div>
                    <h2 className='contact-title italic text-2xl'>Phone Numbers</h2>
                    <p className='contact-title'>(480) 555-0103 <br />
                    (480) 444-2222</p>
                </div>
                <div className='contact-style'>
                    <div className='contact-img'><FaMapMarked className='text-btn_color w-8 h-8' /></div>
                    <h2 className='contact-title italic text-2xl'>Office Hours</h2>
                    <p className='contact-title'>Mon-Thu: 9:00AM - 5:00PM Friday: Closed</p>
                </div>

            </div>
        </div>
    );
};

export default Contact;