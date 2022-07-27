import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import { FaTrashAlt } from "react-icons/fa";
import { HiPlusSm } from "react-icons/hi";
import { GoSync } from "react-icons/go";

const Alert = () => {
  const { list, type, msg, showAlert } = useGlobalContext();
  useEffect(() => {
    const timeout = setTimeout(() => {
      showAlert();
    }, 200000);

    return () => clearTimeout(timeout);
  }, [list]);

  return (
    <div className={`alert alert-${type}`}>
      <div>
        {msg}
        {type === "danger" ? (
          <FaTrashAlt className="alert-icon" />
        ) : (
          <HiPlusSm className="alert-icon" />
        )}
      </div>
    </div>
  );
};

export default Alert;
