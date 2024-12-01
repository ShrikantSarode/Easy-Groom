import React from "react";
import { Link } from "react-router-dom";
import home1 from "../assest/home.jpeg";
import s1 from "../assest/Services/svgtopng/hair.png";
import s2 from "../assest/Services/svgtopng/barber.png";
import s3 from "../assest/Services/svgtopng/massage.png";
import s4 from "../assest/Services/svgtopng/beauty.png";
import s5 from "../assest/Services/svgtopng/makeup.png";
import s6 from "../assest/Services/svgtopng/spa.png";
import s7 from "../assest/Services/svgtopng/mobile-salon.png";
import s8 from "../assest/Services/svgtopng/nail.png";
import s9 from "../assest/Services/svgtopng/bridal.png";
import s10 from "../assest/salon_booking.jpg";
import s11 from "../assest/salon2.jpg";


export default function Home() {
  return (
    // section 1
    <>
      <div className="container text-center">
        {/* <h1>Welcome to Easy Groom!</h1> */}
        <div class="container mt-5">
          <div class="row">
            <div class="col-xl-6">
              <h1 className="heading-1 text-start">
                Salon booking made flexible
              </h1>
              <p className="text-start">
                Optimize your appointment book with Groom Easy, the only salon
                booking software that manages group appointments, sets custom
                service times and pricing by job level or stylist—and so much
                more.
              </p>
              <Link to="/login">
                <button className="btn btn-warning h1-btn p-3 mt-5">
                  Book Appointment
                </button>
              </Link>
            </div>
            <div class="col-xl-6">
              <figure>
                {/* <img
              src="https://cdn.prod.website-files.com/6103d7500a0d507d3f6f48a7/63da20fd46c580aef4a960ea_Salon%20Booking%20Software-p-500.webp"
              alt="Salon Booking Software"

            /> */}
                <img src={home1} alt="Salon Booking Software" />
              </figure>
            </div>
          </div>
        </div>
      </div>

      {/* services */}

      <h1 className="text-center mt-3">Services</h1>
      <div class="container mt-5  ">
        <div class="row">
          <div class="col-md-2  ">
            <figure className="d-flex justify-content-center">
              <img src={s1} alt="Hair Service" />
            </figure>
            <p className="text-center">Haircut</p>
          </div>
          <div class="col-md-2  ">
            <figure className="d-flex justify-content-center">
              <img src={s2} alt="Hair Service" />
            </figure>
            <p className="text-center">Beard Cut</p>
          </div>
          <div class="col-md-2  ">
            <figure className="d-flex justify-content-center">
              <img src={s3} alt="Hair Service" />
            </figure>
            <p className="text-center">Massage Sheduling</p>
          </div>
          <div class="col-md-2  ">
            <figure className="d-flex justify-content-center">
              <img src={s4} alt="Hair Service" />
            </figure>
            <p className="text-center">Skincare</p>
          </div>
          <div class="col-md-2  ">
            <figure className="d-flex justify-content-center ">
              <img src={s5} alt="Hair Service" />
            </figure>
            <p className="text-center">MakeUp Artist Booking</p>
          </div>
          <div class="col-md-2  ">
            <figure className="d-flex justify-content-center ">
              <img src={s6} alt="Hair Service" />
            </figure>
            <p className="text-center">Spa Sheduling</p>
          </div>
          <div class="col-md-2  ">
            <figure className="d-flex justify-content-center mt-4">
              <img src={s7} alt="Hair Service" />
            </figure>
            <p className="text-center">Home Appointment</p>
          </div>
          <div class="col-md-2  ">
            <figure className="d-flex justify-content-center mt-4">
              <img src={s8} alt="Hair Service" />
            </figure>
            <p className="text-center">Nails Salon Sheduling</p>
          </div>
          <div class="col-md-2  ">
            <figure className="d-flex justify-content-center mt-4">
              <img src={s9} alt="Hair Service" />
            </figure>
            <p className="text-center">Birdal Salon Sheduling</p>
          </div>
        </div>
      </div>

      {/* section2 */}

      <div class="container text-center justify-content-center mt-5">
        <div class="row">
          <div class="col-xl-4">
            <figure className="d-flex justify-content-center">
              <img
                src={s10}
                alt=""
                className="img-fluid"
                style={{ borderRadius: "30px" }}
              />
            </figure>
          </div>
          <div class="col-xl-8 text-start">
            <h1 style={{ fontSize: "42px" }}>Simplify online salon booking</h1>
            <p>
              Groom Ease Webstore & Consumer Mobile App gives guests the
              flexibility to book online 24/7.
            </p>
            <p>
              “Letting our guests manage their own appointments from start to
              finish has been a huge benefit for us. We’ve eliminated front desk
              lines and the phone doesn’t ring as much, so our team can focus
              100% on taking care of guests in the chair.”
            </p>
            <p>Groom Ease has been a game changer for our salon.</p>
          </div>
        </div>
      </div>
      {/*  */}
      <div class="container mt-5">
        <div class="row">
          <div class="col-xl-8">
            <h1 style={{ fontSize: "42px" }}>
              Intelligent appointment booking, happy staff
            </h1>
            <p>
              Groom Easy ensures an accurate appointment book and helps stylists
              make the most of their schedules.
            </p>
            <div className="-d-flex justify-content-start">
              <p>Automatically eliminate duplicate services during booking</p>
              <p>
                Set rules to book services in the right order (e.g. cut, color,
                blowout)
              </p>
              <p>
                Split service segments across different providers to optimize
                their schedules
              </p>
            </div>
          </div>
          <div class="col-xl-4">
            <figure className="d-flex justify-content-center">
              <img
                src={s11}
                alt=""
                className="img-fluid"
                style={{ borderRadius: "30px" }}
              />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}
