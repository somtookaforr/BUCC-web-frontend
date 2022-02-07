import React from "react";
import "../CSS/events.css";
const Event = ({ event }) => {
  return (
    <>
      {event.map((event, index) => {
        return (
          <>
            <div key={index} className=" row sing_evt">
              <div className="col-12 col-md-6 img_div">
                <img alt="events" className="evts_images" src={event.imgUrl} />
              </div>
              <div className="col-12 col-md-6 cont_div">
                <p className="sing_txt">{event.text}</p>
                <a href="/">
                  <button className="evt_but">Click to register</button>
                </a>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Event;
