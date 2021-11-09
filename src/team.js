import "./team.css";

const Team = ()=>{

    return(
       <section className="team">
           <h1 className="c-title">
                Equipe                          
           </h1>
           <div className="members">
               
                    <div className="member">
                        <div className="m-image">
                         <img src="./images/avatar.jpg" alt="Driss OUARDI" />
                        </div>
                        <div className="m-info">
                            <div className="m-name">Driss Ouardi</div>
                                    <div className="m-d">- Licence en Sciences physique, Electronique</div>
                                    <div className="m-d">- diplôme en etudes anglaises</div>
                                    <div className="m-d">- Full Stack Web Developer</div>
                        </div>
                    </div>
                    <div className="member">
                        
                        <div className="m-info m-info1">
                                   <div className="m-name">Imad EL AMRAOUI</div>
                                  <div className="m-d">-Licence en Biologie </div>
                                  <div className="m-d">-Licence en Geographie </div>
                                  <div className="m-d">-Master en Amenagement du Territoire </div>
                        </div>
                        <div className="m-image">
                         <img src="./images/avatar.jpg" alt="Imad EL AMRAOUI" />
                        </div>
                    </div>
                    
                    <div className="member">
                        <div className="m-image">
                         <img src="./images/avatar.jpg" alt="" />
                        </div>
                        <div className="m-info">
                            <div className="m-name"></div>
                            <div className="m-d">- </div>
                            <div className="m-d">- </div>
                            <div className="m-d">- </div>
                        </div>
                    </div>
           </div>
       </section>
        
    );
}

export default Team;