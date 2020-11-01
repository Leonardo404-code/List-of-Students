import {call, put, all, takeLatest} from 'redux-saga/effects';
import {toast} from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';
const requisicao = () =>
new Promise(resolve => {
  setTimeout(() => {
    resolve();
  },600);
});

function* exampleRequest(){
  try{
    toast.success('Requisição feita com sucesso ^_^')
    yield call(requisicao);
    yield put(actions.clicaBotaoSuccess());
  }catch{
    toast.error('Deu error :(')
    yield put(actions.clicaBotaoFailure());
  }
}

export default all([takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)])