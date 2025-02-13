export default function ordersReducer(ordersState, action) {
  if (action.type === 'SET') {
    return { ...ordersState, orders: action.payload.orders };
  }
}
