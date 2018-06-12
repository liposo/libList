export const selectLibrary = libraryId => {
  // console.log(libraryId);
  return {
    type: "SELECT_LIBRARY",
    payload: libraryId
  };
};
