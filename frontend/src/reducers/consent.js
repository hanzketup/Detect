let init = {
  confirmed: false,
  show_prompt: false
}

export default (state = init, action) => {
  switch (action.type) {
    case "SHOW_CONSENT_PROMPT":
      return {...state, show_prompt: true}

    case "CONSENT_CONFIRM_AND_HIDE":
      return {...state, show_prompt: false, confirmed: true}

    default:
      return state
  }
}
