import React from "react";

const Header = ({ handelToggleDarkMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        onClick={() =>
          handelToggleDarkMode((previousDarkmode) => !previousDarkmode)
        }
        className="save"
      >
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;
