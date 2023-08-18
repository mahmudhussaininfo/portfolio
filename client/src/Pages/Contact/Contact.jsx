import React, { useState } from "react";
import Title from "../../components/TItle/Title";
import { IoPhonePortraitOutline, IoMailOutline } from "react-icons/io5";
import { FaRegAddressCard } from "react-icons/fa";
import contact from "../../assets/img/contact.jpg";
import "./contact.css";
import { Slide } from "react-awesome-reveal";
import { toast } from "react-toastify";
import { sendUserMail } from "../../utils/api/UserMsgApi";

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
      <div className="mamu-contacts py-5" id="contact">
        <div className="container">
          <Title title="Contact with me" />
          <Slide direction="up">
            <div className="row py-5 px-5 mamu-contact-mobile">
              <div className="col-md-6 col-lg-6 col-sm-12 mamu-contact-full">
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
              </div>
              <div className="col-md-6 col-lg-6 col-sm-12">
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
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </>
  );
};

export default Contact;
