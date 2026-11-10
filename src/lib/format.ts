export const ym = (v: string) => {
  const [y, m] = v.split('-');
  return `${y}년 ${Number(m)}월`;
};
export const stageKo = { before: '공사 전', during: '공사 중', after: '공사 후' } as const;
