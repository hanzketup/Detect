let init = {
  ready: false,
  status: 'Patience',
  result: [],
  audit_timestamp: 0,
  exec_time: 0,
  misc: {
    security: null,
    request_nr: 0,
    cookie_nr: 0,
    worker_nr: 0
  }
}

export default (state = init, action) => {
  switch (action.type) {

    case "CLEAR_RESULT":
      return {
        ready: false,
        status: 'Patience',
        result: [],
        audit_timestamp: 0,
        exec_time: 0,
        misc: {
          security: null,
          request_nr: 0,
          cookie_nr: 0,
          worker_nr: 0
        }
      }

    case "SET_RESULT":
      return {
        ready: true,
        ...action.payload
      }



    default:
      return state
  }
}
