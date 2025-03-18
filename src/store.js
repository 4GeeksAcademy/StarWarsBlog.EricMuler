export const initialStore = () => {
  return {
    favourites: [],
    one_character: {
      "name": "eric",
      eye_color: "Brown",
      hair_color: "Black",
      gender: "Helicopter"
    },
    todos: []  // creo 'todos' 
  };
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "addFavourites":

      return {
        ...store,
        favourites: [...store.favourites, action.favourite]
      };

    default:
      throw Error("Unknown action.");
  }
}
