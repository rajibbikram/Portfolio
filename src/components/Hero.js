import styles from "../css/Hero.css";

const Hero = () => {
    return (
        <section className="hero" id="hero">
            <div className="content">
                <h1 className="title">Hi, I'm Rajib Bikram Shah</h1>
                <p className="subtitle">A Passionate Frontend Developer & Designer</p>
                <p className="description">
                    I create responsive and interactive web applications using modern technologies like React.js, Next.js, and Tailwind | Bootstrap  CSS.
                </p>
                <a href="#projects" className="button">View My Projects</a>
            </div>

            {/* Grid container for Highlights + Education */}
            <div className="hero-grid">
                <div className="highlights">
                    <div className="highlight">
                        <h2>5+</h2>
                        <p>Projects Completed</p>
                    </div>
                    <div className="highlight">
                        <h2>1+</h2>
                        <p>Years Experience</p>
                    </div>
                    <div className="highlight">
                        <h2>100%</h2>
                        <p>Client Satisfaction</p>
                    </div>
                </div>

                {/* Education */}
                <div className="education">
                    <h2 className="section-title">Education</h2>
                    <p>Bachelor of Computer Applications (BCA) – Running</p>
                    <p>Tribhuvan University, Nepal</p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
