// app/dashboard/analytics/page.tsx
'use client';

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      {/* Welcome bar (shared style) */}
      <header
        id="analytics-welcome-bar"
        className="flex items-center justify-between bg-[#181b2d] rounded-2xl px-8 py-5 shadow-lg"
        data-aos="fade-down"
        data-aos-duration="800"
      >
        <div>
          <p className="text-sm text-gray-200">Welcome Back, Admin!</p>
          <p className="text-[11px] text-gray-400">
            Monday, December 15, 2025 – 2:04 PM PST
          </p>
        </div>
        <div className="flex gap-4">
          <button
            id="analytics-btn-new-report"
            className="px-4 py-2 rounded-full bg-pink-600 text-xs font-semibold"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            + New Report
          </button>
          <button
            id="analytics-btn-admin"
            className="px-4 py-2 rounded-full bg-[#0F1220] text-xs"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            Admin
          </button>
        </div>
      </header>

      {/* Page title */}
      <section
        className="space-y-1"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <p
          id="analytics-section-label"
          className="text-xs tracking-[0.25em] text-gray-400"
        >
          ANALYTICS
        </p>
        <h1
          id="analytics-page-title"
          className="text-2xl font-semibold text-gray-100"
        >
          GAME &amp; PLAYER PERFORMANCE
        </h1>
      </section>

      {/* Top KPI row */}
      <section
        id="analytics-kpi-row"
        className="grid grid-cols-4 gap-5 items-stretch"
      >
        {/* Today's revenue card (big pink box) */}
        <div
          id="analytics-today-revenue-card"
          className="col-span-1 bg-[#7a1b58] rounded-2xl p-5 text-xs text-gray-200"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <p className="text-[11px] uppercase tracking-[0.15em] mb-3">
            TODAY&apos;S REVENUE
          </p>

          {/* Empty area reserved for chart */}
          <div
            id="analytics-today-revenue-chart"
            className="h-40 rounded-2xl bg-transparent"
          />
        </div>

        {/* Right side stacked cards */}
        <div className="col-span-3 space-y-3">
          {/* Active players today */}
          <div
            id="analytics-active-players-card"
            className="bg-[#181b2d] rounded-2xl px-6 py-4 text-xs text-gray-200"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <p className="text-[11px] uppercase tracking-[0.15em] text-gray-400">
              ACTIVE PLAYERS TODAY
            </p>
            <p
              id="analytics-active-players-value"
              className="mt-2 text-base font-semibold"
            >
              100234343
            </p>
            <p
              id="analytics-active-players-change"
              className="mt-1 text-[11px] text-green-400"
            >
              ↑ 0.0% vs YESTERDAY
            </p>
          </div>

          {/* Total bets today */}
          <div
            id="analytics-total-bets-card"
            className="bg-[#181b2d] rounded-2xl px-6 py-4 text-xs text-gray-200"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p className="text-[11px] uppercase tracking-[0.15em] text-gray-400">
              TOTAL BETS TODAY
            </p>
            <p
              id="analytics-total-bets-value"
              className="mt-2 text-base font-semibold"
            >
              100,0000
            </p>
            <p
              id="analytics-total-bets-change"
              className="mt-1 text-[11px] text-green-400"
            >
              ↑ 0.0% vs YESTERDAY
            </p>
          </div>

          {/* Gross revenue */}
          <div
            id="analytics-gross-revenue-card"
            className="bg-[#181b2d] rounded-2xl px-6 py-4 text-xs text-gray-200"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <p className="text-[11px] uppercase tracking-[0.15em] text-gray-400">
              GROSS REVENUE
            </p>
            <p
              id="analytics-gross-revenue-value"
              className="mt-2 text-base font-semibold"
            >
              Php 1,200,000
            </p>
            <p
              id="analytics-gross-revenue-change"
              className="mt-1 text-[11px] text-green-400"
            >
              ↑ 0.0% vs YESTERDAY
            </p>
          </div>
        </div>
      </section>

      {/* Bottom row: revenue chart + top games */}
      <section
        id="analytics-bottom-row"
        className="grid grid-cols-3 gap-5"
      >
        {/* Revenue chart */}
        <div
          id="analytics-revenue-chart-card"
          className="col-span-2 bg-[#181b2d] rounded-2xl p-5"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div
            id="analytics-revenue-chart-header"
            className="flex items-center justify-between mb-4 text-xs"
          >
            <span className="text-gray-200">REVENUE CHART</span>
            <div className="flex gap-2">
              {["DAY", "WEEK", "MONTH"].map((t, idx) => (
                <button
                  key={t}
                  id={`analytics-revenue-filter-${t.toLowerCase()}`}
                  className="px-3 py-1 rounded-full bg-[#0F1220] text-gray-400 text-[11px]"
                  data-aos="fade-up"
                  data-aos-delay={idx * 80}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div
            id="analytics-revenue-chart-placeholder"
            className="h-56 rounded-2xl bg-[#262b3d]"
          />
        </div>

        {/* Top games */}
        <div
          id="analytics-top-games-card"
          className="bg-[#181b2d] rounded-2xl p-5"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <p
            id="analytics-top-games-title"
            className="text-xs text-gray-200 mb-1"
          >
            TOP GAMES
          </p>
          <p
            id="analytics-top-games-subtitle"
            className="text-[11px] text-gray-500 mb-4"
          >
            By Revenue
          </p>

          <div
            id="analytics-top-games-list"
            className="space-y-2 text-xs text-gray-300"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                id={`analytics-top-game-row-${i}`}
                className="flex items-center justify-between bg-[#262b3d] rounded-xl px-3 py-2"
                data-aos="fade-left"
                data-aos-delay={i * 80}
              >
                <div className="flex flex-col">
                  <span
                    id={`analytics-top-game-name-${i}`}
                    className="font-medium"
                  >
                    DUWA
                  </span>
                  <span
                    id={`analytics-top-game-players-${i}`}
                    className="text-[10px] text-gray-500"
                  >
                    1500 Players
                  </span>
                </div>
                <div className="text-right">
                  <span
                    id={`analytics-top-game-revenue-${i}`}
                    className="text-xs"
                  >
                    Php 100,000
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
