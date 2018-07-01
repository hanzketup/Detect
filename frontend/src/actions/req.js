
export const updateQuery = (query) => {
  return dispatch => {
    dispatch({type: "UPDATE_QUERY", payload:query})
    let exp = /[-a-zA-Z0-9@:%_+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?/gi
    exp.test(query)
    ? dispatch({type: "READY_FOR_SUBMIT"})
    : dispatch({type: "UNREADY_FOR_SUBMIT"})
  }
}

export const forceAudit = (state) => {
  return {type: "DO_FORCE_AUDIT", payload: state}
}
