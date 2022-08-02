import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import { FaTrashAlt } from "react-icons/fa";
import { HiPlusSm } from "react-icons/hi";
import { GoSync } from "react-icons/go";

const Alert = () => {
  const { list, type, msg, show, showAlert } = useGlobalContext();

  useEffect(() => {
    const timeout = setTimeout(() => {
      showAlert();
    }, 2000);

    return () => clearTimeout(timeout);
  }, [list, show]);
  console.log("ALERT", msg, type);
  return (
    <div className={`alert alert-${type}`}>
      <div>
        {msg}
        {type === "danger" ? (
          <FaTrashAlt className="alert-icon" />
        ) : type === "success" ? (
          <HiPlusSm className="alert-icon" />
        ) : type === "success-changed" ? (
          <GoSync className="alert-icon" />
        ) : null}
      </div>
    </div>
  );
};

export default Alert;
