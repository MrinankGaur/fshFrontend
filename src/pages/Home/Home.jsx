import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { EventData } from "../../context/EventContext";
import { server } from "../../main";

const Home = () => {
  const navigate = useNavigate();
  const { events } = EventData();
  console.log(events);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className="w-[100%] mx-[15%] pt-[5%] text-center">
        <img
          className="w-[70%] h-[60%] object-cover"
          src="src/assets/logo.png"
          alt="Carousel Image 1"
        />
      </div>
      <div className="m-[10%]">
        <p className="text-white text-center font-mono ">
          Join us in the exciting world of programming and turn your ideas into
          reality. Unlock the world of endless possibilities - learn to code and
          shape the digital future with us
        </p>
      </div>

      {/* <button onClick={() => navigate("/events")} className="common-btn">
        Register Events
      </button> */}
      {/* Carousel Section */}
      <div className="mt-8 mx-[25%]">
        <Slider {...settings}>
          {events && events.length > 0 ? (
            events.map((event) => (
              <div key={event._id} className="shadow-2xl">
                <img
                  className="w-full h-[400px] object-cover"
                  src={`${server}/${event.image}`}
                  alt={`Carousel Image for ${event.title}`}
                />
              </div>
            ))
          ) : (
            <p>No Events Yet</p>
          )}
          {/* <div className="shadow-2xl">
            <img
              className="w-full h-[400px] object-cover "
              src="your-image-source1.jpg"
              alt="Carousel Image 1"
            />
          </div>
          <div className="shadow-2xl">
            <img
              className="w-full h-[400px] object-cover "
              src="your-image-source2.jpg"
              alt="Carousel Image 2"
            />
          </div>
          <div className="shadow-2xl">
            <img
              className="w-full h-[400px] object-cover "
              src="your-image-source3.jpg"
              alt="Carousel Image 3"
            />
          </div> */}
          {/* Add more slides as needed */}
        </Slider>
      </div>
    </div>
  );
};

export default Home;
