export default function authReducer(authState, action) {
  if (action.type === 'LOGIN' || action.type === 'REFRESH') {
    const token = action.payload.token;
    const name = action.payload.name;
    return {
      ...authState,
      token,
      name,
    };
  }

  if (action.type === 'LOGOUT') {
    const token = undefined;
    const name = undefined;
    return {
      ...authState,
      token,
      name,
    };
  }
}
