import { LIGHTHOUSE_SCORES } from "../lighthouse";

const SCORE_ITEMS = [
  { key: "performance" as const, label: "Performance" },
  { key: "accessibility" as const, label: "Accessibility" },
  { key: "bestPractices" as const, label: "Best Practices" },
  { key: "seo" as const, label: "SEO" },
];

function scoreTone(score: number) {
  if (score >= 90)
    return "text-emerald-700 bg-emerald-50 border-emerald-200 dark:text-emerald-300 dark:bg-emerald-950/40 dark:border-emerald-800";
  if (score >= 50)
    return "text-amber-700 bg-amber-50 border-amber-200 dark:text-amber-300 dark:bg-amber-950/40 dark:border-amber-800";
  return "text-rose-700 bg-rose-50 border-rose-200 dark:text-rose-300 dark:bg-rose-950/40 dark:border-rose-800";
}

/** Lighthouse 실측 점수가 있을 때만 노출되는 뱃지 */
export default function IntroLighthouseBadge() {
  const scores = SCORE_ITEMS.map((item) => ({
    ...item,
    value: LIGHTHOUSE_SCORES[item.key],
  })).filter((item) => typeof item.value === "number");

  if (scores.length === 0) return null;

  return (
    <section
      id="lighthouse"
      className="py-12 border-t border-stone-200 dark:border-stone-800"
      aria-labelledby="lighthouse-heading"
    >
      <h2
        id="lighthouse-heading"
        className="font-semibold text-lg text-stone-800 mb-2 dark:text-stone-100"
      >
        Lighthouse
      </h2>
      <p className="text-stone-600 text-sm mb-4 dark:text-stone-300">
        이 포트폴리오 사이트 자체를 Lighthouse로 측정한 점수입니다.
        {LIGHTHOUSE_SCORES.measuredAt
          ? ` (측정일: ${LIGHTHOUSE_SCORES.measuredAt})`
          : null}
      </p>
      <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 list-none p-0 m-0">
        {scores.map(({ key, label, value }) => (
          <li
            key={key}
            className={`rounded-lg border px-3 py-3 text-center ${scoreTone(
              value as number
            )}`}
          >
            <p className="text-[11px] font-medium tracking-wide uppercase opacity-80">
              {label}
            </p>
            <p className="mt-1 text-2xl font-semibold tabular-nums">
              {value}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
