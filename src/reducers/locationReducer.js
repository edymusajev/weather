export default (prevState = {}, action) => {
  switch (action.type) {
    case 'FETCH_LOCATION':
      return action.payload;
    default:
      return prevState;
  }
};
