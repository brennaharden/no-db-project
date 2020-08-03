import React from 'react';
import axios from 'axios';
import Profile from './Profile.js'
import Form from './Form.js'

class Groups extends React.Component{
    constructor(){
        super();
        this.state = {
            profiles:[],
            profile: {},
            id: 0,
            name: "",
            hometown: "",
            faculty: true,
            img: "",
            quote: "",
            editing: false,
            button: "SUBMIT"
        }

        this.nameHandler = this.nameHandler.bind(this)
        this.hometownHandler = this.hometownHandler.bind(this)
        this.imageHandler = this.imageHandler.bind(this)
        this.quoteHandler = this.quoteHandler.bind(this)
        this.facultyHandler = this.facultyHandler.bind(this)
        this.repopulate = this.repopulate.bind(this)
        this.deleteProfile = this.deleteProfile.bind(this)
    }

    componentDidMount(){
        this.getProfiles();
    }

    getProfiles = () => {
        axios.get('/api/profiles')
        .then(res => {
            this.setState({
                profiles: res.data
            })
        })
        .catch(err => console.log(err))
    }

    postProfile = (name, hometown, faculty, img, quote) => {

        axios.post('/api/profile', {name, hometown, faculty, img, quote})
        .then(res => {
            this.setState({
                profiles: res.data,
                name: "",
                hometown: "",
                faculty: true,
                img: "",
                quote: ""
            })
        })
        .catch(err => console.log(err))
    }

    deleteProfile = (id) => {
        axios.delete(`/api/profile/delete/${id}`)
        .then(res => {
            this.setState({
                profiles: res.data
            })
        })
        .catch(err => console.log(err))
    }

    getProfile = (id) => {
        axios.get(`/api/profile-by-id?id=${id}`)
        .then(res => {
            this.setState({
                profile: res.data
            })
        })
    } 

    updateProfile = (id, name, hometown, faculty, img, quote) => {
        axios.put(`/api/profile/edit/${id}`, {name, hometown, faculty, img, quote})
        .then(res => {
            this.setState({
                profiles: res.data,
                editing: false,
                name: "",
                hometown: "",
                faculty: true,
                img: "",
                quote: "",
                button: "SUBMIT"
            })
        })
        .catch(err => console.log(err))
    }

    repopulate = (profile) => {
        this.setState({
            id: profile.id,
            name: profile.name,
            hometown: profile.hometown,
            faculty: profile.faculty,
            img: profile.img,
            quote: profile.quote,
            editing: true,
            button: "UPDATE"
        })
    }

    nameHandler = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    hometownHandler = (e) => {
        this.setState({
            hometown: e.target.value
        })
    }

    imageHandler = (e) => {
        this.setState({
            img: e.target.value
        })
    }    

    quoteHandler = (e) => {
        this.setState({
            quote: e.target.value
        })
    }

    facultyHandler = (e) => {
        this.setState({ faculty: e.target.value === "true" ? true : false })
    }

    render(){
        
        const actions = {
            repopulate: this.repopulate,
            deleteProfile: this.deleteProfile,
            getProfile: this.getProfile
        }

        const facultyMap = this.state.profiles
        .filter(profile => profile.faculty)
        .map(profile => {
            return <Profile {...{...actions, key: profile.id, profile}} />
        })

        const studentMap = this.state.profiles
        .filter(profile => !profile.faculty)
        .map(profile => {
            return <Profile {...{...actions, key: profile.id, profile}}/>
        })
        

        //profiles map here
        const {id, name, hometown, faculty, img, quote, editing, button} = this.state

        return (
            
            <div className="main-section">
                <div className="group-name">
                <h2 className="grouping">FACULTY</h2>
                </div>
                <div className="profile-group">
                    {facultyMap}
                </div>
                <div className="group-name">
                <h2 className="grouping">STUDENTS</h2>
                </div>
                <div className="profile-group">
                    {studentMap}
                </div>
                <div className="form-container">                
                <Form  
                id={id}
                name={name}
                hometown={hometown}
                faculty={faculty}
                img={img}
                quote={quote}
                editing={editing}
                button={button}
                updateProfile={this.updateProfile}
                postProfile={this.postProfile}
                nameHandler={this.nameHandler}
                hometownHandler={this.hometownHandler}
                imageHandler={this.imageHandler}
                quoteHandler={this.quoteHandler}
                facultyHandler={this.facultyHandler}/>
                </div>
            </div>
        )
    }
}

export default Groups;