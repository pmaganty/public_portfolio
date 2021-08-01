import "./projects.css";
import Proj from "./proj";
import dev_match from "./proj/dev_match.PNG";
import petfinder from "./proj/petfinder.PNG";
import burger_logger from "./proj/burger_logger.PNG";
import weather_dashboard from "./proj/weather_dashboard.PNG";

function Projects() {

  var dev_match_title = "Dev Match";
  var petfinder_title = "Pet Finder";
  var burger_logger_title = "Burger Logger";
  var weather_dashboard_title = "Weather Dashboard";

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
                <Proj image={dev_match} title={dev_match_title} />
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4">
                <Proj image={burger_logger} title={burger_logger_title} />              
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4">
                <Proj image={petfinder} title={petfinder_title}/>           
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-sm-12 col-md-4 col-lg-4">
                <Proj image={weather_dashboard} title={weather_dashboard_title}/>   
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4">
                <Proj image={weather_dashboard} />   
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4">
                <Proj image={weather_dashboard} />   
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;