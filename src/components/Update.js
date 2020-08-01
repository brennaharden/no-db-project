import React from 'react'

function Update (props) {

    return (
        <div className="update-container">
            <button className="update" onClick={() => props.deleteProfile(props.profile.id)}>Delete</button>
            <button className="update" onClick={() => {
                props.repopulate(props.profile)
            }}>Edit</button>
        </div>
        )
}

export default Update;