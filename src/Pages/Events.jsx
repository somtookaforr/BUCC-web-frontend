import React, { useState, useEffect } from "react";
import "../CSS/events.css";
// import evt_img from "../Images/event_image_1.jpg";
import Event from "../Components/Event";
// import Pagination from "../Components/Pagination";
import events_data from "../data/events";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
const Events = () => {
  // const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage, setEventsPerPage] = useState(3);

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvent = events_data.slice(indexOfFirstEvent, indexOfLastEvent);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <Navbar />

      <div>
        {/* <div className="evt_head">
          <img alt="events" className="evt_head_img" src={evt_img} />
          <p className="evt_txt">Events</p>
        </div> */}
        <div className="evtheaderBg">
          <h1>Events</h1>
        </div>
        <div className="container-fluid ">
          <Event event={currentEvent} />
        </div>
        {/* <Pagination
          eventsPerPage={eventsPerPage}
          totalEvents={events_data.length}
          paginate={paginate}
        /> */}
      </div>

      <Footer />
    </>
  );
};

export default Events;
