import Image from "next/image";
import Profile from "../image/profile.jpg";
import styles from "../css/About.css";

const About = () => {
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
                        
                         Passionate frontend developer specializing in React.js and Next.js. I love building modern, responsive, and user-friendly web applications.
                    </p>
                    <h3 className="subtitle">Skills</h3>
                    <ul className="skills">
                        <li>React.js</li>
                        <li>Next.js</li>
                        <li>JavaScript (ES6+)</li>
                        <li>HTML5 & CSS3</li>
                        <li>Tailwind CSS / SCSS</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;
