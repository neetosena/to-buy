const reducer = (state, action) => {
  if (action.type === "SHOW_ALERT") {
    return {
      ...state,
      show: action.payload.show,
      type: action.payload.type,
      msg: action.payload.msg,
    };
  }
  if (action.type === "HANDLE_CHANGE_CHECKBOX") {
    const checkboxIsSelected = state.list.map((item) => {
      if (item.id === action.payload.target.value) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });

    return { ...state, list: checkboxIsSelected };
  }

  if (action.type === "CHANGE_ITEM") {
    const changeItem = state.list.find((item) => item.id === action.payload);
    const name = changeItem.name;
    const id = changeItem.id;
    return {
      ...state,
      item: name,
      id: id,
      changeButton: true,
    };
  }

  if (action.type === "CLEAR_LIST") {
    if (window.confirm("Are you sure you want to delete the all items")) {
      return {
        ...state,
        list: [],
        show: true,
        type: "danger",
        msg: "All the items removed",
      };
    } else {
      return state;
    }
  }

  if (action.type === "REMOVE_ITEM") {
    const removeItem = state.list.filter((item) => item.id !== action.payload);
    return {
      ...state,
      list: removeItem,
      show: true,
      type: "danger",
      msg: "Item removed",
    };
  }

  if (action.type === "SORT_ITEM_BY_CHECKED") {
    const sortBySelected = [...state.list].sort(
      (a, b) => Number(b.checked) - Number(a.checked)
    );
    return {
      ...state,
      list: sortBySelected,
      show: true,
      type: "success-sorted",
      msg: "Items sorted",
    };
  }

  if (action.type === "CHECK_ITEM_AND_ADD_ITEM") {
    const checkItem = state.list.find(
      (item) => item.name.toLowerCase() === action.payload.toLowerCase()
    );

    const newList = {
      id: new Date().getTime().toString(),
      name: action.payload,
      checked: false,
    };

    if (typeof checkItem === "undefined") {
      return {
        ...state,
        list: [...state.list, newList],
        changeState: true,
        show: true,
        type: "success",
        msg: "Item added",
      };
    } else if (checkItem.name.toLowerCase() !== action.payload.toLowerCase()) {
      return {
        ...state,
        list: [...state.list, newList],
        changeState: true,
        show: true,
        type: "success",
        msg: "Item added",
      };
    } else {
      console.log("this item already exist");
      return {
        ...state,
        show: true,
        type: "danger-exist",
        msg: "Item already exist",
      };
    }
  }

  if (action.type === "EDIT_ITEM_IN_THE_HANDLE_SUBMIT") {
    const editedItem = state.list.map((item) => {
      if (item.id === action.payload.id) {
        return { ...item, name: action.payload.input };
      }
      return item;
    });

    return {
      ...state,
      item: "",
      changeState: false,
      changeButton: false,
      list: editedItem,
      show: true,
      type: "success-changed",
      msg: "Item Changed",
    };
  }
  throw new Error("no matching action type");
};

export default reducer;
