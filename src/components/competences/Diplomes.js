import React from 'react'

const Diplomes = () => {
    return (
        <div className="diplomes">

            <h1 className="h4">Formation en auto-Didacte developpeur web full-stack</h1>  
            
            <div className="d-flex justify-content-between element--diplome">
                <div className="d-flex">
                    <div className="form-1">
                        <h3 className="h6">2018-2019</h3>
                        <div>
                            <ul>
                                <li>
                                    <i className="fas fa-check-square">
                                        Certificat OpenClasrooms (Html5 & Css3 & JavaScript)
                                    </i>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div className="title">
                            <h3 className="h6">2019-2020</h3>
                        </div>
                        <ul>
                            <li>
                                <i className="fas fa-check-square">
                                    Certificat OpenClasrooms (React.js & Node.js & Express.js)
                                </i>
                            </li>
                        </ul>
                    </div>
                </div> 
        
                <div className="">
                    <h3 className="h6">2021</h3>
                    <ul>
                        <li>
                            <i className="fas fa-check-square">
                                Actuellement en formation a l'ecole GOMYCODE-IC pour le titre de developpeur full-sack js react/node (MERN).
                            </i>
                        </li>
                        <li>
                            <i className="fas fa-check-square">
                                Certificat OpenClasrooms (MongoDB & Php & SQL)
                            </i>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Diplomes;

