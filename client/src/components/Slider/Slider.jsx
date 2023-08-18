// import React, { useState } from "react";
// import Sliders from "react-slick";
// import client1 from "../../assets/img/client1.jpg";
// import client2 from "../../assets/img/client2.jpg";
// import client3 from "../../assets/img/client3.jpg";
// import client4 from "../../assets/img/client4.jpg";
// import client5 from "../../assets/img/client5.jpg";
// import client6 from "../../assets/img/client6.jpg";
// import client7 from "../../assets/img/client7.jpg";
// import "./slider.css";
// import {
//   PiArrowFatLinesRightFill,
//   PiArrowFatLinesLeftFill,
// } from "react-icons/pi";
// import { MdOutlineStar } from "react-icons/md";

// export const Slider = () => {
//   const [dotactive, setDotActive] = useState(0);
//   const SampleNextArrow = (props) => {
//     const { onClick } = props;
//     return (
//       <div className="slideArrowRight" onClick={onClick}>
//         <PiArrowFatLinesRightFill />
//       </div>
//     );
//   };
//   const SamplePrevtArrow = (props) => {
//     const { onClick } = props;
//     return (
//       <div className="slideArrowLeft" onClick={onClick}>
//         <PiArrowFatLinesLeftFill />
//       </div>
//     );
//   };

//   const setting = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 1000,
//     autoplaySpeed: 3000,
//     pauseOnHover: true,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevtArrow />,

//     beforeChange: (next) => {
//       setDotActive(next);
//     },

//     appendDots: (dots) => (
//       <div
//         style={{
//           borderRadius: "10px",
//           padding: "10px",
//         }}
//       >
//         <ul
//           style={{
//             margin: "0px",
//             listStyle: "none",
//             display: "flex",
//             gap: "10px",
//             margin: "20px 0px",
//             justifyContent: "center",
//           }}
//         >
//           {" "}
//           {dots}{" "}
//         </ul>
//       </div>
//     ),
//     customPaging: (i) => (
//       <div
//         style={
//           i === dotactive
//             ? {
//                 width: "13px",
//                 height: "13px",
//                 backgroundColor: "#f47d20",
//                 borderRadius: "50%",
//                 cursor: "pointer",
//               }
//             : {
//                 width: "13px",
//                 height: "13px",
//                 backgroundColor: "#fff",
//                 borderRadius: "50%",
//                 cursor: "pointer",
//               }
//         }
//       ></div>
//     ),
//   };

//   return (
//     <>
//       <div className="mamu-slider py-5 my-4">
//         <Sliders {...setting}>
//           <div className="client">
//             <div className="client-details">
//               <div className="client-img">
//                 <img src={client1} alt="" />
//               </div>
//               <div className="client-content px-5 py-3 text-center">
//                 <h1>Shedwallace</h1>
//                 <p>
//                   "Great work! This seller responds to requests very fast!!!"
//                 </p>
//                 <div className="icon-style py-3">
//                   <MdOutlineStar />
//                   <MdOutlineStar />
//                   <MdOutlineStar />
//                   <MdOutlineStar />
//                   <MdOutlineStar />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="client">
//             <div className="client-details">
//               <div className="client-img">
//                 <img src={client2} alt="" />
//               </div>
//               <div className="client-content px-5 py-3 text-center">
//                 <h1>mishamelmed</h1>
//                 <p>
//                   "I ordered a job for a second project, and very happy with the
//                   performance. <br /> I will order again for another project."
//                 </p>
//                 <div className="icon-style py-3">
//                   <MdOutlineStar />
//                   <MdOutlineStar />
//                   <MdOutlineStar />
//                   <MdOutlineStar />
//                   <MdOutlineStar />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="client">
//             <div className="client-details">
//               <div className="client-img">
//                 <img src={client3} alt="" />
//               </div>
//               <div className="client-content px-5 py-3 text-center">
//                 <h1>carlas</h1>
//                 <p>
//                   "Great work on the Responsive Design of my site. Many Thanks!"
//                 </p>
//                 <div className="icon-style py-3">
//                   <MdOutlineStar />
//                   <MdOutlineStar />
//                   <MdOutlineStar />
//                   <MdOutlineStar />
//                   <MdOutlineStar />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="client">
//             <div className="client-details">
//               <div className="client-img">
//                 <img src={client4} alt="" />
//               </div>
//               <div className="client-content px-5 py-3 text-center">
//                 <h1>thinkweb</h1>
//                 <p>
//                   "Simply the best, if you need web related work or I would
//                   imagine any of the work done, this upwork does, you will be
//                   happy with the support and end results.."
//                 </p>
//                 <div className="icon-style py-3">
//                   <MdOutlineStar />
//                   <MdOutlineStar />
//                   <MdOutlineStar />
//                   <MdOutlineStar />
//                   <MdOutlineStar />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="client">
//             <div className="client-details">
//               <div className="client-img">
//                 <img src={client5} alt="" />
//               </div>
//               <div className="client-content px-5 py-3 text-center">
//                 <h1>Amit</h1>
//                 <p>
//                   "Mahmud was able to design a page for me at lightning speed
//                   and also made sure that it works well on desktop and mobile.
//                   Thank you for the quick turnaround!"
//                 </p>
//                 <div className="icon-style py-3">
//                   <MdOutlineStar />
//                   <MdOutlineStar />
//                   <MdOutlineStar />
//                   <MdOutlineStar />
//                   <MdOutlineStar />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="client">
//             <div className="client-details">
//               <div className="client-img">
//                 <img src={client6} alt="" />
//               </div>
//               <div className="client-content px-5 py-3 text-center">
//                 <h1>lenasagency</h1>
//                 <p>
//                   "An absolute pleasure to work with Mahmud! Went over and
//                   above, <br /> so appreciated the excellent service"
//                 </p>
//                 <div className="icon-style py-3">
//                   <MdOutlineStar />
//                   <MdOutlineStar />
//                   <MdOutlineStar />
//                   <MdOutlineStar />
//                   <MdOutlineStar />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="client">
//             <div className="client-details">
//               <div className="client-img">
//                 <img src={client7} alt="" />
//               </div>
//               <div className="client-content px-5 py-3 text-center">
//                 <h1>Dennis</h1>
//                 <p>
//                   "He is the best freelancer on Upwork! I was very late with
//                   accepting the order but he was so kind to help me also after 1
//                   month"
//                 </p>
//                 <div className="icon-style py-3">
//                   <MdOutlineStar />
//                   <MdOutlineStar />
//                   <MdOutlineStar />
//                   <MdOutlineStar />
//                   <MdOutlineStar />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Sliders>
//       </div>
//     </>
//   );
// };
