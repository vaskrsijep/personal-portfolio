import "./myexpertise.css";
export default function MyExpertise() {

    const MyExpertiseList = [
        {
            name: "Software Development",
            icon: "https://www.svgrepo.com/show/10468/software-developer.svg",
            description: "Experienced in both functional and OOP: Python, Java, JavaScript, TypeScript."
        },
        {
            name: "Frontend Dev, React, NextJS",
            icon: "https://www.svgrepo.com/show/10468/software-developer.svg",
            description: "Passionate about UI/UX. Over 5 years of development experience in HTML, CSS, JS, React and NextJS frameworks."
        },
        {
            name: "React Native, Android, iOS",
            icon: "https://www.svgrepo.com/show/10468/software-developer.svg",
            description: "Skilled in developing hybrid mobile apps and cross-platform solutions using the React Native framework."
        },
    ]

    return (
        <div>
            <p>My Expertise</p>
            <div className="text-white">
                {MyExpertiseList.map((item, index) => {
                    return (
                        <div key={index} className="text-white">
                            <img src={item.icon} alt="" />
                            <p>{item.name}</p>
                            <p>{item.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}