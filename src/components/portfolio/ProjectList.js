import React, { useState } from 'react'
import Project from './Project';

const ProjectList = () => {

    const [data, setData] = useState(
        [
    {
      id: 1,
      name: 'Portfolio en html & css',
      languages: ['javascript','css', 'html'],
      languagesIcons: ['fab fa-css3-alt','fab fa-html5'],
      source: 'https://github.com/jeanElossy/Gomycode-checkpoint-hmtl-css-layout.git',
      info: 'Projet de cours sur la realisation d\'un porfolio en html5 & css3 afin de verifier les bases appris avec ces deux langages de description.',
      picture: './media/2.jpeg'
    },
    {
      id: 2,
      name: 'Systeme de panier',
      languages: ['javascript','css', 'html'],
      languagesIcons: ['fab fa-js','fab fa-css3-alt','fab fa-html5'],
      source: 'https://github.com/jeanElossy/gomycode-projet-panier.git',
      info: 'Porjet de cours sur la realisation d\'un systeme de panier en javascript(DOM) pour la verification de nos connaissances sur cette competence.',
      // picture: './media/6.jpeg'
    },
    {
      id: 3,
      name: 'TodoList en react',
      languages: ['javascript','react'],
      languagesIcons: ['fab fa-js','fab fa-bootstrap','fab fa-react'],
      source: 'https://github.com/jeanElossy/gomycode-checkpoint-redux.git',
      info: 'Projet todoList en faisant un CRUD et en utilisant Redux pour la gestion des etats.',
      // picture: './media/5.jpeg'
    },
    {
      id: 4,
      name: 'Portfolio en react',
      languages: ['javascript','react'],
      languagesIcons: ['fab fa-js','fab fa-sass','fab fa-react'],
      source: 'https://github.com/jeanElossy/portfolio.git',
      info: 'Realisation de ce protfolio en react comme mon portfolio de fin de formation.',
      // picture: './media/7.png'
    },
    {
      id: 5,
      name: 'API REST',
      languages: ['javascript','node'],
      languagesIcons: ['fab fa-js', 'fab fa-node'],
      source: 'https://github.com/jeanElossy/create-api.git',
      info: 'Creation d\'une api qui fournira les informations sur tous les profiles dansle meliieur de la tech dont la realisation d\'une plateforme pour la communication afin de permettre aux potentiels clients de mieux choisir leur employes.',
      // picture: './media/3.jpeg'
    },
    {
      id: 6,
      name: 'Projet de fin d\'etude',
      languages: ['javascript','react', 'node'],
      languagesIcons: ['fab fa-js','fab fa-react','fab fa-bootstrap','fab fa-node'],
      source: 'https://github.com/jeanElossy/gomycode-checkpoint-express.git',
      info: 'Realisation d\'un site e-commerce en complet avec la pile MERN.',
      // picture: './media/4.jpeg'
    },
])
    const [radios, setRadio] = useState(
      [
        {
          id: 1,
          value: "javascript"
        },
        {
          id: 2,
          value: "css"
        },
        {
          id: 3,
          value: "react"
        },
        {
          id: 4,
          value: "node"
        }
      ]
    )

    const [selectedRadio, setSelectedRadio] = useState("javascript");

    const handleRadio = (e) => {
      setSelectedRadio(e.target.value);
    }

    return (
        <div className="portfolioContent">

            <ul className="radioDisplay">
              {
                radios.map((radio) => {
                  return (
                    <li key={radio.id}>
                      <input 
                        type="radio" 
                        name="radio" 
                        id={radio.value}
                        checked={radio.value === selectedRadio}
                        value={radio.value}
                        onChange={(e) => handleRadio(e)}
                      />
                      <label htmlFor={radio.value}>
                        {radio.value}
                      </label>
                    </li>
                  )
                })
              }
            </ul>
            
            <div className="projects">
                {
                  data
                    .filter((item) => item.languages.includes(selectedRadio))
                    .map((item) => {
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
