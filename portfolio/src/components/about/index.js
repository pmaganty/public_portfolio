import "./about.css";
import Header from "../header";
import Footer from "../footer";
import temp from "./placeholder.png";
import rc_car from "./rc_car.PNG";
import top_pic from "./top_pic.jpg";
import self_sort_pic from "./self_sort_pic.PNG";
import yos_pic from "./yos_pic.JPG";
import nc_pic from "./nc_pic.jpg";
import fpga from "./fpga.JPG";
import zion from "./zion.jpg";

function About() {
  return (
    <div>
        <Header />
        <div className="row justify-content-center">
            <div className="col-sm-12 col-md-12 col-lg-12" id="whole_about">
                <div className="row justify-content-center">
                    <div className="col-sm-11 col-md-10 col-lg-10" id="top_about">
                        <div className="row justify-content-center">
                            <div className="col-sm-11 col-md-8 col-lg-8" id="about_title">
                                <h1>Hi - I'm Pranitha Maganty!</h1>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-sm-11 col-md-5 col-lg-5" style={{padding:"0px"}}>
                                <img src={top_pic} alt="PRAN" id="top_img" className="img-responsive center-block d-block mx-auto"/>
                            </div>
                            <div className="col-sm-11 col-md-7 col-lg-7" id="about_text">
                            <p>I grew up in Kent, Washington and went to college at the University of Washington in Seattle,
                                    graduating with a degree in Electrical and Computer Engineering. Since then, I have had the opportunity
                                    to work in the EDA (Electronic Design and Automation) Industry in which I have gained a lot of
                                    technical experience working with Electrical Hardware Engineers to design and verify complex pieces
                                    of code and have had the opportunity to live in Portland, Oregon, and now, Austin, Texas!
                                    I decided to learn Web Development in my free time, taking a Full-Stack bootcamp course.
                                    Having hardware and software experience has given me a great understanding of how many devices operate
                                    on the front and back end. Outside of my technical role, I love to hike and to be out in nature
                                    as much as possible as I grew up hiking in the Pacific Northwest!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-12 col-md-12 col-lg-12" id="bottom_about">
                        <div className="row justify-content-center">
                            <div className="col-sm-12 col-md-12 col-lg-12" id="text_callout_1">
                                <h3> ECE has allowed me to build some cool devices... </h3>
                            </div>
                        </div>
                        <div className="row justify-content-center" id="technical">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <div className="row justify-content-center">
                                    <div className="col-sm-12 col-md-3 col-lg-3 card_v1">
                                        <div className="row justify-content-center" id="img_div_1">
                                            <div className="col-sm-12 col-md-12 col-lg-12">
                                                <img src={self_sort_pic} className="card-img-top_v2" id="self_id" alt="SELF SORT"/>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center">
                                            <div className="col-sm-12 col-md-12 col-lg-12 card-body">
                                                <h5 className="card-title">Self Sorting Trash Can</h5>
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-3 col-lg-3 card_v1">
                                        <div className="row justify-content-center" id="img_div_1">
                                            <div className="col-sm-12 col-md-12 col-lg-12">
                                                <img src={rc_car} className="card-img-top_v2" id="rc_id" alt="RC CAR"/>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center">
                                            <div className="col-sm-12 col-md-12 col-lg-12 card-body">
                                                <h5 className="card-title">Remote Control Car</h5>
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-3 col-lg-3 card_v1">
                                        <div className="row justify-content-center" id="img_div_1">
                                            <div className="col-sm-12 col-md-12 col-lg-12">
                                            <img src={fpga} className="card-img-top_v2" id="fpga_id" alt="FPGA"/>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center">
                                            <div className="col-sm-12 col-md-12 col-lg-12 card-body">
                                                <h5 className="card-title">FPGA Maze Game</h5>
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center" id="fun">
                            <div className="row justify-content-center">
                                <div className="col-sm-12 col-md-12 col-lg-12" id="text_callout_2">
                                    <h3> Check out some of my outdoor adventures... </h3>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <div className="row justify-content-center">
                                    <div className="col-sm-12 col-md-3 col-lg-3 card_v1">
                                        <div className="row justify-content-center" id="img_div_2">
                                            <div className="col-sm-12 col-md-12 col-lg-12">
                                            <img src={yos_pic} className="card-img-top_v2" id="yos_id" alt="YOSEMITE"/>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center">
                                            <div className="col-sm-12 col-md-12 col-lg-12 card-body">
                                                <h5 className="card-title">Hiking at Yosemite</h5>
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-3 col-lg-3 card_v1">
                                        <div className="row justify-content-center" id="img_div_2">
                                            <div className="col-sm-12 col-md-12 col-lg-12">
                                            <img src={zion} className="card-img-top_v2" id="zion_id" alt="ZION"/>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center">
                                            <div className="col-sm-12 col-md-12 col-lg-12 card-body">
                                                <h5 className="card-title">Angel's Landing at Zion</h5>
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-3 col-lg-3 card_v1">
                                        <div className="row justify-content-center" id="img_div_2">
                                            <div className="col-sm-12 col-md-12 col-lg-12">
                                            <img src={nc_pic} className="card-img-top_v2" id="nc_id" alt="NOTH CASCADES"/>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center">
                                            <div className="col-sm-12 col-md-12 col-lg-12 card-body">
                                                <h5 className="card-title">Backpacking at the North Cascades</h5>
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-sm-12 col-md-12 col-lg-12" id="info">
                <p>Github</p>
                <p>Linked In</p>
                <p>Resume</p>
            </div>
        </div>
        <Footer />
    </div>
  );
}

export default About;