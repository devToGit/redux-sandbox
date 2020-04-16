import { createStore } from 'redux';
import reducer from './reducer';
import { inc, dec, rnd } from './actions';


const store = createStore(reducer);
const { dispatch } = store;

const bindActionCretor = (creator, dispatch) => (...args) => {
  dispatch(creator(...args));
};

const incDispatch = bindActionCretor(inc, dispatch);
const decDispatch = bindActionCretor(dec, dispatch);
const rndDispatch = bindActionCretor(rnd, dispatch);

document
  .getElementById('inc')
  .addEventListener('click', incDispatch);

document
  .getElementById('dec')
  .addEventListener('click', decDispatch);

document
  .getElementById('rnd')
  .addEventListener('click', () => {
    const payLoad = Math.floor(Math.random()*10);
      rndDispatch(payLoad);
  });

const update = () => {
  document
    .getElementById('counter')
    .innerHTML = store.getState();
};

store.subscribe(update);
