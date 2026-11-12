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
  tasks?: { name: string; line: string; icon: 'up' | 'phase' | 'plus' | 'split' | 'divide' | 'clock' | 'box' | 'panel' | 'cable' | 'swap' | 'check' | 'light' | 'plug' | 'bolt' | 'doc' }[];
  process: { name: string; line: string; owner: Owner }[];
  faq: { q: string; a: string }[];
}

export const servicePages: Record<ServiceSlug, ServicePage> = {
  substation: {
    lead: '공장이나 큰 상가처럼 전기를 많이 쓰는 건물은 한전에서 고압으로 전기를 받습니다. 이 고압 전기를 건물에서 쓸 수 있게 낮춰 나눠 주는 변전설비를 새로 짓거나 바꿉니다.',
    term: { word: '수변전설비', meaning: '한전에서 받은 고압 전기를 건물에서 쓰는 저압으로 바꿔 나눠 주는 설비 묶음입니다. 수전반, 변압기, 배전반 등이 들어갑니다.' },
    needs: [
      '공장을 새로 짓거나 생산 설비를 크게 늘립니다',
      '쓰는 전기가 저압으로 받을 수 있는 범위를 넘었습니다',
      '오래된 수변전설비를 바꿔야 합니다',
      '옥외에 변전실(큐비클)을 새로 놓아야 합니다',
    ],
    scope: [
      '필요한 용량 계산과 설비 구성 계획',
      '한전 고압 수전 신청 서류 준비와 접수',
      '변전실 기초 공사와 큐비클 설치',
      '수전반·변압기·배전반 설치와 결선',
      '사용전검사 입회',
      '공사 후 A/S',
    ],
    tasks: [
      { name: '변전실 신설', line: '옥외 큐비클이나 실내 변전실을 새로 만들 때', icon: 'box' },
      { name: '수배전반 교체', line: '오래된 수전반·배전반을 바꿀 때', icon: 'panel' },
      { name: '용량 증설', line: '고압으로 받는 용량을 늘려야 할 때', icon: 'up' },
      { name: '고압 인입 공사', line: '한전 선로에서 건물까지 고압 전기를 끌어올 때', icon: 'cable' },
    ],
    process: [
      { name: '상담과 현장 확인', line: '쓰는 장비와 늘릴 계획을 듣고 필요한 용량과 설비 구성을 정합니다.', owner: 'volton' },
      { name: '한전 고압 수전 신청', line: '신청 서류를 준비해 한전에 접수합니다. 한전은 건물 가까이까지 고압 선로 공사를 합니다.', owner: 'volton' },
      // CHECK: facility charge payer
      { name: '시설부담금 납부', line: '한전이 고압 선로 공사에 따라 부과하는 비용으로, 고객님이 한전에 납부합니다.', owner: 'customer' },
      { name: '수변전설비 설치', line: '기초를 다지고 큐비클, 수전반, 변압기, 배전반을 설치해 결선합니다.', owner: 'volton' },
      { name: '사용전검사', line: '한국전기안전공사의 검사를 받습니다. 일정과 입회는 저희가 맡습니다.', owner: 'kepco' },
      { name: '수전과 사용 시작', line: '검사에 합격하면 한전이 고압 전기를 보내고, 건물에서 전기를 씁니다.', owner: 'kepco' },
    ],
    faq: [],
  },
  transformer: {
    lead: '오래된 변압기는 열이 많이 나고 효율이 떨어져 화재 위험이 커집니다. 지금 쓰는 전기에 맞는 용량을 다시 계산해 알맞은 변압기로 바꿉니다.',
    term: { word: '변압기', meaning: '한전에서 받은 높은 전압을 건물에서 쓰는 낮은 전압으로 바꾸는 기기입니다. 오래 쓰면 내부 절연이 약해집니다.' },
    needs: [
      '변압기에서 소리가 커지거나 열이 많이 납니다',
      '설치한 지 오래되어 점검에서 교체를 권유받았습니다',
      '장비를 늘려 지금 변압기 용량이 모자랍니다',
      '정전 없이 짧은 시간에 바꿔야 합니다',
    ],
    scope: [
      '변압기 상태 점검',
      '필요한 용량 다시 계산',
      '정전 시간을 줄이는 교체 계획',
      '변압기 교체와 결선',
      '교체 후 시험과 점검',
      '공사 후 A/S',
    ],
    tasks: [
      { name: '노후 변압기 교체', line: '오래되어 열이나 소음이 커진 변압기를 바꿀 때', icon: 'swap' },
      { name: '용량 변경', line: '쓰는 전기에 맞춰 변압기 용량을 늘리거나 줄일 때', icon: 'up' },
      { name: '상태 점검', line: '교체가 필요한지 먼저 확인하고 싶을 때', icon: 'check' },
    ],
    process: [
      { name: '현장 점검', line: '변압기의 온도, 소리, 외관과 지금 쓰는 전기를 확인합니다.', owner: 'volton' },
      { name: '용량 계산과 교체 계획', line: '알맞은 용량을 정하고, 정전 시간을 줄이는 작업 순서를 짭니다.', owner: 'volton' },
      { name: '정전 일정 정하기', line: '영업이나 생산에 지장이 적은 날과 시간을 고객님과 함께 정합니다.', owner: 'customer' },
      { name: '변압기 교체', line: '정한 시간에 기존 변압기를 빼고 새 변압기를 설치해 결선합니다.', owner: 'volton' },
      // CHECK: whether a 사용전검사 is needed depends on the capacity change
      { name: '시험과 점검', line: '절연과 동작을 시험하고, 필요하면 사용전검사를 받습니다.', owner: 'volton' },
      { name: '전기 다시 공급', line: '점검을 마치고 전기를 다시 보냅니다.', owner: 'volton' },
    ],
    faq: [],
  },
  wiring: {
    lead: '분전반에서 조명·콘센트까지 건물 안 배선을 새로 깔거나, 공간을 바꿀 때 맞춰 옮깁니다. 오래되어 위험한 배선도 점검한 뒤 바꿉니다.',
    term: { word: '내선공사', meaning: '건물 안으로 들어온 전기를 분전반에서 조명, 콘센트, 스위치까지 잇는 공사입니다.' },
    needs: [
      '인테리어를 바꾸면서 조명과 콘센트 위치를 옮깁니다',
      '배선이 오래되어 타는 냄새가 나거나 자주 끊깁니다',
      '전시·매장 조명이나 영상 설비 전원이 필요합니다',
      '분전반을 새것으로 바꾸고 싶습니다',
    ],
    scope: [
      '현장 확인과 배선 계획',
      '조명·콘센트·스위치 신설과 이설',
      '간선(케이블)과 분전반 공사',
      '노후 배선 교체',
      '전시 조명·영상 설비 전원',
      '공사 후 점검과 A/S',
    ],
    tasks: [
      { name: '조명 공사', line: '조명을 새로 달거나 위치를 바꿀 때', icon: 'light' },
      { name: '콘센트·스위치', line: '쓰는 자리에 맞춰 콘센트와 스위치를 옮길 때', icon: 'plug' },
      { name: '분전반 교체', line: '오래된 분전반을 바꾸거나 회로를 나눌 때', icon: 'panel' },
      { name: '노후 배선 교체', line: '오래되어 화재 위험이 있는 배선을 바꿀 때', icon: 'cable' },
    ],
    process: [
      { name: '상담과 현장 확인', line: '바꿀 공간과 쓰실 장비를 보고 필요한 회로를 정합니다.', owner: 'volton' },
      { name: '배선 계획', line: '조명과 콘센트 위치를 도면으로 정리해 함께 확인합니다.', owner: 'volton' },
      { name: '공사 일정 맞추기', line: '인테리어나 영업 일정에 맞춰 공사 날짜를 정합니다.', owner: 'customer' },
      { name: '배선·분전반 공사', line: '배관과 배선, 분전반 공사를 하고 기구를 답니다.', owner: 'volton' },
      { name: '점검과 시험', line: '회로마다 절연과 동작을 확인합니다.', owner: 'volton' },
      { name: '마무리', line: '쓰시는 방법을 설명드리고 공사를 마칩니다.', owner: 'volton' },
    ],
    faq: [],
  },
  newbuild: {
    lead: '상가, 학교, 공장처럼 새로 짓거나 늘리는 건물의 전기설비를 맡습니다. 도면 검토부터 한전 신청, 공사, 준공 서류까지 한 번에 진행합니다.',
    term: { word: '사용전검사', meaning: '새로 설치하거나 바꾼 전기설비를 쓰기 전에 받는 법정 안전검사입니다. 합격해야 전기를 쓸 수 있습니다.' },
    needs: [
      '건물을 새로 짓거나 증축합니다',
      '공사 기간에 쓸 임시전력이 필요합니다',
      '공장 동력 설비를 새로 들입니다',
      '설계 도면에 맞춰 전기공사를 맡길 곳을 찾습니다',
    ],
    scope: [
      '전기 도면 검토',
      '한전 신규 전기 신청과 임시전력',
      '인입·간선(메인 케이블) 공사',
      '배관·배선과 동력·전등 설비',
      '조명·콘센트 기구 마감',
      '사용전검사와 준공 서류',
    ],
    tasks: [
      { name: '임시전력', line: '공사 기간에만 쓰는 전기를 들일 때', icon: 'clock' },
      { name: '인입·간선 공사', line: '한전 선로에서 건물 안까지 메인 전기를 끌어올 때', icon: 'cable' },
      { name: '동력·전등 설비', line: '기계를 돌리는 동력과 조명 회로를 만들 때', icon: 'bolt' },
      { name: '준공 서류', line: '검사와 준공에 필요한 서류를 준비할 때', icon: 'doc' },
    ],
    process: [
      { name: '도면 검토와 협의', line: '설계 도면과 공정표를 보고 전기공사 범위와 일정을 맞춥니다.', owner: 'volton' },
      { name: '한전 신청과 임시전력', line: '공사에 쓸 임시전력과 준공 뒤 쓸 전기를 한전에 신청합니다.', owner: 'volton' },
      // CHECK: facility charge payer
      { name: '시설부담금 납부', line: '한전이 새 전기 공급에 따라 부과하는 비용으로, 고객님이 한전에 납부합니다.', owner: 'customer' },
      { name: '전기설비 공사', line: '공정에 맞춰 배관·배선, 간선, 동력·전등 설비를 시공합니다.', owner: 'volton' },
      { name: '사용전검사', line: '한국전기안전공사의 검사를 받습니다. 일정과 입회는 저희가 맡습니다.', owner: 'kepco' },
      { name: '준공과 사용 시작', line: '준공 서류를 정리해 드리고, 한전 계량기가 달리면 전기를 씁니다.', owner: 'volton' },
    ],
    faq: [],
  },

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
