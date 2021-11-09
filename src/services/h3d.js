import {HashRouter as Router, Link} from "react-router-dom";
import "./h3d.css";

const H3d=()=>{
    return(
        <Router>
        <section className="h3d">
            
            <div className="des">
                <h2 className="destitle">Desinfection</h2>
                <Link to="/service-des">
                <img src="./images/infect.jpg"/>
            </Link>
            </div>

            <div className="der">
            <h2 className="destitle">Diratisation</h2>
            <Link to="/service-der">
            <img src="./images/bug.png" />
            </Link>
            </div>
           
            
            <div className="desi">
            <h2 className="destitle">Desinsectisation</h2>
                 <Link to="/service/desi">
            <img src="./images/insect.jpg"/>
            </Link>
            </div>
        </section>
        </Router>
    );
}


export default H3d;