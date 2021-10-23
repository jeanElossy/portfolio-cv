import React, { useState } from 'react'

const Project = ({ item }) => {

    let {name, languagesIcons, source, info, picture } = item;
    const [show, setShow] = useState(false);


    return (
        <div className="project">

            <div className="icons">
                {
                    languagesIcons.map((icon) => 
                        <i className={icon} key={icon}></i>
                    )
                }
            </div>
            <h5 className="mt-2">{name}</h5>
            <img 
                src={picture} 
                alt=""
                onClick={(e) => setShow(!show)}
                // className="img-responsive"
            />

            {
                show && (
                    <div className="showInfos">
                        <div className="infosContent">
                            <div className="head">
                                <h2>{name}</h2>
                                <div className="sourceCode">
                                    <a 
                                        href={source} 
                                        rel="noopener noreferrer" 
                                        className="button" 
                                        target="_blank"
                                    >
                                        code source
                                    </a>
                                </div>
                            </div>

                            <p className="text">{info}</p>

                            <div 
                                className="button return"
                                onClick={(e) => setShow(!show)}
                            >
                                Retourner sur la page
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default Project;