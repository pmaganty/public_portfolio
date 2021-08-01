import "./proj.css";
import banner from "./banner.PNG";

function Proj( {image, title} ) {
  return (
    <div id="proj_id" >
        <img src={image} alt="PROJECT IMG" className="img-responsive center-block d-block mx-auto" id="proj_img"></img>
        <div id="ban_div">
            <img src={banner} alt="BANNER" className="img-responsive center-block d-block mx-auto" id="ban_img"></img>
            <div id="proj_title" type="button">
                <p>{title}</p>
            </div>
        </div>
    </div>
  );
}

export default Proj;