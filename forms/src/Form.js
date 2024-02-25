import React from "react"

export default function Form() {
    const [formdata, setFormData, setFirstName] = React.useState({
        firstName: "",
        lastName: "" 
    })

    function handleChange(event){
        // setFormData(event.target.value);
        console.log(event.target.name)
    }

    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
            />
        </form>
    )
}
