import {HashRouter as Router, Switch, Route} from "react-router-dom";

import Header from "./header";
import Hero from "./hero";
import Footer from "./Footer";
import Demande from "./demande";
import Services from "./services";
import Products from "./products";
import Team from "./team";
import Sndh from "./services/sndh";
import Fdm from "./services/fdm";
import Snda from "./services/snda";
import Sndb from "./services/sndb";
import Sndv from "./services/sndv";
import Sndr from "./services/sndr";
import Sndl from "./services/sndl";
import Sndm from "./services/sndm";
import H3d from "./services/h3d";
import Der from "./services/der";
import Desi from "./services/desi";
import Des from "./services/des";


const App = ()=> {
  
  return (
<>

<Header />

<Router basename="/ufchh/#/">
    <Switch>
      <Route path='/' component={Hero} exact />
      <Route path='/products' component={Products} exact />
      <Route path='/services' component={Services} exact />
      <Route path='/demande' component={Demande} exact />
      <Route path='/team' component={Team} exact />
      <Route path='/service-ndh' component={Sndh} exact />
      <Route path='/service-ndv' component={Sndv} exact />
      <Route path='/service-nda' component={Snda} exact />
      <Route path='/service-ndb' component={Sndb} exact />
      <Route path='/service-ndr' component={Sndr} exact />
      <Route path='/service-ndm' component={Sndm} exact />
      <Route path='/service-ndl' component={Sndl} exact />
      <Route path='/service-fdm' component={Fdm} exact />
      <Route path='/service-h3d' component={H3d} exact />
      <Route path='/service-der' component={Der} exact />
      <Route path='/service-desi' component={Desi} exact />
      <Route path='/service-des' component={Des} exact />
    </Switch>
    </Router>

<Footer /> 
</>
  );
}

export default App;
