// 한전 신청 안내 (/kepco/). Steps, documents and the common checklist come from web research (not the client), 2026-11-11;
// the page layout follows wooilenc 한전서류 절차. Deposit options checked against KEPCO's published guidance (2026-11-12).
// No fees, deposits or lead times: they change with KEPCO's rules, so the page says they are given at the consultation.
import type { Owner } from './service-pages';

export const kinds: { name: string; line: string; href: string }[] = [
  { name: '신설', line: '새로 지은 건물이나 전기가 없던 곳에서 처음으로 전기를 받습니다.', href: '/services/newbuild/' },
  { name: '증설', line: '쓰는 전기가 한전과 계약한 용량을 넘을 때 계약전력을 늘립니다.', href: '/services/capacity/' },
  { name: '승압', line: '단상으로 받던 전기를 3상으로 바꿉니다. 동력 장비를 들일 때 필요합니다.', href: '/services/capacity/' },
  { name: '계약전력 변경', line: '실제로 쓰는 전기에 맞게 한전과 계약한 용량을 조정합니다.', href: '/services/capacity/' },
  { name: '임시전력', line: '공사 기간에만 쓰는 전기입니다. 공사가 끝나면 계량기를 반납합니다.', href: '/services/newbuild/' },
];

// Eight steps from the web research; owners are ours.
export const steps: { name: string; line: string; owner: Owner }[] = [
  { name: '상담과 현장 확인', line: '신청 내용과 현장 조건을 확인합니다.', owner: 'volton' },
  { name: '필요 서류 안내', line: '신청 조건에 맞는 준비 서류를 알려 드립니다.', owner: 'volton' },
  { name: '신청 서류 준비', line: '안내받은 서류를 사진이나 파일로 보내 주시면 됩니다.', owner: 'customer' },
  { name: '현장 공사', line: '전기공사가 필요하면 공사를 진행합니다.', owner: 'volton' },
  { name: '안전점검 또는 사용전검사', line: '전기설비 기준에 따라 한국전기안전공사의 확인을 받습니다.', owner: 'kepco' },
  { name: '한전 접수', line: '준비한 서류로 한전에 신청을 접수합니다.', owner: 'volton' },
  { name: '처리 결과 확인', line: '처리 결과를 확인하고, 보완할 것이 있으면 바로 챙깁니다.', owner: 'volton' },
  { name: '사용 또는 변경 완료', line: '한전 처리가 끝나면 전기를 쓰거나 바뀐 계약이 적용됩니다.', owner: 'kepco' },
];

// From the web research (matches wooilenc's tenant/owner split).
export const docs: { who: string; person: string[]; company: string[] }[] = [
  {
    who: '전기를 쓰시는 분 (임차인)',
    person: ['신분증 사본', '사업자등록증 사본', '임대차계약서 사본', '전기요금 고지서 또는 한전 고객번호'],
    company: ['사업자등록증 사본', '법인인감증명서', '사용인감계', '임대차계약서 사본', '전기요금 고지서 또는 한전 고객번호'],
  },
  {
    who: '건물주 (임대인)',
    person: ['신분증 사본', '연락처'],
    company: ['사업자등록증 사본', '법인인감증명서', '연락처'],
  },
];

export const common = ['현장 주소', '계약전력', '현장 사진', '분전반 또는 계량기 사진'];
