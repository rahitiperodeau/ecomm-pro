import {takeEvery} from 'redux-saga/effects';
import { PRODUCT_LIST } from './constant';
function* productSaga() {
    yield takeEvery(PRODUCT_LIST);
}

export default productSaga;