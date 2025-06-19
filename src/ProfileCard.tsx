import React, { useState } from "react";
import { MdEmail, MdPhone, MdCake, MdLocationOn, MdExpandMore } from 'react-icons/md';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import './css/ProfileCard.css';
interface InfoSectionProps {
  icon: React.ReactNode;
  label: string;
  detail: string;
}

const InfoSection: React.FC<InfoSectionProps> = ({ icon, label, detail }) => (
  <div className="about-me">
    <span className="icon-about">
      {icon}
    </span>
    <div className="description-about">
      <span className="title-about">
        {label}
      </span>
      <p>{detail}</p>
    </div>
  </div>
);
const ProfileCard: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const infoData = [
    { icon: <MdEmail />, label: 'EMAIL', detail: 'tjentrung8z@gmail.com' },
    { icon: <MdPhone />, label: 'PHONE', detail: '0867538329' },
    { icon: <MdCake />, label: 'BIRDAY', detail: 'January 23, 2003' },
    { icon: <MdLocationOn />, label: 'LOCATION', detail: 'Số 59, đường Bùi Thị Xuân, Phường Lê Thanh Nghị, thành phố Hải Dương, tỉnh Hải Dương.' },

  ];
  return (
    <div className="sibar-me">
      <div className="add-me">
        <img src="src/img/me.png" className="" />
        <div className="file-name">
          <h2 className="name-me">Nguyễn Tiến Trung</h2>
          <p className="description-me">Cái gì cũng làm ạ</p>
        </div>
      </div>
      <div className="line-about"></div>
      <div className="menu-navbar" onClick={toggleMenu}>
        <MdExpandMore />
      </div>
      <div className={`info-list-container ${isMenuOpen ? "open" : ""}`} >
        {infoData.map((info, index) => (
          <InfoSection key={index} icon={info.icon} label={info.label} detail={info.detail} />
        ))}
      </div>
      <div className="icon-mxh">
        <a href="https://www.facebook.com/trung.tien.309903">
          <FaFacebook className="items-icons-mxh" />
        </a>
        <a href="https://www.instagram.com/vir_trung/">
          <FaInstagram className="items-icons-mxh" />
        </a>
      </div>
    </div >
  );
};
export default ProfileCard;