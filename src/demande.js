import React, { useState } from "react";
import "./demande.css";
import data from "./infodata";
import data1 from "./servicesdata";

const Demande = ()=>{

const [list, setList] = useState(data);

    return(
       
<>


    <section className="demande">
        <div className="demandemask"></div>
    <article className="demandearticle1">

   {list.map((item)=>{
            const {id, title, icon, info} = item;
            return(

            

        <div key={id} className="demande1">
            <div className="spanicone">
                <i class={icon}></i>
            </div>
            <div className="spandata">
                <span className="spantitle">
                    {title}
                </span>
                <span className="spaninfo">
                    {info}
                </span>
            </div>
            </div>
       
        
   
    );
   })}
     </article>
    <article className="demandearticle2">

    <form method="post" action="" className="demandeform">
        <span className="name">
            <input placeholder="Prenom" type="text" className="fname" />
            <input placeholder="Nom" type="text" className="lname" />
        </span>
         <span className="email">
            <input placeholder="Email" type="text" className="emaill" />
        </span>
         <span className="phone">
            <input placeholder="Tel (+212)" type="text" className="phonee" />
        </span>
         <span className="region">
            <input placeholder="Region" type="text" className="regionn" />
        </span>
         <span className="services">

         
         <label  className="label">  
         
                   
        <input type="text" placeholder="Services" id="servicesinput" list="services1"  />
       
        <datalist  id="services1" >  
        {data1.map((item2)=>{
                const {id, name} = item2;

                return(
     
        <option className="option" key={id} value={name} /> 
     
        );
        })}   
        </datalist>
       
        </label>
             
        </span>
         <span id="message" className="message">
           <textarea placeholder="Message" className="messagee" cols="50" rows="10">
            
           </textarea>
        </span>
    </form>


    </article>

    </section>
</>

    );

}


export default Demande;