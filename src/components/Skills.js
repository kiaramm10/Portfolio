import './../styles/css/main.css';

const kiaraSkills = [
  {
    image:'../images/html.png',
    name: 'HTML'
  },
  {
    image:'../images/css.png',
    name: 'CSS'
  },
  {
    image:'../images/javascript.png',
    name: 'JavaScript'
  },
  {
    image:'../images/react.png',
    name: 'React'
  },
  {
    image:'../images/symfony.png',
    name: 'Symfony'
  },
  {
    image:'../images/php.png',
    name: 'Php'
  },
  {
    image:'../images/bootstrap.png',
    name: 'Bootstrap'
  },
  {
    image:'../images/sass.png',
    name: 'Sass'
  },
  {
    image:'../images/git.png',
    name: 'Git'
  },
  {
    image:'../images/figma.png',
    name: 'Figma'
  },

]

function Skills() {
  return (
    <section className='section_skills' id='skills'>
      <h2>Skills</h2>
      <div className='fondo_skills'>
      {kiaraSkills.map((kiaraSkills, index) => (
                        <div key={index} className='habilidades'>               
                            <img className="iconos" alt='dfnkdf' src={kiaraSkills.image}></img>
                            <h3>{kiaraSkills.name}</h3>
                        </div>
                ))}
      </div>
    </section>
  )
}

export default Skills