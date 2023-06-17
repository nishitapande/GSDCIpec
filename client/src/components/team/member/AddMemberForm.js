import React, { useState } from "react";

const AddMemberForm = ({ onClose }) => {
  const [leadName, setLeadName] = useState("");
  const [leadPhoto, setLeadPhoto] = useState("");
  const [leadLinkedin, setLeadLinkedin] = useState("");
  const [leadInstagram, setLeadInstagram] = useState("");
  const [coLeadName, setCoLeadName] = useState("");
  const [coLeadPhoto, setCoLeadPhoto] = useState("");
  const [coLeadLinkedin, setCoLeadLinkedin] = useState("");
  const [coLeadInstagram, setCoLeadInstagram] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(true);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Perform additional logic or submit the form data

    // Reset form fields
    setLeadName("");
    setLeadPhoto("");
    setLeadLinkedin("");
    setLeadInstagram("");
    setCoLeadName("");
    setCoLeadPhoto("");
    setCoLeadLinkedin("");
    setCoLeadInstagram("");

    // Close the member form
    onClose();
  };

  const handleEditClick = () => {
    setIsSubmitted(false);
  };

  return (
    <div>
      {isSubmitted ? (
        <form onSubmit={handleFormSubmit}>
          <h2>Lead Member</h2>
          <label htmlFor="leadName">Name:</label>
          <input
            id="leadName"
            type="text"
            value={leadName}
            required
            onChange={(event) => setLeadName(event.target.value)}
          />

          <label htmlFor="leadPhoto">Photo URL:</label>
          <input
            id="leadPhoto"
            type="text"
            value={leadPhoto}
            required
            onChange={(event) => setLeadPhoto(event.target.value)}
          />

          <label htmlFor="leadLinkedin">LinkedIn URL:</label>
          <input
            id="leadLinkedin"
            type="text"
            value={leadLinkedin}
            required
            onChange={(event) => setLeadLinkedin(event.target.value)}
          />

          <label htmlFor="leadInstagram">Instagram URL:</label>
          <input
            id="leadInstagram"
            type="text"
            value={leadInstagram}
            required
            onChange={(event) => setLeadInstagram(event.target.value)}
          />

          <h2>Co-Lead Member</h2>
          <label htmlFor="coLeadName">Name:</label>
          <input
            id="coLeadName"
            type="text"
            value={coLeadName}
            required
            onChange={(event) => setCoLeadName(event.target.value)}
          />

          <label htmlFor="coLeadPhoto">Photo URL:</label>
          <input
            id="coLeadPhoto"
            type="text"
            value={coLeadPhoto}
            required
            onChange={(event) => setCoLeadPhoto(event.target.value)}
          />

          <label htmlFor="coLeadLinkedin">LinkedIn URL:</label>
          <input
            id="coLeadLinkedin"
            type="text"
            value={coLeadLinkedin}
            required
            onChange={(event) => setCoLeadLinkedin(event.target.value)}
          />

          <label htmlFor="coLeadInstagram">Instagram URL:</label>
          <input
            id="coLeadInstagram"
            type="text"
            value={coLeadInstagram}
            required
            onChange={(event) => setCoLeadInstagram(event.target.value)}
          />

          <button type="submit">Add</button>
        </form>
      ) : (
        <div>
          <h2>Lead Member</h2>
          <p>Name: {leadName}</p>
          <p>Photo URL: {leadPhoto}</p>
          <p>LinkedIn: {leadLinkedin}</p>
          <p>Instagram: {leadInstagram}</p>

          <h2>Co-Lead Member</h2>
          <p>Name: {coLeadName}</p>
          <p>Photo URL: {coLeadPhoto}</p>
          <p>LinkedIn: {coLeadLinkedin}</p>
          <p>Instagram: {coLeadInstagram}</p>

          <button onClick={handleEditClick}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default AddMemberForm;
