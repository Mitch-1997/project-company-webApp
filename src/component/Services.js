import React, {useEffect, useState} from "react";
import "../Css/Service.css";
import Card from "./Combined"


const Services = () => {
  const [services, setServices] = useState([]);
 
  
  
  useEffect(() => {
    // console.log("services")
    fetch(`http://localhost:3000/services`)
    .then((resp) => resp.json())
    .then((data) =>{
      setServices(data);
    });

  }, []); 
 
  return (
    <>
      <h1>Our Services</h1>
      <div className="solution">
        {services.map((service)=>{
          return (<Card service={service}/>)
        })}
      </div>
    </>
  );
};

export default Services;
