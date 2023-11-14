import React from "react";
import selflearning from "../assets/self-learning.png"
import learningskills from "../assets/learning-skills.png"
import acedemics from "../assets/acade.png"
import improveresults from "../assets/imprres.png"

const Benefitsoflife = () => {
  return (
   
   <div    id="whyuselife">
    <div

    className="ben-container"
   
    >
      <div className="text-center p-4">
        <h3>
          Benefits of using {" "} <span style={{ color: "violet" }}>L</span>
          <span style={{ color: "blue" }}>I</span>
          <span style={{ color: "green" }}>F</span>
          <span style={{ color: "orange" }}>E</span> {" "}Learning App
        </h3>
      </div>

      <div  className="container"
      style={{
        width: "90%",
        height: "80%",
        marginLeft: "5%",
      }} >
        <div className="row gap-5 ">
        <div className="col-lg-5 mt-3 text-center" style={{ height: "auto", border: "1px solid #000F6E" ,borderRadius:"10px"}}>
         <img className="mt-4" src={selflearning} style={{width:"100px"}} />
        <p className="benifits-heading">Self Learning</p>
        <p className="benifits-para">Self-learning through its structured study techniques and analysis tool.</p>
        </div>
        <div className="col-lg-5 mt-3 text-center" style={{ height: "auto", border: "1px solid #000F6E" ,borderRadius:"10px"}}>
        <img className="mt-4" src={learningskills} style={{width:"100px"}} />
       <p className="benifits-heading">Learning && Skilling</p>
       <p className="benifits-para">
         Co-ordinated use of learning and skilling towards successful career building.</p>
       </div>
        </div>

        <div className="row gap-5">
        <div className="col-lg-5 mt-3 text-center" style={{ height: "auto", 
        border: "1px solid #000F6E" ,borderRadius:"10px"}}>
        <img className="mt-4" src={acedemics} style={{width:"100px"}} />
       <p className="benifits-heading">Academics & Assessments</p>
       <p className="benifits-para">Well defined academic passage with assessments evaluations and validations</p>
       </div>
       <div className="col-lg-5 mt-3 text-center" style={{ height: "auto", border: "1px solid #000F6E" ,borderRadius:"10px"}}>
       <img className="mt-4" src={improveresults} style={{width:"100px"}} />
      <p className="benifits-heading">Improvise results</p>
      <p className="benifits-para">Utilizes the content to get optimum results in the learnersHelps in progressive and thorough learning with assessments, enhances the learning ability</p>
      </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Benefitsoflife;
