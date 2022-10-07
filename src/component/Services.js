import React, {useEffect, useState} from "react";
import "../Css/Service.css";
import Card from "./Combined"


const Services = () => {
  const [services, setServices] = useState([])

  
  useEffect(() => {
    fetch(`http://localhost:3000/services`)
    .then((resp) => resp.json())
    .then((data) =>(data.services))

  }, []) 
  console.log(services);
  return (
    <>
      <h1>Our Services</h1>
      <div className="solution">
        <Card />
      </div>
    </>
  );
};

export default Services;
