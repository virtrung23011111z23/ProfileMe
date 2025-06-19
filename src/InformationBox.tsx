import React,{useState} from "react";
import "./css/InformationBox.css";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Skill from "./Skill";
interface Tabitems{
    label:string;
    content:JSX.Element;
}
interface TabitemsProps{
    tabs:Tabitems[];
}
const TabitemsInterface:React.FC<TabitemsProps> = ({tabs}) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    return (
        <div className="Page">
            <div className="navbar">
            {tabs.map((tab,index) => (
                <button key={index} onClick={() => setActiveIndex(index)} className={activeIndex === index ? 'active ' : ' '}>
                    {tab.label}
                </button>
            ))}
            </div>
            <h1 className="title-page">{tabs[activeIndex].label}</h1>
            <div className="name-about">
                {tabs[activeIndex].content}
            </div>
        </div>
    );
};
const InformationBox: React.FC = () => {
  const tabs: Tabitems[] = [
    { label: 'Giới thiệu', content: <div> <AboutMe /></div> },
    { label: 'Kỹ năng', content: <div><Skill /></div> },
    { label: 'Các dự án',content: <div><Portfolio /></div> },
    { label: 'Liên hệ', content: <div><Contact /></div> },
  ];

  return <TabitemsInterface tabs={tabs} />;
};

export default InformationBox;
