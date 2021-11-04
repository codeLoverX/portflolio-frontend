import React from "react";
import "./styles.css";
import Ridwan from '../../../assets/images/ridwan.png';
import FullStack from '../../../assets/images/fullstack.png';

const PageIntro = ({ reff }) => {
  return (
    <section ref={reff} >
      <div className="mx-auto pt-2 mt-2 text-center">
        <div >
          <img src={Ridwan} className="img-responsive" style={{width: "300px", height: "75px"}} className="px-3 py-1 bg-light my-2" />
        </div>
        <div>
          <img src={FullStack} className="img-responsive" style={{width: "200px", height: "50px"}} className="px-3 py-1 bg-light my-2" />
        </div>
        {/* <h3 className="text-dark bg-light d-inline font-weight-bold px-3"> RIDWAN BIN MONJUR </h3>
        <br/>
        <br/>
        <h4 className="text-dark bg-light d-inline font-weight-bold px-3"> ODESSY OF A FULL-STACK DEVELOPER</h4> */}

      </div>
    </section>

  );
};

export default PageIntro;
