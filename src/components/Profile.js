import React from 'react'
import Update from './Update.js'

class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            quoteVisible: false
        }
    }

    toggleQuote = () => {
        this.setState({
            quoteVisible: true
        })
    }

    hideQuote = () => {
        this.setState({
            quoteVisible: false
        })
    }

    render(){
    return (
        <div className="profile-container">
        <div className="profile-main">
          <div className="adjuster" onMouseEnter={this.toggleQuote} onMouseLeave={this.hideQuote}>
              {this.state.quoteVisible ? (
            <div className="quote-container">
                  <div className="startquote">
                  <img src="https://img.icons8.com/carbon-copy/50/FC5E13/quote-left.png"/>
                  </div>
                  <div className="quote">
                  <h4>{this.props.profile.quote}</h4>
                  </div>
                  <div className="endquote">
                  <img src="https://img.icons8.com/carbon-copy/50/FC5E13/quote-right.png"/>
                  </div>
            </div>
          ) : null}
              <img className="profile-photo" src={this.props.profile.img} alt={this.props.profile.name}/>
          </div> 
          <div className="wordy">
              <h3 className="name">{this.props.profile.name}</h3>
              <h3 className="hometown">{this.props.profile.hometown}</h3>
          </div>
          </div>
          
          
          <Update deleteProfile={this.props.deleteProfile} getProfile={this.props.getProfile} repopulate={this.props.repopulate} profile={this.props.profile}/>
        </div>
    );
  }
}
  
  export default Profile;