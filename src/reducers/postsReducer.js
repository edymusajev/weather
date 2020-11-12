export default (prevState = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload.data;
    default:
      return prevState;
  }
};
