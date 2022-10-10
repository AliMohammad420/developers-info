export const actionType = {

    ADD_DEVELOPER: 'ADD_DEVELOPER',
    REMOVE_DEVELOPER: 'REMOVE_DEVELOPER'
}


export const developerReducer = ( state, action ) => {

    switch ( action.type ) {
        case actionType.ADD_DEVELOPER:
            return [...state,
                {
                    id: state.length + 1,
                    name: action.payload.name,
                    programmigLanguage: action.payload.programmingLanguage,
                    techUsed: action.payload.techUsed,
                    favFood: action.payload.favFood,
                    favDrink: action.payload.favDrink
                }]
        case actionType.REMOVE_DEVELOPER:
            return state.filter( developer => developer.id !== action.payload.id )
        default:
            return state
    }
}
  