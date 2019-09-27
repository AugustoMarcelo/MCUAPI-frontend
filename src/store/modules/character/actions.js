export function addRequest(data) {
  return {
    type: '@character/ADD_REQUEST',
    payload: { data },
  };
}

export function updateRequest(data, id) {
  return {
    type: '@character/UPDATE_REQUEST',
    payload: { data, id },
  };
}
