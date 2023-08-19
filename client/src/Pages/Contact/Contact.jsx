import React, { useState } from "react";
import Title from "../../components/TItle/Title";
import { IoPhonePortraitOutline, IoMailOutline } from "react-icons/io5";
import { FaRegAddressCard } from "react-icons/fa";
import contact from "../../assets/img/contact.jpg";
import "./contact.css";
import { toast } from "react-toastify";
import { sendUserMail } from "../../utils/api/UserMsgApi";
import { Fade } from "react-awesome-reveal";
import { Zoom } from "react-awesome-reveal";

const Contact = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  //handleChange
  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  //submit data
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.name || !input.email || !input.message) {
      return toast.error("all fields are required");
    }
    sendUserMail(input);
    toast.success(`Congratulation ${input.name}!, your message has been sent`);
    setInput({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <>
      <div className="mamu-contacts" id="contact">
        <div className="container">
          <Title title="Contact with me" />

          <div className="mamu-margin">
            <div className="row">
              <div className="col-md-6 col-lg-6 col-sm-12 mamu-contact-full">
                <Fade direction="down">
                  <div className="mamu-contact-img">
                    <img src={contact} alt="" />
                  </div>
                  <div className="mamu-contact">
                    <div className="mamu-contact-icon">
                      <div className="span">
                        <IoPhonePortraitOutline />
                      </div>
                    </div>
                    <div className="mamu-contact-details">
                      <h4>+8801776757650</h4>
                    </div>
                  </div>
                  <div className="mamu-contact">
                    <div className="mamu-contact-icon">
                      <div className="span">
                        <IoMailOutline />
                      </div>
                    </div>
                    <div className="mamu-contact-details">
                      <h4>mahmudhussaininfo@gmail.com</h4>
                    </div>
                  </div>
                  <div className="mamu-contact">
                    <div className="mamu-contact-icon">
                      <div className="span">
                        <FaRegAddressCard />
                      </div>
                    </div>
                    <div className="mamu-contact-details">
                      <h4>Nipoban R/a Khadim Nagar, Sylhet</h4>
                    </div>
                  </div>
                </Fade>
              </div>
              <div className="col-md-6 col-lg-6 col-sm-12">
                <Zoom>
                  <div className="mamu-contact-form">
                    <h2>Submit your data</h2>
                    <hr className="text-light" />
                    <form action="" onSubmit={handleSubmit}>
                      <div className="my-4">
                        <input
                          className="form-control"
                          name="name"
                          value={input.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          type="text"
                        />
                      </div>
                      <div className="my-4">
                        <input
                          className="form-control"
                          name="email"
                          value={input.email}
                          onChange={handleChange}
                          placeholder="Your Email"
                          type="text"
                        />
                      </div>
                      <div className="my-4">
                        <textarea
                          placeholder="write your message"
                          name="message"
                          value={input.message}
                          onChange={handleChange}
                          className="form-control"
                        ></textarea>
                      </div>
                      <div className="my-4">
                        <button type="submit" className="form-control">
                          submit
                        </button>
                      </div>
                    </form>
                  </div>
                </Zoom>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
