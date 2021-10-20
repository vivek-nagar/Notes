import Note from "./note";
import AddNote from "./AddNote";

const NotesList = ({ notes, handelAddNote, handleDeleteNote }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <AddNote handelAddNote={handelAddNote} />
    </div>
  );
};

export default NotesList;
