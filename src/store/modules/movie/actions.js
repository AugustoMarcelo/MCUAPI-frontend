export function addRequest(data) {
  return {
    type: '@movie/ADD_REQUEST',
    payload: { data },
  };
}

export function updateRequest(data, id) {
  return {
    type: '@movie/UPDATE_REQUEST',
    payload: { data, id },
  };
}
