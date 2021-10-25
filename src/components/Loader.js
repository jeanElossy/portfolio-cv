import React from 'react';
import ReactLoading from 'react-loading';

const Loader = () => (
    <div className="loader">
        <ReactLoading 
        type="bars"
        color="#422c85" 
        height={30}
        width={100}
        />
    </div>

);

export default Loader;