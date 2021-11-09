import React, { useState } from "react";
import "./hiddenservices.css";
import datt from "./servicesdata";
import {HashRouter as Router, Link} from "react-router-dom";

const Hiddenservices=({show1})=>{

    const [show2, setShow2] = useState(true);
  

    const handleClick=()=>{
        setShow2(!show2);
    }
    
    const handleSLClick=()=>{
        setShow2(!show2);
    }

    return(
<>
         {((show1 && show2) || (!show1 && !show2)) && <section className="hiddenservices" >
      <i onClick={handleClick} id="close" class="fas fa-times"></i>
               {datt.map((serv)=>{
            const {id, name, lien, info, image} = serv;
        return(

            <>

        <div key={id} className="servicee">

            <div className="servimage">
                
                <img src={image} />
                  
            </div>
            <Router>
            <div id="sertitle" >
                <Link onClick={handleSLClick} to={lien}>
                {name}
                </Link>
                
            </div>
            </Router>
        </div>
 
      </>
        );
})}
               
        </section>}

</>
    );
}

export default Hiddenservices;