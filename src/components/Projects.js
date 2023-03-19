import React, { useEffect, useState } from "react";
import './../styles/css/main.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const sliderSettings = {
    className: "center",
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
}

function Projects() {
    
    const [repo, setRepo] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/apiproyectos/list')
        .then(response => response.json())
    
        .then(repo => 
            setRepo(repo) )// Establece el valor de 'repo' primero
             // Puedes dejar esto aquí si quieres, pero no es necesari)
        .catch(error => console.error(error));
        
    }, []);
    
    return(
        <section className="section_project" id="projects">
            <h2>Projects</h2>
            
            <Slider {...sliderSettings} className='sliderProjects'>
            {repo.map(int => {
                return(
                    <div key={int.id}>
                        <a href={int.github}><img alt='bcskbvksf'src={int.Imagen} className='projectos'></img></a>
                        <h3>{int.Nombre}</h3>
                        <p>{int.Descripcion}</p> 
                    </div>
                )
            })} 
            </Slider>
        </section>
    );
    
}

export default Projects;



























// const urlApi = 'http://127.0.0.1:8000/apiproject/list'

// export const getName = () => {
//     fetch(`$(urlApi)`)
//     .then((res) => res.)
// }