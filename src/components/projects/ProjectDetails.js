import React from 'react'

const ProjectDetails = (props) => {
    console.log(props)
    const id = props.match.params.id;
    return (

        <div className=" container section project-details">
            <div className="card z depth-0">
                <div className="card-content">
                    <span className="card-title">Project title - {id}</span>
                    <p>Rodrigo Santos Nogueira</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>Posted by the next ninja</div>
                    <div>Curitiba, 15 de maio de 2019</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails