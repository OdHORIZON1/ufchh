import {HashRouter as Router, Link} from "react-router-dom";
import "./hero.css";

const Hero =()=>{

return(
   <section className="hero">
       <h1 className="heroh1">ULTRA FAST CLEAN</h1>
        <h2 className="heroh2">Le Meilleur Service D'Hygiene Au Maroc</h2>
        <Router>
        <Link to="/demande" className="herobutton">
            ORDER NOW
        </Link>
        </Router>

    <div className="heroMask"></div>
   </section>
);

}

export default Hero;