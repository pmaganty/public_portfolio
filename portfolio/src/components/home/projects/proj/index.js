import "./proj.css";
import banner from "./banner.PNG";

function Proj( {image, title, proj} ) {
  return (
    <a href={proj} target="_blank">
        <div id="proj_id" type="button">
            <img src={image} alt="PROJECT IMG" className="img-responsive center-block d-block mx-auto" id="proj_img"></img>
            <div id="ban_div">
                <img src={banner} alt="BANNER" className="img-responsive center-block d-block mx-auto" id="ban_img"></img>
                <div id="proj_title">
                    <p>{title}</p>
                </div>
            </div>
        </div>
    </a>
  );
}

export default Proj;