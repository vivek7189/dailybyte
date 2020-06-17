export const addressReducer = (state, action) => {
  switch (action.type) {
    case "city":
      return { ...state, city: action.city };
    case "pin":
      return { ...state, pin: action.pin + state.pin };
    case "country":
      return { ...state, country: action.country };
    default:
      return state;
  }
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, { name: action.name, completed: false }];
    case "remove":
      return state.filter(data => data.name !== action.name);
    default:
      return state;
  }
};
