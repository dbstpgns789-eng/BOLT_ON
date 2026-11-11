import { services } from './services';

// Top navigation (2026-11-11): four groups like wooilenc/sinrok; 고객지원 after edison's support menu.
// Each sub-link carries one short description line (edison dropdown). FAQ joins 고객지원 once the client gives Q&A.
// 한전 신청 안내 points at the home band until its page exists.
export type MenuItem = { label: string; href: string; sub: [string, string, string?][] };

export const menu: MenuItem[] = [
  {
    label: '회사소개',
    href: '/company/',
    sub: [
      ['회사개요', '/company/', '하는 일과 일하는 방식'],
      ['오시는 길', '/company/location/', '지도와 길찾기'],
    ],
  },
  {
    label: '사업분야',
    href: `/services/${services[0].slug}/`,
    sub: services.map((s) => [s.name, `/services/${s.slug}/`, s.tasks[0]] as [string, string, string]),
  },
  {
    label: '시공사례',
    href: '/cases/',
    sub: [
      ['전체 시공사례', '/cases/', '직접 시공한 현장 기록'],
      ['고압 수변전설비', '/cases/?area=substation'],
      ['증설·승압', '/cases/?area=capacity'],
      ['내선·리모델링', '/cases/?area=wiring'],
    ],
  },
  {
    label: '고객지원',
    href: '/consult/',
    sub: [
      ['상담 예약', '/consult/', '번호와 시간을 남기면 먼저 연락드립니다'],
      ['한전 신청 안내', '/#kepco', '증설·승압·임시전력 신청 절차와 서류'],
    ],
  },
];
