import React from "react"

export default function Form() {
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
        isFriendly: true,
        employment: "",
        favColor: ""
    })

    // console.log(formData)

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

    async function handleSubmit(event){
        event.preventDefault()
        console.log(event.target)
        console.log("Local Form Data:")
        console.log(formData)

        console.log('Submitting form...')
        try {
            console.log("Server POST Response:")
            const response = await fetch("https://kylemperkins.com/sandbox/post-json", {
                method: "POST",
                body: new FormData(document.querySelector('form'))
            });
            console.log(await response.json())
        } catch (e) {
            console.error(e);
        }

    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
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
            <br />
            <br />
            
            <fieldset>
                <legend>Current employment status</legend>
                
                <input 
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={formData.employment === "unemployed"}
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part time"
                    checked={formData.employment === "part time"}
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full time"
                    checked={formData.employment === "full time"}
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
            </fieldset>
            <br/>
            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select 
                id="favColor"
                value={formData.favColor}
                onChange={handleChange}
                name="favColor"
            >
                <option value="">Choose...</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            {/* <input type="submit" value="Send"/> 
            HTML5 allows for buttons inside forms to submit by default*/}
            <button>Send</button>
        </form>
        <small><i>Check the <code>Developer Toolbar &gt; Console</code> for output</i></small>
        </div>
    )
}
