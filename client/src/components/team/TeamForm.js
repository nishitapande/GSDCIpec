import React, { useState } from "react";
import AddMemberForm from "./member/AddMemberForm";
function TeamForm() {
  const [selectedSession, setSelectedSession] = useState("");
  const [showMemberForm, setShowMemberForm] = useState(false);
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

    for (let year = currentYear; year >= 2017; year--) {
      const session = `${year}-${year + 1}`;
      sessions.push(session);
    }

    return sessions;
  };
  const handleMemberFormClose = () => {
    setShowMemberForm(false);
  };
  const academicSessions = generateSessions();
  return (
    <div className="team-form-section">
      <div className="team-form">
        <form>
          <h2>Fill the form below!!</h2>
          <div className="dropdown-container">
            <label htmlFor="academicSession" className="dropdown-label">
              Select Academic Session:
            </label>
            <select
              id="academicSession"
              value={selectedSession}
              onChange={handleChange}
              className="dropdown-select"
            >
              <option value="">-- Select --</option>
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
          </div>
          <button type="button" onClick={() => setShowMemberForm(true)}>
            Add Member
          </button>

          {showMemberForm && <AddMemberForm onClose={handleMemberFormClose} />}
        </form>
      </div>
    </div>
  );
}

export default TeamForm;
