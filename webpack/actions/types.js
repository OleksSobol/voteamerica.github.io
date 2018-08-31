const LOGIN_DETAILS = 'LOGIN_DETAILS';
const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGOUT = 'LOGOUT';

const GET_DRIVERS_LIST = 'GET_DRIVERS_LIST';
const HIDE_DRIVERS_LIST = 'HIDE_DRIVERS_LIST';

const getAsyncTypes = type => ({
  success: type + '_SUCCESS',
  fail: type + '_FAIL',
  error: type + '_ERROR'
});

const loginRequestTypes = getAsyncTypes(LOGIN_REQUEST);

const getDriversListTypes = getAsyncTypes(GET_DRIVERS_LIST);

export {
  LOGIN_DETAILS,
  LOGIN_REQUEST,
  loginRequestTypes,
  LOGOUT,
  GET_DRIVERS_LIST,
  HIDE_DRIVERS_LIST,
  getDriversListTypes
};