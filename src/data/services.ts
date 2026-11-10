// Business areas (ADR 0006). Copy is written new for this site (ADR 0002); the client checks facts only.
export const services = [
  {
    slug: 'substation',
    name: '고압 수변전설비 공사',
    short: '한전에서 고압으로 받는 전기를 건물에서 쓸 수 있게 바꿔 주는 변전실을 새로 짓거나 바꿉니다.',
    tasks: ['큐비클·변전실 신설', '수전반·배전반 교체', '사용전검사 대응'],
  },
  {
    slug: 'capacity',
    name: '전기 증설·승압 공사',
    short: '쓰는 전기가 계약전력을 넘어 차단기가 자주 떨어진다면, 계약전력과 설비를 함께 늘립니다.',
    tasks: ['계약전력 증설', '단상 → 3상 승압', '모자분리·임시전력 신청'],
  },
  {
    slug: 'transformer',
    name: '변압기 교체 공사',
    short: '오래된 변압기는 과열과 화재 위험이 커집니다. 필요한 용량을 다시 계산해 알맞게 교체합니다.',
    tasks: ['노후 변압기 교체', '용량 재산정', '교체 후 점검'],
  },
  {
    slug: 'wiring',
    name: '내선·리모델링 전기공사',
    short: '분전반에서 조명·콘센트까지 건물 안 배선을 새로 깔거나, 공간을 바꿀 때 맞춰 옮깁니다.',
    tasks: ['분전반 교체·재배선', '전시·인테리어 조명 전원', '콘센트·스위치 이설'],
  },
  {
    slug: 'newbuild',
    name: '신·증축 전기공사',
    short: '상가·학교·공장 같은 새 건물이나 늘린 공간의 전기설비를 설계부터 준공까지 맡습니다.',
    tasks: ['인입·간선 공사', '동력·전등 설비', '준공 서류'],
  },
] as const;

export type ServiceSlug = (typeof services)[number]['slug'];

// The client's own five steps (요청서 3-10).
export const steps = [
  { name: '상담', line: '전화로 건물과 지금 쓰는 전기 상황을 듣습니다.' },
  { name: '현장 방문', line: '직접 가서 설비와 필요한 용량을 확인합니다.' },
  { name: '견적', line: '공사 범위와 비용을 항목별로 설명드립니다.' },
  { name: '시공', line: '한전 신청 서류를 함께 준비하며 공사합니다.' },
  { name: '완료', line: '검사를 마치고 전기를 켠 뒤에도 A/S를 책임집니다.' },
] as const;

// Hero slides, unfolded from the CEO's own three sentences (요청서 3-2).
export const slidesCopy = [
  { head: '수변전설비부터 증설·승압까지', line: '볼트온이엔씨는 증설·승압, 수변전설비, 리모델링, 신·증축 전기공사를 전문으로 합니다.' },
  { head: '현장을 먼저 보고 시공합니다', line: '필요한 용량과 공사 범위를 설명드린 뒤 시작하고, 한전 신청 서류도 함께 준비합니다.' },
  { head: '고객님의 전기가 끊김 없이 켜져 있도록', line: '정직한 견적, 안전한 시공, 공사 후 책임 있는 A/S.' },
];

export const hero = {
  headline: '현장을 먼저 보고, 필요한 만큼 시공합니다',
  sentence: '전기 증설부터 고압 수변전설비까지, 한전 신청 서류도 함께 준비합니다.',
};
