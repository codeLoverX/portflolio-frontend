import React from "react";
import "./styles.css";
import Ridwan from '../../../assets/images/ridwan.png';
import FullStack from '../../../assets/images/fullstack.png';

const PageIntro = ({ reff }) => {
  return (
    <section ref={reff} >
      <div className="mx-auto pt-2 mt-2 text-center">
        <div >
          <img src={Ridwan} className="img-responsive" style={{width: "300px", height: "75px", background: "rgb(171, 182, 194, 0.6)"}} className="px-3 pt-1  mt-2 my-1" />
        </div>
        <div>
          <img src={FullStack} className="img-responsive" style={{width: "200px", height: "50px", background: "rgb(171, 182, 194, 0.6)"}} className="px-3 pb-1 mb-2" />
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
