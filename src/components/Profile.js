import React from 'react'
import Update from './Update.js'

class Profile extends React.Component {
    render(){
    return (
      <div className="profile-container">
        <div className="wordy"> 
            <img className="profile-photo" src={this.props.img} alt={this.props.name}/>
            <h3 className="info">{this.props.name}</h3>
            <h3 className="info">{this.props.hometown}</h3>
            <div className="quote-container"></div>
        </div>
        <Update deleteProfile={this.props.deleteProfile} getProfile={this.props.getProfile} repopulate={this.props.repopulate} profile={this.props.profile}/>
      </div>
    );
  }
}
  
  export default Profile;