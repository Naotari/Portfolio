import {
    SETLANGUAGE
}   from "./actions"

const initialState = {
    Language : "en"
  };

  const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SETLANGUAGE: 
            return {
                ...state,
                Language: action.payload
            }
        default: 
        return { ...state };
    }
}

export default reducer;