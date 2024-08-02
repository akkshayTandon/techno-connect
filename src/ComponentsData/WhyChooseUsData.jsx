import { Card } from "react-hartan";

const chooseUsCardsData = [
    {
        contentHeading: "Tailored Experience",
        imgSrc: "/logo/tailored-experience.png",
        userButtonStyle: "display-none",
        userContentStyle: "choose-us-content",
        userCardStyle: "choose-us"
    },
    {
        contentHeading: "Technology Expertise",
        imgSrc: "/logo/technology-expertise.png",
        userButtonStyle: "display-none",
        userContentStyle: "choose-us-content",
        userCardStyle: "choose-us"
    },
    {
        contentHeading: "Scalable Products",
        imgSrc: "/logo/scalable-products.png",
        userButtonStyle: "display-none",
        userContentStyle: "choose-us-content",
        userCardStyle: "choose-us"
    },
    {
        contentHeading: "Fast Feedback Cycle",
        imgSrc: "/logo/fast-feedback-cycle.png",
        userButtonStyle: "display-none",
        userContentStyle: "choose-us-content",
        userCardStyle: "choose-us"
    },
];

export const chooseUsCards = <>
    {/* <Card imgSrc="https://www.sourcecodematters.com//assets/frontend/images/svg/business-1.png" userButtonStyle="display-none" userContentStyle="choose-us-content" userCardStyle="choose-us" /> */}
    {chooseUsCardsData.map((data, id) => {
        return <Card contentHeading={data.contentHeading} key={id} imgSrc={data.imgSrc} userButtonStyle={data.userButtonStyle} userContentStyle={data.userContentStyle} userCardStyle={data.userCardStyle} />
    })}
</>;

export const chooseUsHeadText = <>Why <span>Choose Us</span> ❓</>;