import axios from 'axios';
import { setFlash } from './flash';
import { BASE_URL } from '../Secrets/env';

export const getServices = (callback) => {
  return dispatch => {
    axios.get(`${BASE_URL}/api/services`)
      .then(res => {
        dispatch({ type: 'GET_SERVICES', services: res.data})
        callback()
      })
      .catch(err => {
        dispatch(setFlash('Error loading services, please try again.', 'error'))
      })
  }
}

export const updateService = (service, id, history) => {
  return (dispatch) => {
    axios.put(`${BASE_URL}/api/services/${id}`, { service })
      .then(res => {
        dispatch({ type: 'UPDATE_SERVICE', service: service, id: id, headers: res.headers })
        dispatch(setFlash('Successfully Updated Service.', 'success'))
      })
      .catch(err => {
        dispatch(setFlash('Failed to update service', 'error'))
      })
  }
}

export const deleteService = (id) => {
  return (dispatch) => {
    axios.delete(`${BASE_URL}/api/services/${id}`)
      .then(res => {
        dispatch({ type: 'DELETE_SERVICE', id, headers: res.headers });
        dispatch(setFlash('Successfully removed service', 'success'));
      })
      .catch(err => {
        console.log('Error:', err)
        dispatch(setFlash('Error Deleting Service. Try Again,', 'error'));
      });
  }
}

export const addService = (service) => {
  return (dispatch) => {
    axios.post(`${BASE_URL}/api/services`, { service })
      .then(res => {
        dispatch({ type: 'ADD_SERVICE', service: service, headers: res.headers })
        dispatch(setFlash('Successfully Added Service.', 'success'));
      })
      .catch(err => {
        dispatch(setFlash('Failed to add service', 'error'))
      })
  }
}