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
        </div>
        <div className="quote-container">
                <div className="startquote">
                <img src="https://img.icons8.com/carbon-copy/50/FC5E13/quote-left.png"/>
                </div>
                <div className="quote">
                <h4>{this.props.quote}</h4>
                </div>
                <div className="endquote">
                <img src="https://img.icons8.com/carbon-copy/50/FC5E13/quote-right.png"/>
                </div>
        </div>
        <Update deleteProfile={this.props.deleteProfile} getProfile={this.props.getProfile} repopulate={this.props.repopulate} profile={this.props.profile}/>
      </div>
    );
  }
}
  
  export default Profile;