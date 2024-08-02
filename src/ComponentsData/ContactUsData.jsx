import { Card } from "react-hartan";

const contactUsCardsData = [
    {
        contentHeading: "Contact Number",
        contentPara: "+91 63898 86563",
        imgSrc: "https://img.icons8.com/?size=100&id=53439&format=png&color=FD7E14",
        userButtonStyle: "display-none",
        userContentStyle: "contact-us-content",
        userCardStyle: "contact-us"
    },
    {
        contentHeading: "Our Location",
        contentPara: "1934 Vishal Vihar Dubbaga, Thakurganj, Lucknow - 226003",
        imgSrc: "https://img.icons8.com/?size=100&id=7891&format=png&color=FD7E14",
        userButtonStyle: "display-none",
        userContentStyle: "contact-us-content",
        userCardStyle: "contact-us"
    },
    {
        contentHeading: "Our Email",
        contentPara: "support@technoconnect.io",
        imgSrc: "https://img.icons8.com/?size=100&id=63490&format=png&color=FD7E14",
        userButtonStyle: "display-none",
        userContentStyle: "contact-us-content",
        userCardStyle: "contact-us"
    },
];

export const contactUsCards = <>
    {contactUsCardsData.map((data, id) => {
        return <Card key={id} contentHeading={data.contentHeading} contentPara={data.contentPara} imgSrc={data.imgSrc} userButtonStyle={data.userButtonStyle} userContentStyle={data.userContentStyle} userCardStyle={data.userCardStyle} />
    })}
</>;

export const contactUsHeadText = "Contact Us";