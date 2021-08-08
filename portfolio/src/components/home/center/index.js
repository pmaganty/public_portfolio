import "./center.css";
import background from "./web_bg_img.jpg";
import pran from "./pran.PNG";

function Center() {

  return (
    <div className="center-wrap">
        <div className="row justify-content-center">
            <div className="col-sm-12 col-md-12 col-lg-12">
                <img
                    class="center-bg"
                    src={background}
                    alt="background image"
                />
            </div>
        </div>
        <div className="row justify-content-center center-content">
            <div className="col-sm-10 col-md-6 col-lg-6" id="whole_center">
                <div className="row justify-content-center" id="pic">
                    <div className="col-sm-10 col-md-10 col-lg-10">
                        <img src={pran} alt="PRAN" className="img-responsive center-block d-block mx-auto" id="pran_img"></img>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-12 col-md-12 col-lg-12" id="name">
                        <h2>PRANITHA MAGANTY</h2>
                    </div>
                </div>
                <div className="row" id="menu">
                    <button class="nav_btn" typ="button">About Me</button>
                    <a href="mailto:pranithamaganty@gmail.com?subject=Hello Pranitha!">
                        <button class="nav_btn" type="button">Contact</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Center;