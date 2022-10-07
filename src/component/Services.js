import React, {useEffect, useState} from "react";
import "../Css/Service.css";
import Card from "./Combined"
import { NavLink } from "react-router-dom";
import { SettingsRemote } from "@mui/icons-material";


const Services = () => {
  const [services, setServices] = useState([]);
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  
  
  useEffect(() => {
    // console.log("services")
    fetch(`http://localhost:3000/services`)
    .then((resp) => resp.json())
    .then((data) =>{
      setServices(data);
    });

  }, []); 

  function handleSubmit(e){
    fetch(`http://localhost:3000/services`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title,
        description: description,
        image: image,
      }),
    });
    alert("added successfully")
  }

 
  return (
    <>
      <h1>Our Services</h1>
      <div className="solution">
        {services.map((service) => {
          return <Card service={service} />;
        })}
      </div>
      <form onSubmit={handleSubmit} className="service form">
        <div className="inline fields">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            name="title"
            placeholder="Title"
          />
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            name="description"
            placeholder="Description"
          />
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            type="link"
            name="image"
            placeholder="Image"
          />
        </div>
        <div className="btnBox">
          <button className="btn" type="submit">
            Add product
          </button>
        </div>
      </form>
    </>
  );
};

export default Services;
