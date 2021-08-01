import "./proj.css";

function Proj( {image} ) {
  return (
    <div id="proj_id">
        <img src={image} alt="PROJECT IMG" className="img-responsive center-block d-block mx-auto" id="proj_img"></img>
    </div>
  );
}

export default Proj;