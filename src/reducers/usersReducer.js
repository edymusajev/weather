export default (prevState = [], action) => {
  switch (action.type) {
    case 'FETCH_USER':
      return [...prevState, action.payload.data];
    default:
      return prevState;
  }
};
