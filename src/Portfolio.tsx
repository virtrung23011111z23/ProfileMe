import React, { useMemo, useState } from "react";
import './css/Portfolio.css';
import { MdVisibility } from 'react-icons/md';

interface portfolio {
    ImgPrf: string;
    NamePrf: string;
    CategoryPrf: string;
    LinkPrf: string;
}

// Nhận thêm props onClick và isActive để highlight
interface CategoryProps {
    CategoryPrf: string;
    onClick: (cat: string) => void;
    isActive: boolean;
}
const CategoryPortfolio: React.FC<CategoryProps> = ({ CategoryPrf, onClick, isActive }) => (
    <div
        className={`Profile-Category ${isActive ? 'active' : ''}`}
        onClick={() => onClick(CategoryPrf)}
    >
        {CategoryPrf}
    </div>
);

const InfoPortfolio: React.FC<portfolio> = ({ ImgPrf, NamePrf, CategoryPrf, LinkPrf }) => (
    <div className="Profile-items">
        <a href={LinkPrf}>
            <div className="Img-profile">
                <img src={ImgPrf} alt={NamePrf} />
                <div className="profile-items-icon-box">
                    <MdVisibility />
                </div>
            </div>
        </a>
        <h4>{NamePrf}</h4>
        <p>{CategoryPrf}</p>
    </div>
);

const Portfolio: React.FC = () => {
    const DataProfile = [
        { ImgPrf: "src/img/nhatkimwindow.png", NamePrf: "Website cửa nhôm kính", CategoryPrf: "Web design", Linkprf: "https://nhatkimwindow.com/" },
        { ImgPrf: "src/img/vcard.png", NamePrf: "Website Dự án Vcard", CategoryPrf: "Web design", Linkprf: "http://vcard.namanhtechdigital.vn./" },
        { ImgPrf: "src/img/vcard.png", NamePrf: "Website Nam Anh Tech", CategoryPrf: "Web design", Linkprf: "https://namanhtechdigital.vn/" },
        { ImgPrf: "src/img/Linhkien.png", NamePrf: "Website Linh Kiện Máy tính", CategoryPrf: "Web development", Linkprf: "https://linhkienmaytinh.namanhtechdigital.vn/" },
    ];

    const uniqueCategories = useMemo(() => {
        return ['All', ...new Set(DataProfile.map(item => item.CategoryPrf))];
    }, [DataProfile]);

    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    const filteredData = useMemo(() => {
        if (selectedCategory === 'All') return DataProfile;
        return DataProfile.filter(item => item.CategoryPrf === selectedCategory);
    }, [selectedCategory, DataProfile]);

    return (
        <div>
            <div className="category-name">
                {uniqueCategories.map((category) => (
                    <CategoryPortfolio
                        key={category}
                        CategoryPrf={category}
                        onClick={setSelectedCategory}
                        isActive={selectedCategory === category}
                    />
                ))}
            </div>

            <div className="Profile-list">
                {filteredData.map((prf, index) => (
                    <InfoPortfolio
                        key={index}
                        ImgPrf={prf.ImgPrf}
                        NamePrf={prf.NamePrf}
                        CategoryPrf={prf.CategoryPrf}
                        LinkPrf={prf.Linkprf}
                    />
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
