import axios from 'axios';
import { setFlash } from './flash';
import { BASE_URL } from '../Secrets/env';

export const getAppointments = (callback) => {
  return dispatch => {
    axios.get(`${BASE_URL}/api/appointments`)
      .then(res => {
        dispatch({ type: 'GET_APPOINTMENTS', appointments: res.data })
        callback()
      })
      .catch(err => {
      })
  }
}

export const updateAppointment = (appointment, id) => {
  return (dispatch) => {
    axios.put(`${BASE_URL}/api/appointments/${id}`, { appointment })
      .then(res => {
        dispatch({ type: 'UPDATE_APPOINTMENT', appointment: appointment, id: id, headers: res.headers })
      })
      .catch(err => {
        dispatch(setFlash('Failed to update appointment', 'error'))
      })
  }
}

export const deleteAppointment = (id, status, number) => {
  return (dispatch) => {
    axios.delete(`${BASE_URL}/api/appointments/${id}/${status}/${number}`)
      .then(res => {
        dispatch({ type: 'DELETE_APPOINTMENT', id, headers: res.headers });
      })
      .catch(err => {
        dispatch(setFlash('Error Deleting Appointment. Try Again,', 'error'));
      });
  }
}

export const addAppointment = (appointment) => {
  return (dispatch) => {
    axios.post(`${BASE_URL}/api/appointments`, { appointment })
      .then(res => {
        dispatch({ type: 'ADD_APPOINTMENT', appointment: appointment })
        dispatch(setFlash('Thanks for booking.', 'success'))
      })
      .catch(err => {
        console.log(err)
        dispatch(setFlash('Failed to add appointment', 'error'))
      })
  }
}

export const getUserAppointments = (uid, callback) => {
  return dispatch => {
    axios.get(`${BASE_URL}/api/appointments/${uid}`)
      .then(res => {
        dispatch({ type: 'GET_USERAPPOINTMENTS', userAppointments: res.data })
        callback()
      })
      .catch(err => {
        console.log(err)
        dispatch(setFlash('Error loading appointments, please try again.', 'error'))
      })
  }
}

export const clearUserAppointments = () => {
  return { type: 'CLEAR_USERAPPOINTMENTS' };
};