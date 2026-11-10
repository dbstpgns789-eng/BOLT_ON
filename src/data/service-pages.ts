// Business-area page content (research/industry/SERVICE-PAGE.md).
// Written new for this site (ADR 0002). Lines marked CHECK need the client's confirmation before launch.
import type { ServiceSlug } from './services';

export type Owner = 'volton' | 'customer' | 'kepco';
export const ownerLabel: Record<Owner, string> = { volton: '볼트온이엔씨', customer: '고객', kepco: '한전·안전공사' };

export interface ServicePage {
  lead: string;
  term?: { word: string; meaning: string };
  needs: string[];
  scope: string[];
  tasks?: { name: string; line: string; icon: 'up' | 'phase' | 'plus' | 'split' | 'divide' | 'clock' }[];
  process: { name: string; line: string; owner: Owner }[];
  faq: { q: string; a: string }[];
}

export const servicePages: Partial<Record<ServiceSlug, ServicePage>> = {
  capacity: {
    lead: '쓰는 전기가 계약전력을 넘으면 차단기가 자주 떨어지고 설비에 무리가 갑니다. 필요한 용량을 계산해 계약전력을 늘리고, 그에 맞게 설비를 바꿉니다.',
    term: { word: '계약전력', meaning: '한전과 계약한, 한 번에 쓸 수 있는 최대 전력(kW)입니다. 이보다 많이 쓰면 차단기가 떨어집니다.' },
    needs: [
      '차단기가 자주 떨어집니다',
      '냉난방기나 장비를 새로 들입니다',
      '가게 업종을 바꿔 전기를 더 씁니다',
      '3상 전기가 필요한 기계를 들입니다',
    ],
    scope: [
      '현장 점검과 필요 용량 계산',
      '한전 증설 신청 서류 준비와 접수',
      '분전반·차단기·인입 배선 교체',
      '단상에서 3상으로 승압 공사',
      '사용전 점검 입회',
      '공사 후 A/S',
    ],
    tasks: [
      { name: '전기 증설', line: '지금 계약전력보다 전기를 더 써야 할 때', icon: 'up' },
      { name: '전기 승압', line: '단상을 3상으로 바꾸는 등 공급 방식을 바꿀 때', icon: 'phase' },
      { name: '전기 신설', line: '전기가 없던 곳에 새로 전기를 들일 때', icon: 'plus' },
      { name: '모자분리', line: '고압 건물에서 세대별 한전 계량기를 따로 달 때', icon: 'split' },
      { name: '구좌분할', line: '한 계량기의 계약전력을 여러 계량기로 나눌 때', icon: 'divide' },
      { name: '임시전력', line: '공사 현장처럼 잠깐 동안만 전기가 필요할 때', icon: 'clock' },
    ],
    process: [
      { name: '상담과 현장 확인', line: '지금 쓰는 전기와 늘릴 장비를 보고 필요한 용량을 계산합니다.', owner: 'volton' },
      { name: '한전 증설 신청', line: '신청 서류를 준비해 한전에 접수합니다. 고객님께는 필요한 서류만 요청드립니다.', owner: 'volton' },
      // CHECK: who pays the facility charge (공사 이력에 "고객 납부"와 "자사 납부"가 모두 있음)
      { name: '시설부담금 납부', line: '한전이 늘린 용량에 따라 부과하는 비용으로, 고객님이 한전에 납부합니다.', owner: 'customer' },
      { name: '증설·승압 공사', line: '분전반과 차단기, 배선을 늘린 용량에 맞게 바꿉니다.', owner: 'volton' },
      { name: '사용전 점검', line: '한국전기안전공사의 점검을 받습니다. 점검 일정과 입회는 저희가 맡습니다.', owner: 'kepco' },
      { name: '계량기 설치와 사용 시작', line: '한전이 계량기를 바꾸면 늘린 용량으로 전기를 씁니다.', owner: 'kepco' },
    ],
    faq: [
      { q: '차단기가 자꾸 떨어지는데 꼭 증설해야 하나요?', a: '용량이 부족해서일 수도 있지만, 누전이나 낡은 차단기 때문일 수도 있습니다. 현장을 먼저 확인하고 증설이 필요한지 말씀드립니다.' },
      { q: '한전 서류는 제가 준비해야 하나요?', a: '신청 서류는 저희가 준비해서 접수합니다. 신분증이나 건물 관련 서류처럼 고객님만 줄 수 있는 서류만 요청드립니다.' },
      // CHECK
      { q: '시설부담금은 얼마나 나오나요?', a: '한전이 늘리는 용량과 건물 여건에 따라 정합니다. 신청 후 한전이 금액을 알려 주면 바로 안내드립니다.' },
    ],
  },
};
