export interface Testimonial {
    id: string;
    name: string;
    role: string;
    text: string;
    date: string;
    image?: string;
}

export const testimonials: Testimonial[] = [
    {
        id: "1",
        name: "Shahid Taj",
        role: "Founder & CEO, SSQUARE PK",
        date: "February 11, 2026",
        text: "I highly recommend Hussnain as a dedicated and talented professional. He is an excellent resource with strong skills in React Native and mobile application development. During his time with our team, he consistently demonstrated a high level of commitment, problem-solving ability, and attention to detail. Hussnain has the ability to understand project requirements quickly and deliver quality solutions on time. He is proactive, reliable, and always willing to go the extra mile to ensure the success of any project.",
        image: "https://media.licdn.com/dms/image/v2/D4D03AQFC5wTrR4sRAg/profile-displayphoto-scale_100_100/B4DZtxUe4rGUAg-/0/1767132758029?e=1774483200&v=beta&t=Oyf2EZRN10c-MlCTsdvPjFxQIbSJ2I21PiXoVwXiYnc"
    },
    {
        id: "2",
        name: "Muhammad Afaq",
        role: "Team Member",
        date: "March 7, 2025",
        text: "I had the pleasure of working with Husnain, and he is an excellent React Native developer. He is highly skilled, dedicated, and pays attention to every detail in his work. He consistently delivers projects on time and handles issues efficiently. I'm truly impressed with his professionalism and technical expertise.",
        image: "https://media.licdn.com/dms/image/v2/D4D35AQFuIVPeICeBSg/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1732828246532?e=1773478800&v=beta&t=iE_w5riWzfpFQQBBrKGPjp_Lgqfz5qcaAqGlWFDpU4U"
    },
    {
        id: "3",
        name: "Usman Abbas",
        role: "Project Manager, QA",
        date: "March 7, 2025",
        text: "It was a pleasure working with you and give quick response on changes. Very talented and sharp minded to get things done on time.",
        image: "https://media.licdn.com/dms/image/v2/D4E35AQFzoylTrn4qBA/profile-framedphoto-shrink_100_100/B4EZo5MDOGIIAk-/0/1761896051888?e=1773478800&v=beta&t=7wS4TZngg180qGSouo1By9F4Xcb76J9_45styzCgoHI"
    }

];
