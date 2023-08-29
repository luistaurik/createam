import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../src/components/Header";
import List from "../src/components/List";
import Form from "../src/components/Form";
import Alert from "../src/components/Alert";
import {firstCollabs} from "./collabs";

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [position, setPosition] = useState("");
  const [phone, setPhone] = useState("");
  const [collabs, setCollabs] = useState(firstCollabs);

  setName("");
  setEmail("");
  setAge("");
  setPosition("");
  setPhone("");

  const handleCollabs = ({newCollab}) => {
    setCollabs([...collabs,newCollab])
  }
  
  return (
    <>
      <Header/>
      <List/>
      <Form/>
      <Alert/>
    </>
  )
}

export default App
