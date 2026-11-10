// The one place for company facts. Empty string = not known yet; the UI hides that row.
// Fill the empty ones when the corporation, business registration and license are issued
// (docs/PLAN.md §0), then the site can open.
export const company = {
  nameKo: '볼트온이엔씨',
  nameEn: 'VOLT ON E&C',
  legalName: '', // e.g. 주식회사 볼트온이엔씨, after incorporation
  ceo: '장준혁',
  bizNumber: '', // 사업자등록번호
  licenseNumber: '', // 전기공사업 등록번호
  founded: '',
  address: '경기도 남양주시 화도읍 녹촌리 380-1',
  phone: '010-5695-9113',
  email: 'wkdjj2003@naver.com',
  hours: '평일 09:00–18:00',
  kakaoChannelUrl: '', // after the 법인 channel is opened
  domain: 'volton.co.kr',
};

export const telHref = `tel:${company.phone.replace(/-/g, '')}`;
