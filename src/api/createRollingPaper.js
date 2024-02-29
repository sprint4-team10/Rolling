const BASE_URL = 'https://rolling-api.vercel.app/{4}-{10}/';

export async function createRollingPaper(body) {
  const res = await fetch(`${BASE_URL}recipients/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error('롤링페이퍼를 생성하는데 실패하였습니다.');
  }

  const data = await res.json();
  return data;
}
