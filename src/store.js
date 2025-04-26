export const initialStore = () => ({
  favourites: []
});

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "addFavourites":
      return {
        ...store,
        favourites: [...store.favourites, action.favourite]
      };
    case "removeFavourites":
      return {
        ...store,
        favourites: store.favourites.filter(
          f => !(f.uid === action.uid && f.category === action.category)
        )
      };
    default:
      throw Error("Unknown action.");
  }
}
