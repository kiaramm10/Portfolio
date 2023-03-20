import './../styles/css/main.css';

function AboutMe() {
  return (
    <section id='aboutme' className='sectionAboutMe'>
            <div className="container-aboutme">
                    <div className="description">
                       <h2>About Me</h2>
                        <p> I am a very friendly person and I feel comfortable working in a team. I enjoy learning new things, I am always looking to grow and improve both personally and professionally. I have front-end skills, I feel very confident working with web technologies such as HTML, CSS and JavaScript. As for the back-end part, I also defend myself and I am in the process of learning to improve. I adapt easily to changes and new situations. I am currently doing a full-stack bootcamp, to acquire new skills and become a full-fledged developer. </p>
                    </div>
                    <div className="img_aboutme">
                        <img src='./images/fotomia.svg' alt='Foto Kiara'></img>
                    </div>
            </div>
        </section>
  )
}

export default AboutMe