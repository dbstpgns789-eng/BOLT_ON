// Business areas (ADR 0006). Copy is written new for this site (ADR 0002); the client checks facts only.
export const services = [
  {
    slug: 'substation',
    name: '고압 수변전설비 공사',
    tasks: ['큐비클·변전실 신설', '수전반·배전반 교체', '사용전검사 대응'],
  },
  {
    slug: 'capacity',
    name: '전기 증설·승압 공사',
    tasks: ['계약전력 증설', '단상 → 3상 승압', '모자분리·임시전력 신청'],
  },
  {
    slug: 'transformer',
    name: '변압기 교체 공사',
    tasks: ['노후 변압기 교체', '용량 재산정', '교체 후 점검'],
  },
  {
    slug: 'wiring',
    name: '내선·리모델링 전기공사',
    tasks: ['분전반 교체·재배선', '전시·인테리어 조명 전원', '콘센트·스위치 이설'],
  },
  {
    slug: 'newbuild',
    name: '신·증축 전기공사',
    tasks: ['인입·간선 공사', '동력·전등 설비', '준공 서류'],
  },
  {
    slug: 'solar',
    name: '태양광 설치 공사',
    tasks: ['지붕 태양광 설치', '인버터·배선 결선', '한전 연계 신청'],
  },
  {
    slug: 'ev',
    name: '전기차 충전소 설치 공사',
    tasks: ['완속·급속 충전기 설치', '충전용 전기 증설', '한전 전기 신청'],
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

// Default meta description (pages without their own).
export const siteDescription = '전기 증설부터 고압 수변전설비까지, 한전 신청 서류도 함께 준비합니다.';
