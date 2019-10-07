export function addRequest(data) {
  return {
    type: '@tvshow/ADD_REQUEST',
    payload: { data },
  };
}

export function updateRequest(data, id) {
  return {
    type: '@tvshow/UPDATE_REQUEST',
    payload: { data, id },
  };
}
