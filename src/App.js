import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import List from "./components/List";
import Alert from "./components/Alert";
import { HiPlusSm } from "react-icons/hi";
import { GoSync } from "react-icons/go";
import { BiSortDown } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";

import { useGlobalContext } from "./context";

function App() {
  const {
    id,
    item,
    list,
    show,
    changeButton,
    changeState,
    sortByChecked,
    checkItemAndAddItem,
    editItemHandleSubmit,
    clearList,
    showAlert,
  } = useGlobalContext();

  const [input, setInput] = useState("");

  useEffect(() => {
    setInput(item);
  }, [changeButton]);

  const refContainer = useRef(null);

  useEffect(() => {
    refContainer.current.focus();
  }, [changeState]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!changeButton) {
      if (input) {
        checkItemAndAddItem(input);
      } else {
        showAlert(true, "danger", "Please enter the value");
      }

      setInput("");
    } else if (input) {
      editItemHandleSubmit(id, input);
    } else {
      showAlert(true, "danger", "Please enter the value");
    }
  };

  return (
    <div className="app">
      <div className="app-container">
        {<Alert />}
        <h1>Groceries</h1>
        <form onSubmit={handleSubmit}>
          <input
            ref={refContainer}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">
            {changeButton ? (
              <GoSync className="submit-icon" />
            ) : (
              <HiPlusSm className="submit-icon" />
            )}
          </button>
        </form>
        {list.length > 0 && (
          <div className="btn-container">
            <button
              className="btn-sorted"
              type="button"
              onClick={sortByChecked}
            >
              <BiSortDown className="btn-sorted-icon" />
            </button>
            <button className="btn-clear" type="button" onClick={clearList}>
              Clear List
              <FaTrashAlt className="btn-trash" />
            </button>
            <span>{list.length}</span>
          </div>
        )}
        {list.length > 0 && (
          <div className="wrapper-list">
            <List input={input} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
