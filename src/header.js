import {HashRouter as Router, Link} from "react-router-dom";

import image from "./logo.png";
import "./header.css";
import Hiddenservices from "./hiddenservices";
import { useEffect, useState } from "react";
import dataa from "./servicesdata";


const Header=()=>{


    const [show, setShow] = useState(false);
    const [showw, setShoww] = useState(false);
    const [showww, setShowww] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [prop, setProp] = useState(false);
    const [nav, setNav] = useState("nav2");    

  
    const handleScroll = ()=>{
        const offSet = window.scrollY;
        
        if(offSet > 80){
           
            setScrolled(true);
            setNav("nav1");
        }
        else{
            setScrolled(false);
            setNav("nav2");
        }
    
    }


    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
    });

    const handleAnimate = (scrolled)=>{
        if(scrolled){
             
            return 'scroll';
        }
        else{
            return 'noScroll';
        }
    }

    const handleMouse=()=>{
        setShow(!show);
        console.log("in");
    }

    const handleMouseOut=()=>{
        setShow(false);
        console.log("out");
    }

    const handleLClick=()=>{
        setShoww(!showw);
    }

    const handleHamClick=()=>{
        setShowww(!showww);
        setProp(!prop);
    }
    
    const handleAnim = (prop)=>{
        if(!prop){
            return "close";
        }
        else{
            return "open";
        }
    }


    return(
        
        <header className={`header header-${handleAnimate(scrolled)}`}>

        
       
        

        <div className="logo">
            <img src={image} />
        </div>

        <div className="navbar">
            <Router>
        <ul className="nav_links">
            <li className="links">
                <Link  to="/" className="link">Acceuil</Link>
                </li>
                <li className="links">
                <Link to="/products" href="" className="link">Produits</Link>
                </li>
                <li className="links">
                 
                <Link to="/services" href="" className="link">Services</Link>
                <i onMouseEnter={handleMouse}  id="down" class="fas fa-angle-down"></i> 
                </li>
                <li className="links">
                <Link to="/demande" className="link">Demande</Link>
                </li>
                <li className="links">
                <Link to="/team" className="link">Equipe</Link>
                </li>
             
        </ul>
        </Router>

        </div>

        <div onClick={handleHamClick} className="hamburger">
            <span className={`line line1-${handleAnim(prop)}`}></span>
            <span className={`line line2-${handleAnim(prop)}`}></span>
            <span className={`line line3-${handleAnim(prop)}`}></span>
        </div>

        {showww && <div className="navbarhidden">

<Router>
<ul className="nav_linksh">
    <li className="linksh">
        <Link onClick={handleHamClick} to="/" className="linkh">Acceuil</Link>
        </li>
        <li className="linksh">
        <Link onClick={handleHamClick} to="/products" className="linkh">Produits</Link>
        </li>
        <li id="servli" className="linksh">
         
                 <span className="gath"><Link onClick={handleHamClick} to="/services" className="linkh"> Services </Link> &nbsp;&nbsp; <i onClick={handleLClick} id="down" class="fas fa-angle-down"></i></span> 
        
        
                
       {showw && <ul className="nav-linkshidden" >
       {dataa.map((lin)=>{
            const {id, name, lien} = lin;
            return(
        <li key={id} className="lihidden"><Link onClick={handleHamClick} className="linkhidden" to={lien}>{name}</Link></li>
       
                
            );
        })}

        </ul>}
        </li>
        <li className="linksh">
        <Link onClick={handleHamClick} to="/demande" className="linkh">Demande</Link>
        </li>
        <li className="linksh">
        <Link onClick={handleHamClick} to="/team" className="linkh">Equipe</Link>
        </li>
      
</ul>
</Router>
</div>}

        <Hiddenservices show1={show} />

        </header>

    );
}

export default Header;