import React from 'react'

const Project = ({ item }) => {

    console.log(item)

    let {name, languagesIcons, source, info, picture } = item

    return (
        <div>
            {name} <br />
            {source}
            
        </div>
    )
}

export default Project;