import React from "react"

import css from "./App.css"

export default function App() {
  const [formData, setformData] = React.useState({
    email: "",
    password: "",
    passwordConfirm: "",
    newsletterBool: false
  })

  console.log(formData) // <-- this will run twice, but it will show the CURRENT information

  function handleChange(e){
    // const {email, password, passwordConfirm, newsletterBool} = e.target;
    const {name, value, type, checked} = e.target
    // this is pulled from the ELEMENT, not the formData
    setformData(prevData => ({
        ...prevData,
        [name]: type === "checkbox" ? checked : value
      }))

      // console.log(formData) // <-- This will show the OLD information
  }

  function handleSubmit(e){
    e.preventDefault();
    // console.log(e.target)

    // (formData.password == formData.passwordConfirm) ?
    //   console.log("Successfully signed up") :
    //   console.log("Passwords to not match");
    //   // IDEA: Possible implementations -@kyle at 2/26/2024, 11:21:00 PM
    //   // Should have boolean/flag determine if success or not

    if (formData.password === formData.passwordConfirm){
      console.log("Successfully signed up");
    } else {
      console.log("Passwords do not match");
      return // end now
    }

    if (formData.newsletterBool){
      console.log("Thanks for signing up for our newsletter!");
    }
  }
    
    /**
     * Challenge: Connect the form to local state
     * 
     * 1. Create a state object to store the 4 values we need to save.
     * 2. Create a single handleChange function that can
     *    manage the state of all the inputs and set it up
     *    correctly
     * 3. When the user clicks "Sign up", check if the 
     *    password & confirmation match each other. If
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords to not match" to the console.
     * 4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    onChange={handleChange}
                    name="password"
                    value={formData.password}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    onChange={handleChange}
                    name="passwordConfirm"
                    value={formData.passwordConfirm}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        onChange={handleChange}
                        name="newsletterBool"
                        checked={formData.newsletterBool}
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}
