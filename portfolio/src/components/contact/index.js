import "./contact.css";
import Header from "../header";
import Footer from "../footer";

function Contact() {
  return (
    <div>
        <Header />
        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12" id="contact_title">
                <h1>Contact Me</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-11 col-md-7 col-lg-7" id="contact_form">
                <form>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Name</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn">Submit</button>
                </form>
            </div>
        </div>
        <Footer />
    </div>
  );
}

export default Contact;