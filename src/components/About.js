import Image from "next/image";
import Profile from "../../public/image/profile.png";
import styles from "../css/About.css";

const About = () => {

    const skills = [
        "React.js",
        "Next.js",
        "JavaScript (ES6+)",
        "HTML5 & CSS3",
        "Bootstrap / Tailwind CSS",
        "SCSS",
        "Responsive Design",
        "Git & GitHub"
    ];


    return (
        <section className="about" id="about">
            <div className="container ">
                <div className="image">
                    <Image
                        src={Profile}
                        alt="Rajib Bikram Shah"
                        width={300}
                        height={300}
                        className="profile-image"
                    />
                </div>
                <div className="content">
                    <h3 className="heading1">Hi! I'ma</h3>
                    <h2 className="heading"><strong>Rajib Bikram Shah</strong></h2>
                    <h2 className="heading2">And I'am a <span className='dev'>Frontend Developer |</span></h2>
                    <p className="description">

                        Hi! I'm Rajib Bikram Shah, a frontend developer who enjoys creating clean and responsive websites. I love working on user-friendly designs and making the web look and work better.
                      
                      </p>  <div className="skills-container">
                            <h3 className="subtitle">Skills</h3>
                            <ul className="skills">
                                {
                                    skills.map((skill, index) => (
                                        <li key={index}>{skill}</li>
                                    ))
                                }

                            </ul>


                        </div>
                </div>
            </div>
        </section>
    );
};

export default About;
