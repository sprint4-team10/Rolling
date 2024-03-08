export const getBackgroundImageURL = async () => {
  const res = await fetch('https://rolling-api.vercel.app/background-images/');
  if (!res.ok) {
    throw new Error('BackgroundImage를 불러오는데 실패하였습니다.');
  }
  const data = await res.json();
  return data;
};
