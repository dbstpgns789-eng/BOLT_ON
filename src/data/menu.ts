import { services } from './services';

// Top navigation (2026-11-11): four groups like wooilenc/sinrok; 고객지원 after edison's support menu.
// FAQ joins 고객지원 once the client gives Q&A.
export type MenuItem = { label: string; href: string; sub: [string, string][] };

export const menu: MenuItem[] = [
  {
    label: '회사소개',
    href: '/company/',
    sub: [
      ['회사개요', '/company/'],
      ['오시는 길', '/company/location/'],
    ],
  },
  {
    label: '사업분야',
    href: `/services/${services[0].slug}/`,
    sub: services.map((s) => [s.name, `/services/${s.slug}/`] as [string, string]),
  },
  {
    label: '시공사례',
    href: '/cases/',
    sub: [
      ['전체 시공사례', '/cases/'],
      ['고압 수변전설비', '/cases/?area=substation'],
      ['증설·승압', '/cases/?area=capacity'],
      ['내선·리모델링', '/cases/?area=wiring'],
    ],
  },
  {
    label: '고객지원',
    href: '/consult/',
    sub: [
      ['상담 예약', '/consult/'],
      ['한전 신청 안내', '/kepco/'],
    ],
  },
];
