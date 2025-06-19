import React from "react";
import "./css/Skill.css";
import { MdMenuBook } from 'react-icons/md';

interface Education {
  NameEducation: string;
  TimeEducation: string;
  DescriptionEducation: string;
}
interface Skill {
  NameSkill: string;
  LevelSkill: number;
}
const InfoEducation: React.FC<Education> = ({ NameEducation, TimeEducation, DescriptionEducation }) => (
  <div className="Education-goal ">
    <div className="Icon-education"></div>
    <h2>{NameEducation} </h2>
    <span>{TimeEducation}</span>
    <p>{DescriptionEducation}</p>
  </div>
)
const InfoSkill: React.FC<Skill> = ({ NameSkill, LevelSkill }) => (
  <div className="Skill-goal">
    <div className="title-skill">
      <h4>{NameSkill}</h4>
      <p>{LevelSkill}%</p>
    </div>
    <div className="progress-bar">
      <div className="progress" style={{ width: LevelSkill + '%' }}></div>
    </div>
  </div>
)
const Skill: React.FC = () => {
  const DataEducation = [
    {
      NameEducation: "Học tại trường Tiểu học Tứ Cường",
      TimeEducation: "2010 – 2014",
      DescriptionEducation: "Học tập và rèn luyện bản thân tại Trường Tiểu Tứ Cường."
    },
    {
      NameEducation: "Học tại trường THCS Tứ Cường",
      TimeEducation: "2014 – 2018",
      DescriptionEducation: "Học tập và rèn luyện bản thân tại Trường THCS Tứ Cường."
    },
     {
      NameEducation: "Học tại trường THPT Thanh Miện",
      TimeEducation: "2018 – 2021",
      DescriptionEducation: "Học tập và rèn luyện bản thân tại Trường THPT Thanh Miện."
    },
     {
      NameEducation: "Chuyên ngành Công nghệ thông tin",
      TimeEducation: "2021 – 2025",
      DescriptionEducation: "Học chuyên ngành Công nghệ thông tin ở Đại học Hải Dương."
    },
     {
      NameEducation: "Tự Học",
      TimeEducation: "2025 – Present",
      DescriptionEducation: "Tự học qua các kênh Youtube,Facebook,... và các diễn đàn code."
    }
  ];
  const DataSkill = [
    { name: "Web Design", percentage: 90 },
    { name: "JavaScript", percentage: 70 },
    { name: "TypeScript", percentage: 60 },
    { name: "NodeJS", percentage: 10 },
  ];
  return (
    <div className="resume-contaier">
      <div className="expensive-contaier">
          <MdMenuBook size={20} color="var(--primary-color)" />
      </div>
      <div className="timeline">
        <div className="timeline-line"></div>
        {DataEducation.map((educ, index) => (
          <InfoEducation key={index} NameEducation={educ.NameEducation} TimeEducation={educ.TimeEducation} DescriptionEducation={educ.DescriptionEducation} />
        ))}
      </div>
      <div className="skills-section">
        <h2 className="section-title">Kỹ Năng</h2>
        <div className="skills-list">
          {DataSkill.map((skill, index) => (
            <InfoSkill key={index} NameSkill={skill.name} LevelSkill={skill.percentage} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Skill;