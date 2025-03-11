export const initialStore=()=>{
  return{
    favourites:[],
    one_character:{"name":"eric",
    eye_color:"green",
    hair_color:"green",
    gender:"boy"
    }

  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    default:
      throw Error('Unknown action.');
  }    
}
