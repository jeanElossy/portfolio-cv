import React, { useState } from 'react'
import Project from './Project';

const ProjectList = () => {

    const [data, setData] = useState(
        [
    {
      id: 1,
      name: 'ipsum.com',
      languages: ['javascript','css'],
      languagesIcons: ['fab fa-js','fab fa-css3-alt'],
      source: 'http://www.github.com',
      info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium, veritatis debitis odio eveniet quos incidunt eaque nemo eius perferendis consequatur? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium.',
      picture: './media/project1.JPG'
    },
    {
      id: 2,
      name: 'lorem.fr',
      languages: ['javascript','react'],
      languagesIcons: ['fab fa-js','fab fa-react'],
      source: 'http://www.github.com',
      info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium, veritatis debitis odio eveniet quos incidunt eaque nemo eius perferendis consequatur? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium.',
      picture: './media/project2.JPG'
    },
    {
      id: 3,
      name: 'dolorset.fr',
      languages: ['javascript','php','css'],
      languagesIcons: ['fab fa-js','fab fa-php','fab fa-css3-alt'],
      source: 'http://www.github.com',
      info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium, veritatis debitis odio eveniet quos incidunt eaque nemo eius perferendis consequatur? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium.',
      picture: './media/project3.JPG'
    },
    {
      id: 4,
      name: 'laboriosam.fr',
      languages: ['javascript','php','react'],
      languagesIcons: ['fab fa-js','fab fa-php','fab fa-react'],
      source: 'http://www.github.com',
      info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium, veritatis debitis odio eveniet quos incidunt eaque nemo eius perferendis consequatur? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium.',
      picture: './media/project4.JPG'
    },
    {
      id: 5,
      name: 'repudiante.com',
      languages: ['javascript','css'],
      languagesIcons: ['fab fa-js', 'fab fa-css3-alt'],
      source: 'http://www.github.com',
      info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium, veritatis debitis odio eveniet quos incidunt eaque nemo eius perferendis consequatur? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium.',
      picture: './media/project5.JPG'
    },
    {
      id: 6,
      name: 'test.io',
      languages: ['javascript','react', 'css'],
      languagesIcons: ['fab fa-js','fab fa-react','fab fa-css3-alt'],
      source: 'http://www.github.com',
      info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium, veritatis debitis odio eveniet quos incidunt eaque nemo eius perferendis consequatur? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium.',
      picture: './media/project6.JPG'
    },
])

console.log(data);

    return (
        <div className="portfolioContent">

            <ul className="radioDisplay">
            
            </ul>
            
            <div className="projects">
                {
                    data.map((item) => {
                        return (
                            <Project 
                                item={item}
                                key={item.id}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProjectList
