import { services } from './services';

// Top navigation with every section's sub-links (client asked for categories in the top bar).
// Hrefs point at home anchors until the sub-pages exist (Phase 5).
export const menu: { label: string; href: string; sub: [string, string][] }[] = [
  { label: '회사소개', href: '/company/', sub: [['회사개요', '/company/'], ['오시는 길', '/company/location/']] },
  { label: '사업분야', href: `/services/${services[0].slug}/`, sub: services.map((s) => [s.name, `/services/${s.slug}/`] as [string, string]) },
  { label: '시공사례', href: '/cases/', sub: [['전체 시공사례', '/cases/'], ['고압 수변전설비', '/cases/?area=substation'], ['증설·승압', '/cases/?area=capacity'], ['내선·리모델링', '/cases/?area=wiring']] },
  { label: '상담 문의', href: '/consult/', sub: [['상담 예약', '/consult/']] },
  { label: '한전 신청 안내', href: '/#kepco', sub: [['신청 절차', '/#kepco'], ['준비 서류', '/#kepco'], ['자주 묻는 질문', '/#kepco']] },
];
