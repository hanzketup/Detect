let init = {
  inputEnabled: true,
  submitEnabled: false,
  query: '',
  force: false,
  challengeOpen: false,
}

export default (state = init, action) => {
  switch (action.type) {
    case "UPDATE_QUERY":
      return {...state, query: action.payload}

    case "READY_FOR_SUBMIT":
      return {...state, submitEnabled: true}

    case "UNREADY_FOR_SUBMIT":
      return {...state, submitEnabled: false}

    case "LOCK_REQ":
      return {...state, inputEnabled: !action.payload, submitEnabled: !action.payload}

    case "TOGGLE_CHALLENGE":
      return {...state, challengeOpen: action.payload}

    case "DO_FORCE_AUDIT":
      return {...state, force: action.payload}

    default:
      return state
  }
}
