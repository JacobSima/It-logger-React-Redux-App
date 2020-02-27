import {GET_LOGS,
        SET_LOADING,
        LOGS_ERROR,
        ADD_LOG,
        DELETE_LOG,
        UPDATE_LOG,
        SET_CURRENT,
        CLEAR_CURRENT,
        SEARCH_LOGS} from './types'



// export const getLogs = () => {
//   return async (dispatch,getState) => {
//     setLoading()
//     const res = await fetch('/logs')
//     const data =  await res.json()
//     dispatch({
//       type:GET_LOGS,
//       payload:data
//     })

//   }
// }


// Get all the logs
export const getLogs = () => async dispatch => {
  try {
    setLoading()
    const res = await fetch('/logs')
    const data =  await res.json()
    dispatch({
      type:GET_LOGS,
      payload:data
    })
  } catch (error) {
    dispatch({
      type:LOGS_ERROR,
      payload:error.response.statusText 
    })
  }
}


// Add new logs
export const AddLogs = log => async dispatch => {
  try {
    setLoading()
    const res = await fetch('/logs',{
      method:"POST",
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(log)
    })
    const data =  await res.json() 
    dispatch({
      type:ADD_LOG,
      payload:data
    })
  } catch (error) {
    dispatch({
      type:LOGS_ERROR,
      payload:error.response.statusText 
    })
  }
}



// Delete log from server
export const deleteLogs = (id) => async dispatch => {
  try {
    setLoading()
    await fetch(`/logs/${id}`,{method:'DELETE'})
    
    dispatch({
      type:DELETE_LOG,
      payload:id
    })
  } catch (error) {
    dispatch({
      type:LOGS_ERROR,
      payload:error.response.statusText 
    })
  }
}


// Update log on server
export const updateLogs = log => async dispatch => {
  try {
    setLoading()
    const res = await fetch(`/logs/${log.id}`,{method:'PUT',body:JSON.stringify(log),headers:{"Content-Type":"application/json"}})
    const data = await res.json()
    dispatch({
      type:UPDATE_LOG,
      payload:data
    })
  } catch (error) {
    dispatch({
      type:LOGS_ERROR,
      payload:error.response.statusText 
    })
  }
}


// Search all the logs
export const searchLogs = text => async dispatch => {
  try {
    setLoading()
    const res = await fetch(`/logs?q=${text}`)
    const data =  await res.json()
    dispatch({
      type:SEARCH_LOGS,
      payload:data
    })
  } catch (error) {
    dispatch({
      type:LOGS_ERROR,
      payload:error.response.statusText 
    })
  }
}



// Set Current log
export const setCurrent = log => {
   return {
     type:SET_CURRENT,
     payload:log
   }
}

// Clear Current log
export const clearCurrent = () => {
  return {
    type:CLEAR_CURRENT
  }
}




//set loading to true
export const setLoading = () => {
  return{
    type:SET_LOADING
  }
}