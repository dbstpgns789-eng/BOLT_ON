// Photos per business area. Real Volt On sites first; licensed stock only where none exists (docs/photo-credits.md).
// 신·증축, 태양광, 전기차 충전소 use stock (no Volt On case yet; the client sends solar/EV photos later); 김해 미술관 is not used here because it was interior electrical work.
import type { ImageMetadata } from 'astro';
import type { ServiceSlug } from './services';
import substationStock from '../assets/stock/substation-transformer.jpg';
import insulators from '../assets/stock/transformer-insulators.jpg';
import panel from '../assets/stock/distribution-panel.jpg';
import studs from '../assets/stock/remodeling-studs.jpg';
import cheongju from '../assets/cases/cheongju-substation/01-substation.jpg';
import dongdaemunAfter from '../assets/cases/dongdaemun-kindergarten/03-after.jpg';
import seodaemunLight from '../assets/cases/seodaemun-prison/03-sculpture-light.jpg';
import cranes from '../assets/stock/tower-cranes.jpg';
import apartments from '../assets/stock/apartment-construction.jpg';
import solarRoof from '../assets/stock/solar-factory-roof.jpg';
import solarWork from '../assets/stock/solar-install-work.jpg';
import evWall from '../assets/stock/ev-wall-charger.jpg';
import evGarage from '../assets/stock/ev-garage-charger.jpg';

export const serviceMedia: Record<ServiceSlug, { banner: ImageMetadata; intro: ImageMetadata; introAlt: string }> = {
  substation: { banner: substationStock, intro: cheongju, introAlt: '청주 식품공장에 설치한 옥외 변전설비' },
  capacity: { banner: panel, intro: dongdaemunAfter, introAlt: '증설 공사를 마친 유치원 분전반' },
  transformer: { banner: insulators, intro: substationStock, introAlt: '변전소의 대형 변압기' },
  wiring: { banner: studs, intro: seodaemunLight, introAlt: '서대문형무소역사관 전시실 조형물 조명' },
  newbuild: { banner: apartments, intro: cranes, introAlt: '신축 건물 옆에 선 타워크레인' },
  solar: { banner: solarRoof, intro: solarWork, introAlt: '지붕에 태양광 모듈을 고정하는 작업' },
  ev: { banner: evWall, intro: evGarage, introAlt: '지하 주차장 벽에 단 전기차 충전기' },
};
