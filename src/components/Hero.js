import styles from "../css/Hero.css";

const Hero = () => {
    return (
        <section className="hero" id="hero">
            <div className="content">
                <h1 className="title">Hi, I'm Rajib Bikram Shah</h1>
                <p className="subtitle">A Passionate Frontend Developer & Designer</p>
                <p className="description">
                    I create responsive and interactive web applications using modern technologies like React.js, Next.js, and Tailwind CSS.
                </p>
                <a href="#projects" className="button">View My Projects</a>
            </div>
        </section>

    );
};

export default Hero;
