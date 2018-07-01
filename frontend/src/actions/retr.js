
export const launchChallenge = () => {
  return {type: "TOGGLE_CHALLENGE", payload: true}
}

export const fetchAudit = (query, reToken, force=false) => {
  return async dispatch => {
    dispatch({type: "LOCK_REQ", payload:true})
    dispatch({type: "CLEAR_RESULT"})
    dispatch({type: "TOGGLE_CHALLENGE", payload:false})

    dispatch({type: "SET_MAIN_TITLE", payload: "All right!"})
    dispatch({type: "SET_SUB_TITLE", payload: "Just a sec..."})

    let req = await fetch('/audit', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        url: query,
        token: reToken,
        force: force
      })
    })

    let reqJson = await req.json()
    dispatch({type: "LOCK_REQ", payload:false})
    if(force){dispatch({type: "DO_FORCE_AUDIT", payload:false})} // Reset force state

    if(reqJson.status === "success"){
      dispatch({type: "SET_MAIN_TITLE", payload: "Done!"})
      dispatch({type: "SET_SUB_TITLE", payload: "you'll find the results below"})
      dispatch({type: "SET_RESULT", payload: reqJson})
    } else{
      dispatch({type: "SET_MAIN_TITLE", payload: "Failed."})
      dispatch({type: "SET_SUB_TITLE", payload: (reqJson.message || "Something went wrong with your request.")})
    }

  }
}
