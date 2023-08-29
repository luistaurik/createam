import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/Form.css";

function Form(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [position, setPosition] = useState("");
    const [phone, setPhone] = useState("");

    const [newCollab, setNewCollab] = useState("");
    const [error, setError] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [ageError, setAgeError] = useState("");
    const [positionError, setPositionError] = useState("");
    const [phoneError, setPhoneError] = useState("");

    function initialError() {
        setNameError("");
        setEmailError("");
        setAgeError("");
        setPositionError("");
        setPhoneError("");
        setError("");
        setNewCollab("");
    }
    const sendForm = (e) => {
        e.preventDefault();
        
        if (setNameError !== "" || setEmailError !== "" || setAgeError !== "" || setPositionError !== "" || setPhoneError !== "" ) {
            setError("One or more of one in the inputs is not ok :(");
        } else {
            setNewCollab({name: name, email: email, age: age, position: position, phone: phone});
            setName("");
            setEmail("");
            setAge("");
            setPosition("");
            setPhone("");
        }
      }
    
      const takeInput = (e) => {
        setName(e.target.value);
        setEmail(e.target.value);
        setAge(e.target.value);
        setPosition(e.target.value);
        setPhone(e.target.value);

        if (name === "") {
            setNameError("You have to add a name");
        }
        if (email === "") {
            setEmailError("You have to add an email");
        }
        if (age === "") {
            setAgeError("You have to add an age");
        } else if (age <18) {
            setAgeError("This person doesn't have the minimun age");
        }
        if (position === "") {
            setPositionError("You have to add a role of position");
        }
        if (phone === "" || isNaN(phone) || phone < 900000000 || phone > 999999999) {
            setPhoneError("A correct phone number is mandatory");
        }
      }

    return (
        <>
            <form onLoad={initialError} onSubmit={sendForm}>
                <div class="my-2 input">
                    <input type="text" class="form-control" id="name" value={name} placeholder="Name & last name" onChange={takeInput}/>
                    <h5>{nameError}</h5>
                </div>
                <div class="my-2 input">
                    <input type="text" class="form-control" id="email" value={email} placeholder="Email" onChange={takeInput}/>
                    <h5>{emailError}</h5>
                </div>
                <div class="my-2 input">
                    <input type="text" class="form-control" id="age" value={age} placeholder="Age" onChange={takeInput}/>
                    <h5>{ageError}</h5>
                </div>
                <div class="my-2 input">
                    <input type="text" class="form-control" id="position" value={position} placeholder="Position" onChange={takeInput}/>
                    <h5>{position}</h5>
                </div>
                <div class="my-2 input">
                    <input type="text" class="form-control" id="phone" value={phone} placeholder="Phone" onChange={takeInput}/>
                    <h5>{phone}</h5>
                </div>
                <button type="submit" class="btn btn-primary input">Submit</button>
            </form>
        </>
    )
};

export default Form;