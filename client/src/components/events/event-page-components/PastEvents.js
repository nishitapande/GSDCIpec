import React from "react";
import img1 from "../../images/img1.jpg";
import { Link } from "react-router-dom";
import "./EventsDetails.css";
import EditIcon from "@mui/icons-material/Edit";

function PastEvents() {
  return (
    <div className="events-details">
      <div className="eventdetail">
        <h1 className="heading-primary"> Past Events by GDSC</h1>
        <div className="past-event">
          <div className="event-box">
            <div className="box">
              <div className="image-box">
                <div className="edit">
                  <EditIcon />
                </div>
                <div className="image">
                  <img src={img1} alt="event poster" className="poster-img" />
                </div>
              </div>

              <div className="text-box">
                <h2 className="heading-secondary">Event NAME</h2>
                <p className="description">
                  This is the description of the event
                  <small>date</small>
                </p>
              </div>
              <div className="link-box">
                <Link to="" className="detail link">
                  Detail
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PastEvents;
