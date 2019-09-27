export function addRequest(data) {
  return {
    type: '@character/ADD_REQUEST',
    payload: { data },
  };
}
