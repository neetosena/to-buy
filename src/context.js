import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};

const initialState = {
  id: "",
  item: "",
  list: getLocalStorage(),
  changeButton: false,
  changeState: false,
  show: false,
  type: "",
  msg: "",
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(state.list));
  }, [state.list]);

  const showAlert = (show, type, msg) => {
    dispatch({ type: "SHOW_ALERT", payload: { show, type, msg } });
  };

  const handleChange = (e) => {
    dispatch({ type: "HANDLE_CHANGE_CHECKBOX", payload: e });
  };

  const checkItemAndAddItem = (input) => {
    dispatch({ type: "CHECK_ITEM_AND_ADD_ITEM", payload: input });
  };

  const changeItem = (id) => {
    dispatch({ type: "CHANGE_ITEM", payload: id });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const sortByChecked = () => {
    dispatch({ type: "SORT_ITEM_BY_CHECKED" });
  };

  const clearList = () => {
    dispatch({ type: "CLEAR_LIST" });
  };

  const editItemHandleSubmit = (id, input) => {
    dispatch({
      type: "EDIT_ITEM_IN_THE_HANDLE_SUBMIT",
      payload: { id: id, input: input },
    });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleChange,
        changeItem,
        removeItem,
        sortByChecked,
        checkItemAndAddItem,
        editItemHandleSubmit,
        clearList,
        showAlert,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
