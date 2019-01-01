export default function(state, action) {
  switch (action.type) {
    case 'CITY_SELECTED':
      return action.payload;
    default:
      return state;
  }
}
