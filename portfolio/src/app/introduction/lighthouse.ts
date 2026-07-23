/**
 * Lighthouse 측정값을 배포 후 채우면 Introduction에 뱃지로 노출됩니다.
 * 측정 전(null)에는 렌더하지 않아 허위 점수를 표시하지 않습니다.
 *
 * 측정 방법: Chrome DevTools → Lighthouse → Desktop/Mobile 각각 실행
 */
export const LIGHTHOUSE_SCORES: {
  performance: number | null;
  accessibility: number | null;
  bestPractices: number | null;
  seo: number | null;
  measuredAt: string | null;
} = {
  performance: null,
  accessibility: null,
  bestPractices: null,
  seo: null,
  measuredAt: null,
};
