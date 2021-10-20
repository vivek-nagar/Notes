import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./search";
import Header from "./components/header";

const App = (props) => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "15/04/2021",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "15/04/2021",
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "52/04/2021",
    },
    {
      id: nanoid(),
      text: "This is my forth note!",
      date: "52/04/2021",
    },
  ]);
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMOde] = useState(false);

  useEffect(() => {
    const saveNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    if(saveNotes){
      setNotes(saveNotes)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handelToggleDarkMode={setDarkMOde} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handelAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
