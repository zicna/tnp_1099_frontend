const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'increment':
        console.log("increment from reducer")
        console.dir(state)
        return {...state, count: state.count +1 }
        case 'decrement':
            console.dir(state)
            console.log("decrement from reducer")
            return {...state, count: state.count -1} 
    default:
      return state
  }
}

export default reducer
