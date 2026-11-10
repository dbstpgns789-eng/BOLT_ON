// Photos per business area. Real Volt On sites first; licensed stock only where none exists (docs/photo-credits.md).
// 신·증축 has no intro photo on purpose: 김해 미술관 was interior electrical work, not a new build.
import type { ImageMetadata } from 'astro';
import type { ServiceSlug } from './services';
import substationStock from '../assets/stock/substation-transformer.jpg';
import insulators from '../assets/stock/transformer-insulators.jpg';
import panel from '../assets/stock/distribution-panel.jpg';
import studs from '../assets/stock/remodeling-studs.jpg';
import cheongju from '../assets/cases/cheongju-substation/01-substation.jpg';
import dongdaemunAfter from '../assets/cases/dongdaemun-kindergarten/03-after.jpg';
import seodaemunLight from '../assets/cases/seodaemun-prison/03-sculpture-light.jpg';

export const serviceMedia: Record<ServiceSlug, { banner: ImageMetadata; intro?: ImageMetadata; introAlt?: string }> = {
  substation: { banner: substationStock, intro: cheongju, introAlt: '청주 식품공장에 설치한 옥외 변전설비' },
  capacity: { banner: panel, intro: dongdaemunAfter, introAlt: '증설 공사를 마친 유치원 분전반' },
  transformer: { banner: insulators, intro: substationStock, introAlt: '변전소의 대형 변압기' },
  wiring: { banner: studs, intro: seodaemunLight, introAlt: '서대문형무소역사관 전시실 조형물 조명' },
  newbuild: { banner: studs },
};
