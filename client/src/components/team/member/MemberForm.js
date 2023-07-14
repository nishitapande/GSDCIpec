import React from "react";

function MemberForm() {
  return (
    <>
      <form>
        <h2>Fill The Below Form</h2>
        <label>Name</label>
        <input type="text" name="name" required />
        <label>Position</label>
        <input type="text" name="position" required />
        <label>LinkedIn Id: </label>
        <input type="url" name="linkedin" required />
        <label>Instagram Id: </label>
        <input type="url" name="instagram" required />
        <button>Submit</button>
      </form>
    </>
  );
}

export default MemberForm;
