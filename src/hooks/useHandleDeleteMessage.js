const filteredIds = [];

export const useHandleDeleteMessage = () => {
  const changeId = (id) => {
    filteredIds.push(id);
  };

  return { filteredIds, changeId };
};
