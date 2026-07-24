"use client";

import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import type { MonthlyCount, NamedCount } from "../stats";
import {
  getStudyMonthlyCountsByYear,
  getStudyYears,
} from "../stats";
import { useChartTheme } from "./useChartTheme";

type BarHoverInfo = {
  x: number;
  y: number;
  width: number;
  height: number;
  title: string;
  valueText: string;
  placement: "top" | "right";
};

function ChartCard({
  title,
  description,
  children,
  footer,
  toolbar,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  toolbar?: React.ReactNode;
}) {
  return (
    <section className="rounded-lg border border-stone-200 bg-white/60 px-4 py-4 dark:border-stone-700 dark:bg-stone-900/60">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <h2 className="font-semibold text-base text-stone-800 dark:text-stone-100">
            {title}
          </h2>
          <p className="mt-1 text-xs text-stone-500 dark:text-stone-400">
            {description}
          </p>
        </div>
        {toolbar}
      </div>
      <div
        className="relative mt-4 h-56 w-full select-none overflow-visible outline-none sm:h-64"
        style={{ WebkitTapHighlightColor: "transparent" }}
        onMouseDown={(e) => e.preventDefault()}
      >
        {children}
      </div>
      {footer}
    </section>
  );
}

function HtmlSpeechBubble({
  hover,
  theme,
}: {
  hover: BarHoverInfo;
  theme: ReturnType<typeof useChartTheme>;
}) {
  const isTop = hover.placement === "top";

  return (
    <div
      className="pointer-events-none absolute z-20"
      style={
        isTop
          ? {
              left: hover.x + hover.width / 2,
              top: hover.y,
              transform: "translate(-50%, calc(-100% - 6px))",
            }
          : {
              left: hover.x + hover.width,
              top: hover.y + hover.height / 2,
              transform: "translate(6px, -50%)",
            }
      }
    >
      <div className={isTop ? "flex flex-col items-center" : "flex items-center"}>
        {!isTop ? (
          <div className="relative mr-[-1px] h-0 w-0 shrink-0">
            <div
              className="absolute right-0 top-1/2 h-0 w-0 -translate-y-1/2 border-y-[6px] border-r-[7px] border-y-transparent"
              style={{ borderRightColor: theme.tooltipBorder }}
            />
            <div
              className="absolute right-[-1px] top-1/2 h-0 w-0 -translate-y-1/2 border-y-[5px] border-r-[6px] border-y-transparent"
              style={{ borderRightColor: theme.tooltipBg }}
            />
          </div>
        ) : null}
        <div
          className="w-max whitespace-nowrap rounded-lg border px-2.5 py-1.5 text-left shadow-sm"
          style={{
            background: theme.tooltipBg,
            borderColor: theme.tooltipBorder,
            color: theme.tooltipText,
          }}
        >
          <p className="text-[11px] font-semibold leading-tight">{hover.title}</p>
          <p className="mt-0.5 text-[11px] leading-tight" style={{ color: theme.axis }}>
            {hover.valueText}
          </p>
        </div>
        {isTop ? (
          <div className="relative mt-[-1px] h-0 w-0">
            <div
              className="absolute left-1/2 top-0 h-0 w-0 -translate-x-1/2 border-x-[6px] border-t-[7px] border-x-transparent"
              style={{ borderTopColor: theme.tooltipBorder }}
            />
            <div
              className="absolute left-1/2 top-0 h-0 w-0 -translate-x-1/2 border-x-[5px] border-t-[6px] border-x-transparent"
              style={{ borderTopColor: theme.tooltipBg }}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

function useBarHover() {
  const [hover, setHover] = useState<BarHoverInfo | null>(null);
  return {
    hover,
    clear: () => setHover(null),
    show: (info: BarHoverInfo) => setHover(info),
  };
}

function readBarGeometry(item: {
  x?: unknown;
  y?: unknown;
  width?: unknown;
  height?: unknown;
}) {
  const x = Number(item.x);
  const y = Number(item.y);
  const width = Number(item.width);
  const height = Number(item.height);
  if (
    !Number.isFinite(x) ||
    !Number.isFinite(y) ||
    !Number.isFinite(width) ||
    !Number.isFinite(height)
  ) {
    return null;
  }
  return { x, y, width, height };
}

export function StudyMonthlyChart() {
  const theme = useChartTheme();
  const years = getStudyYears();
  const [year, setYear] = useState(years[0] ?? new Date().getFullYear());
  const data = getStudyMonthlyCountsByYear(year);
  const { hover, show, clear } = useBarHover();
  const yearTotal = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <ChartCard
      title="월별 스터디 게시글"
      description={`${year}년 1월–12월 · 총 ${yearTotal}편`}
      toolbar={
        years.length > 0 ? (
          <label className="flex shrink-0 items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400">
            <span className="sr-only">연도 선택</span>
            <select
              value={year}
              aria-label="연도 선택"
              onChange={(e) => {
                clear();
                setYear(Number(e.target.value));
              }}
              className="rounded-md border border-stone-200 bg-white px-2 py-1 text-xs font-medium text-stone-800 outline-none transition-colors hover:border-stone-300 focus-visible:ring-2 focus-visible:ring-amber-500/40 dark:border-stone-600 dark:bg-stone-900 dark:text-stone-100 dark:hover:border-stone-500"
            >
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}년
                </option>
              ))}
            </select>
          </label>
        ) : null
      }
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 48, right: 20, left: -8, bottom: 4 }}
          onMouseLeave={clear}
        >
          <CartesianGrid stroke={theme.grid} vertical={false} />
          <XAxis
            dataKey="label"
            tick={{ fill: theme.axis, fontSize: 10 }}
            tickLine={false}
            axisLine={false}
            interval={0}
            minTickGap={0}
            padding={{ left: 10, right: 10 }}
          />
          <YAxis
            allowDecimals={false}
            tick={{ fill: theme.axis, fontSize: 11 }}
            tickLine={false}
            axisLine={false}
            width={32}
          />
          <Bar
            dataKey="value"
            fill={theme.bar}
            radius={[4, 4, 0, 0]}
            maxBarSize={28}
            isAnimationActive={false}
            onMouseEnter={(item) => {
              const geo = readBarGeometry(item);
              if (!geo) return;

              const payload = (item.payload ?? item) as Partial<MonthlyCount>;
              const monthNum = Number(String(payload.month ?? "").slice(5, 7));
              const value = Number(payload.value ?? item.value);
              if (!monthNum || Number.isNaN(value)) return;

              show({
                ...geo,
                title: `${year}년 ${monthNum}월`,
                valueText: `${value}편`,
                placement: "top",
              });
            }}
          />
        </BarChart>
      </ResponsiveContainer>
      {hover ? <HtmlSpeechBubble hover={hover} theme={theme} /> : null}
    </ChartCard>
  );
}

export function StudyCategoryChart({ data }: { data: NamedCount[] }) {
  const theme = useChartTheme();
  const sorted = [...data].sort((a, b) => b.value - a.value);
  const { hover, show, clear } = useBarHover();

  return (
    <ChartCard
      title="카테고리별 스터디"
      description="관심 분야가 어디에 더 쌓여 있는지 보여줍니다."
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={sorted}
          margin={{ top: 4, right: 96, left: 4, bottom: 0 }}
          onMouseLeave={clear}
        >
          <CartesianGrid stroke={theme.grid} horizontal={false} />
          <XAxis
            type="number"
            allowDecimals={false}
            tick={{ fill: theme.axis, fontSize: 11 }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            type="category"
            dataKey="name"
            width={72}
            tick={{ fill: theme.axis, fontSize: 11 }}
            tickLine={false}
            axisLine={false}
          />
          <Bar
            dataKey="value"
            fill={theme.bar}
            radius={[0, 4, 4, 0]}
            maxBarSize={18}
            isAnimationActive={false}
            onMouseEnter={(item) => {
              const geo = readBarGeometry(item);
              if (!geo) return;

              const payload = (item.payload ?? item) as Partial<NamedCount>;
              const title = String(payload.name ?? "");
              const value = Number(payload.value ?? item.value);
              if (!title || Number.isNaN(value)) return;

              show({
                ...geo,
                title,
                valueText: `${value}편`,
                placement: "right",
              });
            }}
          />
        </BarChart>
      </ResponsiveContainer>
      {hover ? <HtmlSpeechBubble hover={hover} theme={theme} /> : null}
    </ChartCard>
  );
}

export function ProjectTypeChart({ data }: { data: NamedCount[] }) {
  const theme = useChartTheme();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex != null ? data[activeIndex] : null;

  return (
    <ChartCard
      title="프로젝트 구성"
      description="현업과 개인 프로젝트의 비중입니다."
      footer={
        <ul className="mt-1 flex justify-center gap-4 text-xs text-stone-600 dark:text-stone-400">
          {data.map((item, index) => (
            <li key={item.id ?? item.name} className="flex items-center gap-1.5">
              <span
                className="inline-block h-2 w-2 rounded-full"
                style={{
                  background: index === 0 ? theme.bar : theme.barMuted,
                }}
              />
              {item.name} {item.value}
            </li>
          ))}
        </ul>
      }
    >
      <div className="relative h-full w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart onMouseLeave={() => setActiveIndex(null)}>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={52}
              outerRadius={78}
              paddingAngle={3}
              stroke="none"
              label={false}
              isAnimationActive={false}
              onMouseEnter={(_, index) => setActiveIndex(index)}
            >
              {data.map((entry, index) => (
                <Cell
                  key={entry.id ?? entry.name}
                  fill={index === 0 ? theme.bar : theme.barMuted}
                  opacity={activeIndex == null || activeIndex === index ? 1 : 0.45}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        {active ? (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div
              className="w-max rounded-lg border px-3 py-1.5 text-center shadow-sm"
              style={{
                background: theme.tooltipBg,
                borderColor: theme.tooltipBorder,
                color: theme.tooltipText,
              }}
            >
              <p className="text-xs font-semibold">{active.name}</p>
              <p className="mt-0.5 text-[11px]" style={{ color: theme.axis }}>
                {active.value}개
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </ChartCard>
  );
}

export function TechStackChart({ data }: { data: NamedCount[] }) {
  const theme = useChartTheme();
  const { hover, show, clear } = useBarHover();

  return (
    <ChartCard
      title="프로젝트 기술 스택"
      description="프로젝트에 등장한 핵심 기술 빈도입니다."
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 4, right: 96, left: 4, bottom: 0 }}
          onMouseLeave={clear}
        >
          <CartesianGrid stroke={theme.grid} horizontal={false} />
          <XAxis
            type="number"
            allowDecimals={false}
            tick={{ fill: theme.axis, fontSize: 11 }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            type="category"
            dataKey="name"
            width={88}
            tick={{ fill: theme.axis, fontSize: 11 }}
            tickLine={false}
            axisLine={false}
          />
          <Bar
            dataKey="value"
            radius={[0, 4, 4, 0]}
            maxBarSize={18}
            isAnimationActive={false}
            onMouseEnter={(item) => {
              const geo = readBarGeometry(item);
              if (!geo) return;

              const payload = (item.payload ?? item) as Partial<NamedCount>;
              const title = String(payload.name ?? "");
              const value = Number(payload.value ?? item.value);
              if (!title || Number.isNaN(value)) return;

              show({
                ...geo,
                title,
                valueText: `${value}회`,
                placement: "right",
              });
            }}
          >
            {data.map((entry, index) => (
              <Cell
                key={entry.name}
                fill={theme.pie[index % theme.pie.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      {hover ? <HtmlSpeechBubble hover={hover} theme={theme} /> : null}
    </ChartCard>
  );
}
