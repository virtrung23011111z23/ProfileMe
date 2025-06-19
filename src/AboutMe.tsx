import React from "react";
import "./css/AboutMe.css";

interface Service {
    ImgService: string;
    NameService: string;
    DescriptionService: string;
}
const InfoService: React.FC<Service> = ({ ImgService, NameService, DescriptionService }) => (
    <div className="Service-Item">
        <img src={ImgService} alt={NameService} />
        <div className="Content-Service">
            <span>{NameService}</span>
            <p>{DescriptionService}</p>
        </div>
    </div>
);
interface Customer {
    ImgCustomer: string;
    NameCustomer: string;
    ContactCustomer: string;
}
const InfoCustomer: React.FC<Customer> = ({ ImgCustomer, NameCustomer, ContactCustomer }) => (
    <div className="Customer-contact">
        <img src={ImgCustomer}></img>
        <h2>{NameCustomer}</h2>
        <p>{ContactCustomer}</p>
    </div>
)
const AboutMe: React.FC = () => {
    const DataService = [
        { ImgService: "src/img/Webdesgin.png", NameService: "Web design", DescriptionService: "Thiết kế hiện đại nhất và chất lượng cao được sản xuất ở cấp độ chuyên nghiệp" },
        { ImgService: "src/img/Webdevelopment.png", NameService: "Web development", DescriptionService: "Phát triển chất lượng cao của các trang web ở cấp độ chuyên nghiệp." },
        { ImgService: "src/img/MobieApp.png", NameService: "Web Reposive", DescriptionService: "Phát triển chuyên nghiệp của các ứng dụng trên điện thoại và các tỷ lệ màn hình khác nhau." },
        { ImgService: "src/img/Prography.png", NameService: "Chỉnh sửa thiết kể ảnh", DescriptionService: "Chỉnh sủa thiết kế ảnh giúp trang web trở nên chuyên nghiệp và hiện đại hơn" }
    ]
    const DataContact = [
        { ImgCustomer: "src/img/granfather.png", NameCustomer: "Nam Anh", ContactCotumer: "Trung đã giấu để tạo ra một bản sắc của công ty. Chúng tôi rất hài lòng với công việc được thực hiện. Cậu ấy có rất chú trọng và rất quan tâm đến nhu cầu của khách hàng. " },
        { ImgCustomer: "src/img/granmother.png", NameCustomer: "Chị Miên", ContactCotumer: "Trung thực sự quan tâm và lo lắng cho những vấn đề có thể phát sinh ảnh hưởng tới khách hàng. " },
        { ImgCustomer: "src/img/sister.png", NameCustomer: "Chị Dịu", ContactCotumer: "Mặc dù còn thiếu kinh nghiệm nhưng Trung lúc nào cũng cố gắng giải quyết vấn đề và trung thực nhận lỗi. " },
        { ImgCustomer: "src/img/bro.png", NameCustomer: "Anh Sơn", ContactCotumer: "Trung còn một chặng đường dài phía trước, cố lên Trung nhé. " },
    ]
    return (
        <div className="about-me-page">
            <p>Sinh ra và lớn lên từ xã Tứ Cường, một xã khá vùng quê khi mỗi làng cách nhau một cánh đồng. Hồi bé thích siêu nhân,hoạt hình còn bây giờ thì thích em. Gu mẹ một con và các em gái cấp 3, nếu một em gái cấp 3 có một con thì càng tốt.</p>
            <p>Tôi sinh ra trong gia đình làm hầu thiên hạ luôn tha hương đi muôn phương làm việc trong nhà. Tôi làm đủ một sinh viên đang học đòi làm code kiêm shiperr bên Heyoy kiêm bồi bàn bên quán Là Đã Đời kiêm luôn. Nhưng công việc tôi muốn là làm chồng em và là bố đứa con của bạn thân em.</p>
            <h2>Tôi Đang Làm Cl Gì á</h2>
            <div className="Service-List">{DataService.map((service, index) => (
                <InfoService key={index} ImgService={service.ImgService} NameService={service.NameService} DescriptionService={service.DescriptionService} />
            ))}</div>
            <div className="Contact-Customer-list">
                {DataContact.map((contact, index) => (
                    <InfoCustomer key={index} ImgCustomer={contact.ImgCustomer} NameCustomer={contact.NameCustomer} ContactCustomer={contact.ContactCotumer} />
                ))}
            </div>
            <div className="Modal-contact">
            </div>
        </div>
    );
};
export default AboutMe;