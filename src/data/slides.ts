import { slidesCopy } from './services';
import substation from '../assets/stock/substation-transformer.jpg';
import seodaemun from '../assets/cases/seodaemun-prison/04-exhibit-screens.jpg';
import panel from '../assets/stock/distribution-panel.jpg';

// Photos: docs/photo-credits.md. The second slide is a real Volt On site.
export const slides = [
  { img: substation, alt: '변전소의 대형 변압기와 수전 설비', pos: '60% 50%', ...slidesCopy[0] },
  { img: seodaemun, alt: '서대문형무소역사관 전시실의 영상 모니터와 조명', pos: '50% 50%', ...slidesCopy[1] },
  { img: panel, alt: '차단기와 배선이 정리된 분전반', pos: '50% 55%', ...slidesCopy[2] },
];
