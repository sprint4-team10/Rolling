const BASE_URL = 'https://rolling-api.vercel.app/{4}-{10}/';

export const getRecipient = async ({ id }) => {
  const res = await fetch(`${BASE_URL}recipients/${id}/`);
  if (!res.ok) {
    throw new Error('recipient 정보를 불러오는데 실패하였습니다.');
  }
  const data = await res.json();
  return data;
};

export const getMessages = async ({ id }) => {
  const res = await fetch(`${BASE_URL}recipients/${id}/messages/`);
  if (!res.ok) {
    throw new Error('messages를 불러오는데 실패하였습니다.');
  }
  const data = await res.json();
  return data;
};
