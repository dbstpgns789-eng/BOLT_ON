export const ym = (v: string) => {
  const [y, m] = v.split('-');
  return `${y}년 ${Number(m)}월`;
};
