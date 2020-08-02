import React from 'react'

function Form (props) {
            const {id, name, hometown, faculty, img, quote, editing} = props
        return(
            <div className="form-container">
                <form className="form-style" onSubmit={(e) => {
                    e.preventDefault()
                    if (editing) {
                        props.updateProfile(id, name, hometown, faculty, img, quote)
                    }
                    else {props.postProfile(name, hometown, faculty, img, quote)}}}>
                    <select
                    className="dropdown"
                    name="faculty"
                    value={props.faculty}
                    onChange={(e) => props.facultyHandler(e)}>
                        <option value={true}>Faculty</option>
                        <option value={false}>Student</option>
                    </select>
                    <input 
                    name="name" 
                    value={props.name}
                    type="text"
                    placeholder=" Name"
                    onChange={(e) => props.nameHandler(e)}></input>
                    <input
                    name="hometown"
                    value={props.hometown}
                    type="text"
                    placeholder=" City, State"
                    onChange={(e) => props.hometownHandler(e)}></input>
                    <input
                    name="img"
                    value={props.img}
                    type="text"
                    placeholder=" Image URL"
                    onChange={(e) => props.imageHandler(e)}></input>
                    <input
                    name="quote"
                    value={props.quote}
                    type="text"
                    placeholder=" Quote"
                    onChange={(e) => props.quoteHandler(e)}></input>
                    <button className="submit" type="submit">SUBMIT</button>
                    {/* <img alt="Dev Mountain" src="https://lms.devmountain.com/accounts/2/files/8368/download?verifier=ofKWBn453ylw0WUzVww241M2bpJcjrtZNMRCpKKp"/> */}
                </form>
            </div>
        )
}

export default Form;