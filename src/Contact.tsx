import React from "react";
import './css/Contact.css'
import { MdSend } from 'react-icons/md';

const Contact: React.FC = () => {
    return (
        <div className="contact">
            <div style={{ width: '100%', height: '400px', marginBottom: '2rem' }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.412280350494!2d105.73935481153866!3d21.05618958675366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454fbc59d40e7%3A0x1105beebcba781db!2zMjMgTmdoLiAyNS8xMDYgxJAuIFBow7ogTWluaCwgTWluaCBLaGFpLCBC4bqvYyBU4burIExpw6ptLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1748184150529!5m2!1svi!2s"width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"></iframe>
            </div>
            <form className="Contact-form">
                <h1>LIÊN HỆ VỚI TRUNG</h1>
                <div className="Contact-Information">
                    <input type="text" className="form-input" placeholder="Họ và Tên"></input>
                    <input type="email" className="form-input" placeholder="Email"></input>
                </div>
                <textarea className="form-area" placeholder="Nội dung tin nhắn"></textarea>
                <button className="form-submit" type="submit">
                    <MdSend className="rotated-icon" />
                    Gửi cho Trung
                </button>
            </form>
        </div>
    );
};
export default Contact;