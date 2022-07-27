import React from "react";
import { TbEdit } from "react-icons/tb";
import { FaTrashAlt } from "react-icons/fa";
import { useGlobalContext } from "../context";

const List = () => {
  const { list, handleChange, changeItem, removeItem } = useGlobalContext();
  console.log(list);
  return (
    <div className="list-container">
      {list
        .map((item) => {
          return (
            <div
              key={item.id}
              className={item.checked ? "list-item checked" : "list-item"}
            >
              <input
                type="checkbox"
                id={item.id}
                name="item"
                checked={item.checked}
                value={item.id}
                onChange={(e) => handleChange(e)}
              />
              <label
                htmlFor={item.id}
                style={{
                  textDecoration: item.checked ? "line-through" : "none",
                }}
              >
                {item.name}
              </label>
              <button
                className="edit"
                type="button"
                onClick={() => changeItem(item.id)}
              >
                <TbEdit className="icon" />
              </button>
              <button
                className="remove"
                type="button"
                onClick={() => removeItem(item.id)}
              >
                <FaTrashAlt className="icon icon-remove" />
              </button>
            </div>
          );
        })
        .reverse()}
    </div>
  );
};

export default List;
