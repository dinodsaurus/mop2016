import { createStore } from 'redux';

function loading(state = false, action) {
  switch (action.type) {
  case 'LOADING':
    return state = true
  case 'NOLOADING':
    return state = false
  default:
    return state
  }
}

export default createStore(loading);
