import React, { Component } from 'react';
import "./services.css";
import image1 from "./images/villa.jpg";
import image2 from "./images/hotel.jpg";
import image3 from "./images/locaux.jpg";
import image4 from "./images/bureau.jpg";
import image5 from "./images/restau.jpg";
import image6 from "./images/fdm.jpg";
import image7 from "./images/maison.jpg";
import image8 from "./images/appart.jpg";
import dat from "./servicesdata";

const Services=()=>{


    return(


        <section className="servicess">
               
        {dat.map((serv)=>{
            const {id, name, lien,lien1, info, image} = serv;
        return(
       
        <div key={id} className="servicee">
           
            
            <div className="servimage">
                
                <img src={image} />
                  
            </div>
            <div className="servtitle">
                <a href={lien1}>
                {name}
                </a>
                
            </div>
            

        </div>
      
        );
})}

         </section>

    );

}


export default Services;