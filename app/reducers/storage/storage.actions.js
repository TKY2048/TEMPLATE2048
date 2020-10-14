import actionTypes from 'storage.actionTypes';

export const persistValue = (key, value) => async (dispatch, getState) =>
  dispatch({
    type: actionTypes.SET_STATE,
    payload: {
      key,
      value,
    },
  });

export const removeValue = (key, value) => async (dispatch, getState) =>
  dispatch({
    type: actionTypes.REMOVE_STATE,
    payload: {
      key,
      value,
    },
  });
