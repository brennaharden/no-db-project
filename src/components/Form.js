import React from 'react'

function Form (props) {
            const {id, name, hometown, faculty, img, quote, editing} = props
        return(
            <div className="form-container">
                <form onSubmit={(e) => {
                    e.preventDefault()
                    if (editing) {
                        props.updateProfile(id, name, hometown, faculty, img, quote)
                    }
                    else {props.postProfile(name, hometown, faculty, img, quote)}}}>
                    <select
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
                    <button type="submit">SUBMIT</button>
                    
                </form>
            </div>
        )
}

export default Form;