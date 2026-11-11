// 한전 신청 안내 (/kepco/). Structure after wooilenc 한전서류 절차 (kinds → steps → documents → temporary power);
// wording is ours. No fees, deposits or lead times: those change with KEPCO rules and the client has not given them.
import type { Owner } from './service-pages';

export const kinds: { name: string; line: string; href: string }[] = [
  { name: '증설', line: '쓰는 전기가 한전과 계약한 용량을 넘을 때 계약전력을 늘립니다.', href: '/services/capacity/' },
  { name: '승압', line: '단상으로 받던 전기를 3상으로 바꿉니다. 동력 장비를 들일 때 필요합니다.', href: '/services/capacity/' },
  { name: '신설', line: '새로 지은 건물이나 전기가 없던 곳에서 처음으로 전기를 받습니다.', href: '/services/newbuild/' },
  { name: '임시전력', line: '공사 기간에만 쓰는 전기입니다. 공사가 끝나면 계량기를 반납합니다.', href: '/services/newbuild/' },
  // CHECK: client confirms 모자분리 wording
  { name: '모자분리', line: '계량기 하나로 함께 쓰던 전기를 호실이나 점포별로 나눠 따로 계약합니다.', href: '/services/capacity/' },
];

export const steps: { name: string; line: string; owner: Owner }[] = [
  { name: '상담과 현장 확인', line: '지금 계약전력과 쓰실 장비를 보고 어떤 신청이 필요한지 정합니다.', owner: 'volton' },
  { name: '서류 보내기', line: '아래 준비 서류를 사진이나 파일로 보내 주시면 됩니다.', owner: 'customer' },
  { name: '한전 접수', line: '신청서를 작성해 한전에 접수하고 진행 상황을 확인합니다.', owner: 'volton' },
  // CHECK: facility charge payer (same question as the area pages)
  { name: '시설부담금 납부', line: '한전이 안내하는 금액을 고객님이 한전에 직접 냅니다.', owner: 'customer' },
  { name: '전기공사', line: '신청 내용에 맞춰 인입, 계량기, 분전반 공사를 합니다.', owner: 'volton' },
  { name: '사용전점검 또는 검사', line: '한국전기안전공사가 설비를 검사합니다. 일정과 입회는 저희가 맡습니다.', owner: 'kepco' },
  { name: '전기 공급', line: '검사에 합격하면 결과가 한전에 전달되고, 한전이 전기를 보냅니다.', owner: 'kepco' },
];

// CHECK: client confirms the lists (wooilenc publishes the same split: tenant/owner × person/company)
export const docs: { who: string; person: string[]; company: string[] }[] = [
  {
    who: '전기를 쓰시는 분 (세입자)',
    person: ['신분증 사본', '사업자등록증 사본', '임대차계약서 사본', '전기요금 청구서 또는 계량기 번호', '건축물대장 또는 건물 등기부등본', '이메일 주소'],
    company: ['사업자등록증 사본', '법인인감증명서 (사용인감이면 사용인감계도 함께)', '임대차계약서 사본', '전기요금 청구서 또는 계량기 번호', '건축물대장 또는 건물 등기부등본', '이메일 주소'],
  },
  {
    who: '건물주',
    person: ['신분증 사본', '연락처'],
    company: ['사업자등록증 사본', '법인인감증명서', '연락처'],
  },
];
