import React from "react"

export default function Form() {
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
        isFriendly: true 
    })

    console.log(formData)

    function handleChange(event){
        // console.log(event.target.name)
        const {name, value, type, checked} = event.target
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: type === "checkbox" ? checked : value
            }
        });
    }

    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            { /* Yes, textarea IS self-closing! */}
            <textarea
                placeholder="Comments"
                onChange={handleChange}
                name="comments" 
                value={formData.comments}
            />
            <input
                type="checkbox"
                id="isFriendly"
                name="isFriendly"
                onChange={handleChange}
                checked={formData.isFriendly}
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
        </form>
    )
}
