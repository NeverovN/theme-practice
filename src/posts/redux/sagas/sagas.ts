import {takeLatest, put, spawn, all, call, delay} from 'redux-saga/effects';

// const
import {PostActionNames} from '../constants/actions';
import {PostReducerActions} from '../actions';

// DI
import {DependencyManager} from '../../../DI';
import {IPost} from '../../types/post';

export function* watchRequest() {
  yield takeLatest(PostActionNames.REQUEST, getPostData);
}

export function* getPostData() {
  try {
    yield put(PostReducerActions.LOADING());
    const repository = DependencyManager.getDependency();
    const data: IPost[] = yield call(repository.getPosts);
    yield delay(3000);
    yield put(PostReducerActions.SUCCESS(data));
  } catch (error) {
    yield put(PostReducerActions.ERROR({error: 'error'}));
  }
}

export function* postSaga() {
  const sagas = [watchRequest];
  yield all(sagas.map(saga => spawn(saga)));
}
