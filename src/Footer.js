import {HashRouter as Router, Link} from "react-router-dom";

import "./footer.css";
import image from "./map.png";

const Footer = ()=>{
    return(
        <section className="footer">
            <article className="article1">
                <img src={image} />
            </article>
            <article className="article2">
                <Router>
            <ul className="nav_links1">
            <li className="links1">
                <Link to="/" className="link1">Acceuil</Link>
                </li>
                <li className="links1">
                <Link to="/products" className="link1">Produits</Link>
                </li>
                <li className="links1">
                <Link to="/services" className="link1">Services</Link>
                </li>
                <li className="links1">
                <Link to="/demande" className="link1">Demande</Link>
                </li>
                <li className="links1">
                <Link to="/team" className="link1">Equipe</Link>
                </li>
        </ul>
        </Router>
            </article>
        </section>
    );
}


export default Footer;