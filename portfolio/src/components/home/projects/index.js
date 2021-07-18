import "./projects.css";
import Proj from "./proj";

function Projects() {
  return (
    <div className="row justify-content-center" id="whole_projects">
      <div className="col-sm-12 col-md-12 col-lg-12">
        <div className="row justify-content-center">
          <div className="col-sm-11 col-md-6 col-lg-6" id="ex_title">
            <h1>Experience</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="row justify-content-center">
              <div className="col-sm-12 col-md-4 col-lg-4">
                <Proj />
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4">
                <Proj />              
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4">
                <Proj />           
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-sm-12 col-md-4 col-lg-4">
                <Proj />   
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4">
                <Proj />   
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4">
                <Proj />   
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;