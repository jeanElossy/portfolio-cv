import React from 'react'

const Diplomes = () => {
    return (
        <div className="diplomes">

            <h1 className="h4">Formation en autodidacte developpeur web full-stack</h1>  
            
            <div className="d-flex justify-content-between element--diplome">
                <div className="d-flex">
                    <div className="form-1">
                        <h3 className="h6 mt-md-1">2018-2019</h3>
                        <div>
                            <span>
                                Certification OpenClasrooms (Html5 & Css3 & JavaScript)
                            </span>
                        </div>
                    </div>

                    <div>
                        <div className="title mt-md-1">
                            <h3 className="h6">2019-2020</h3>
                        </div>
                        <div>
                            <span>
                                Certificat OpenClasrooms (React.js & Node.js & Express.js)
                            </span>
                        </div>
                    </div>
                </div> 
        
                <div className="mt-md-1">
                    <h3 className="h6">2021</h3>
                    <div>
                        <span>
                            Developpeur full stack javascript junior react/node (MERN).
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Diplomes;

