import "./center.css";

function Center() {

  const profile_img = "./pran.PNG";

  return (
    <div className="row justify-content-center">
        <div className="col-sm-12 col-md-6 col-lg-6" id="whole_center">
            <div className="row justify-content-center" id="pic">
                <div className="col-sm-6 col-md-6 col-lg-6">
                    <img src={profile_img} alt="PRAN" id="pran_img"></img>
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
  );
}

export default Center;