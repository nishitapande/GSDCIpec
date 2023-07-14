import React, { useState } from "react";
import "./EventsForm.css";

function EventsForm() {
  const [selectedSession, setSelectedSession] = useState("");
  const handleChange = (event) => {
    setSelectedSession(event.target.value);
  };
  const getCurrentYear = () => {
    const today = new Date();
    return today.getFullYear();
  };

  const generateSessions = () => {
    const currentYear = getCurrentYear();
    const sessions = [];

    for (let year = currentYear; year >= 2020; year--) {
      const session = `${year}-${year + 1}`;
      sessions.push(session);
    }

    return sessions;
  };
  const [showForm, setShowForm] = useState(0);
  const handelDropdown = (e) => {
    setShowForm(Number(e.target.value));
  };
  const academicSessions = generateSessions();

  return (
    <div className="eventform">
      <div className="event-form">
        <h1 className="heading-primary">Fill the form</h1>
        <form className="form">
          <div className="input-field-div">
            <input name="name" type="text" required className="input" />
            <label className="label">Event Name</label>
          </div>
          <div className="input-field-div">
            <select
              name="eventType"
              required
              onChange={(e) => handelDropdown(e)}
              className="input"
            >
              <option value="">Choose Event Type</option>
              <option value="1">Upcomming Event</option>
              <option value="2">Past Event</option>
            </select>
          </div>
          <div>
            {showForm !== 0 ? (
              <div>
                {showForm === 1 ? (
                  <>
                    <div className="input-field-div">
                      <label className="">Event Date</label>
                      <input
                        type="date"
                        className="input"
                        placeholder="Date of Event"
                        required
                      />
                    </div>
                    <div className="input-field-div">
                      <input
                        name="link"
                        type="url"
                        required
                        className="input"
                      />
                      <label className="label">Link for Regristration</label>
                    </div>
                  </>
                ) : (
                  <>
                    <select
                      id="academicSession"
                      value={selectedSession}
                      onChange={handleChange}
                      className="dropdown-select input"
                      required
                    >
                      <option value=""> Select Academic Session</option>
                      {academicSessions.map((session) => (
                        <option
                          key={session}
                          value={session}
                          className="dropdown-option"
                        >
                          {session}
                        </option>
                      ))}
                    </select>
                  </>
                )}
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="input-field-div">
            <textarea
              name="summary"
              type="text"
              rows="2"
              cols="20"
              className="textarea"
              placeholder="Write the Summary"
              required
            />
          </div>
          <div className="input-field-div">
            <textarea
              name="description"
              type="text"
              rows="5"
              cols="20"
              className="textarea description"
              placeholder="Write the description of the Event"
              required
            />
          </div>
          <button className="btn"> Submit</button>
        </form>
      </div>
    </div>
  );
}

export default EventsForm;

// import { useState } from "react";
// import React from "react";

// export default function Forms() {

//     const formobj = [
//         {
//             name: "school",
//             value: "schoolName"
//         },
//         {
//             name: "college",
//             value: "collegeName"
//         }
//     ];

//     const [showForm, setShowForm] = useState(0);
//     const [schoolName, setSchoolName] = useState('');
//     const [collegeName, setCollegeName] = useState('');

//     const handelDropdown = (event) => {
//         const { value, name } = event.target;

//         setShowForm(Number(value));

//     }

//     const handleFormChange = (event) => {
//         const { name, value } = event.target;
//         if (name === "school") {
//             setSchoolName(value)
//         } else if (name === "college") {
//             setCollegeName(value);
//         }
//     }

//     return (<>
//         <form>
//             <select name="dropdown" onChange={(event) => handelDropdown(event)} >
//                 <option value="">None</option>
//                 <option value="1">school</option>
//                 <option value="2">college</option>
//             </select>
//             <div style={{ marginTop: "1rem" }}>
//                 {showForm !== 0 ? (
//                     <div>
//                         <input type="text" name={formobj[showForm - 1]?.name} placeholder={formobj[showForm - 1]?.name} onChange={(e) => handleFormChange(e)} />

//                     </div>
//                 ) : (<></>)}
//             </div>
//         </form>
//     </>);
// }
