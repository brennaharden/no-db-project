import React from 'react'

function Update (props) {

    return (
        <div className="update-container">
            <img className="update" alt="Delete" src="https://img.icons8.com/ios-glyphs/30/2aabe2/delete-sign.png" onClick={() => {props.repopulate(props.profile)}}/>
            <img className="update" alt="Edit" src="https://img.icons8.com/metro/26/2aabe2/edit.png" onClick={() => props.deleteProfile(props.profile.id)}/>
        </div>
        )
}

export default Update;