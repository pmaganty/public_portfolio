import "./center.css";
import background from "./web_bg_img.jpg";
import pran from "./pran.PNG";

function Center() {

  const profile_img = "./pran.PNG";

  return (
    <div className="center-wrap">
        <img
            class="center-bg"
            src={background}
            alt="background image"
        />
        <div className="row justify-content-center center-content" id="background">
            <div className="col-sm-12 col-md-6 col-lg-6" id="whole_center">
                <div className="row justify-content-center" id="pic">
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <img id="prof_img" src={pran} alt="PRAN" id="pran_img"></img>
                    </div>
                </div>
                <div className="row justify-content-center" id="name">
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <p>PRANITHA MAGANTY</p>
                    </div>
                </div>
                <div className="row justify-content-center" id="menu">
                    <div className="col-sm-6 col-md-6 col-lg-6">

                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Center;