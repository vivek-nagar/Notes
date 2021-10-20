import { useState } from "react";
const AddNote = ({ handelAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;

  const handelChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };
  const handelSaveClick = () => {
    if (noteText.trim().length > 0) {
      handelAddNote(noteText);
      setNoteText("");
    }
  };

  return (
    <div className="nots new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type tp add a note....."
        value={noteText}
        onChange={handelChange}
      ></textarea>
      <div className="note-footer">
        <small> {characterLimit - noteText.length} Remaining</small>
        <button clasName="save" onClick={handelSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
