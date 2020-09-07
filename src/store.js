import {
  createStore
} from 'redux';

const initialState = {
  rut: '',
  celular: '',
  correo: '',
  renta: ''
}

const reducerData = (state = initialState, action) => {

  if (action.type === 'change') {
    return {
      ...state,
      [action.params.name]: action.params.value
    }
  }

  return state
}

export default createStore(reducerData);