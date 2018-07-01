let init = {
  mainTitle: 'Detect',
  subTitle: 'CMS · Tooling · Services'
}

export default (state = init, action) => {
  switch (action.type) {

    case "SET_MAIN_TITLE":
      return {...state, mainTitle: action.payload}

    case "SET_SUB_TITLE":
      return {...state, subTitle: action.payload}

    default:
      return state
  }
}
