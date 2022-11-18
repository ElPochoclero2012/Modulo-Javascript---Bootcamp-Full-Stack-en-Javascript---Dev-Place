import React from 'react'

const Contact = () => {
  return (
    <fieldset style={fieldset}>
    <legend style={legend}>Contact</legend>
    <div>
      <label for="contact-email-address" />
      <input
        id="contact-email-address"
        style={inputField}
        type="text"
        name="email"
        placeholder="Email"
      />
    </div>
    </fieldset>
  )
}

const fieldset = {
    textAlign: "initial",
    marginBottom: "20px",
    paddingBottom: "15px"
};
  
const legend = {
    fontSize: "20px",
    textAlign: "initial"
  };
  
const inputField = {
    boxSizing: "border-box",
    fontSize: "14px",
    letterSpacing: "1px",
    padding: "12px 20px",
    width: "100%"
};

export default Contact;