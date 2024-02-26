export const formatDate = (createdAt) => {
  const date = new Date(createdAt);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
};
