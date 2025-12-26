import Image from "next/image";

const statCards = [
  {
    id: "total-revenue",
    title: "TOTAL REVENUE",
    icon: "/coin.png",
    value: "Php 0.00",
    change: "↑ 10.2% vs Last Month",
  },
  {
    id: "active-players",
    title: "Active Players",
    icon: "/person.png",
    value: "1,234",
    change: "↑ 3.5% vs Last Month",
  },
  {
    id: "total-bets",
    title: "Total Bets",
    icon: "/bets.png",
    value: "Php 500,000",
    change: "↓ 1.1% vs Last Month",
  },
  {
    id: "pending-withdrawals",
    title: "Pending Withdrawals",
    icon: "/money-withdrawal.png",
    value: "Php 100,000",
    change: "↑ 0.0% vs Last Month",
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen flex bg-[#121525] text-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0F1220] flex flex-col">
        <div className="h-28 px-6 border-b border-[#1e2133] flex flex-col justify-center">
          <div id="login-logo-wrapper" className="flex items-center">
            <Image
              id="login-logo"
              src="/casino-logo.png"
              alt="Casino logo"
              width={180}
              height={40}
              className="object-contain"
            />
          </div>
          <p className="mt-1 text-xs text-gray-300 tracking-[0.15em]">
            Backoffice System
          </p>
        </div>

        <nav className="flex-1 py-4 text-sm">
          <div className="px-4 text-[11px] uppercase tracking-[0.15em] text-gray-500 mb-2">
            Main
          </div>

          {/* Active dashboard */}
          <button
            id="nav-dashboard"
            className="relative w-full text-left flex items-center gap-2 px-6 py-3 bg-[#24263A] text-pink-400 font-semibold"
          >
            <span className="absolute left-0 top-0 bottom-0 w-1 bg-pink-500 rounded-r-full" />
            <span className="text-pink-400 text-lg">▦</span>
            <span>Dashboard</span>
          </button>

          <button
            id="nav-analytics"
            className="w-full text-left px-6 py-2 hover:bg-[#181b2d] text-gray-300"
          >
            Analytics
          </button>

          <div className="px-4 mt-4 text-[11px] uppercase tracking-[0.15em] text-gray-500 mb-2">
            Management
          </div>
          <button
            id="nav-players"
            className="w-full text-left px-6 py-2 hover:bg-[#181b2d]"
          >
            Players
          </button>
          <button
            id="nav-transactions"
            className="w-full text-left px-6 py-2 hover:bg-[#181b2d]"
          >
            Transactions
          </button>
          <button
            id="nav-deposit"
            className="w-full text-left px-6 py-2 hover:bg-[#181b2d]"
          >
            Deposit
          </button>
          <button
            id="nav-withdrawal"
            className="w-full text-left px-6 py-2 hover:bg-[#181b2d]"
          >
            Withdrawal
          </button>
          <button
            id="nav-bets"
            className="w-full text-left px-6 py-2 hover:bg-[#181b2d]"
          >
            Bets
          </button>

          <div className="px-4 mt-4 text-[11px] uppercase tracking-[0.15em] text-gray-500 mb-2">
            Settings
          </div>
          <button
            id="nav-settings"
            className="w-full text-left px-6 py-2 hover:bg-[#181b2d]"
          >
            Settings
          </button>
        </nav>
      </aside>

      {/* Main content */}
      <section className="flex-1 flex justify-center">
        <div className="w-full max-w-6xl p-8 space-y-8">
          {/* Welcome bar */}
          <header
            id="welcome-bar"
            className="flex items-center justify-between bg-[#181b2d] rounded-2xl px-8 py-5 shadow-lg"
          >
            <div>
              <p className="text-sm text-gray-200">Welcome Back, Admin!</p>
              <p className="text-[11px] text-gray-400">
                Monday, December 15, 2025 – 2:04 PM PST
              </p>
            </div>
            <div className="flex gap-4">
              <button
                id="btn-new-report"
                className="px-4 py-2 rounded-full bg-pink-600 text-xs font-semibold"
              >
                + New Report
              </button>
              <button
                id="btn-admin"
                className="px-4 py-2 rounded-full bg-[#0F1220] text-xs"
              >
                Admin
              </button>
            </div>
          </header>

          {/* Stat cards */}
          <div id="stats-grid" className="grid grid-cols-4 gap-5">
            {statCards.map((card) => (
              <div
                key={card.id}
                id={`card-${card.id}`}
                className="rounded-[32px] bg-[#7a1b58] px-6 py-6 shadow-md text-xs opacity-80"
              >
                <div className="mb-6">
                  <div className="w-11 h-11 rounded-2xl bg-pink-600 flex items-center justify-center">
                    <img
                      id={`card-${card.id}-icon`}
                      src={card.icon}
                      alt={card.title}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                </div>

                <p
                  id={`card-${card.id}-title`}
                  className="text-[11px] tracking-[0.25em] text-gray-200"
                >
                  {card.title.toUpperCase()}
                </p>

                <p
                  id={`card-${card.id}-value`}
                  className="mt-3 text-xl font-semibold text-white"
                >
                  {card.value}
                </p>

                <p
                  id={`card-${card.id}-change`}
                  className="mt-3 text-[11px] text-green-400"
                >
                  {card.change}
                </p>
              </div>
            ))}
          </div>

          {/* Charts row */}
          <div className="grid grid-cols-3 gap-5 ">
            <div
              id="revenue-chart-card"
              className="col-span-2 bg-[#181b2d] rounded-2xl p-5"
            >
              <div className="flex items-center justify-between mb-4 text-xs">
                <span className="text-gray-200">REVENUE CHART</span>
                <div className="flex gap-2">
                  {["DAY", "WEEK", "MONTH", "YEAR"].map((t, idx) => (
                    <button
                      key={t}
                      id={`revenue-filter-${t.toLowerCase()}`}
                      className={`px-3 py-1 rounded-full ${
                        idx === 2
                          ? "bg-pink-600 text-white"
                          : "bg-[#0F1220] text-gray-400"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div
                id="revenue-chart-placeholder"
                className="h-52 rounded-2xl bg-[#262b3d]"
              />
            </div>

            <div
              id="top-games-card"
              className="bg-[#181b2d] rounded-2xl p-5"
            >
              <p className="text-xs text-gray-200 mb-4">TOP GAMES</p>
              <div
                id="top-games-placeholder"
                className="h-52 rounded-2xl bg-[#262b3d]"
              />
            </div>
          </div>

          {/* Recent transactions */}
          <div
            id="recent-transactions-card"
            className="bg-[#181b2d] rounded-2xl p-5 space-y-4"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-200">RECENT TRANSACTIONS</p>
              <input
                id="transactions-search"
                className="w-64 rounded-full bg-[#262b3d] px-4 py-2 text-xs text-gray-200 outline-none placeholder:text-gray-500"
                placeholder="SEARCH"
              />
            </div>

            {/* table */}
            <div className="max-h-72 overflow-y-auto rounded-2xl border border-[#262b3d]">
              <table
                id="transactions-table"
                className="w-full text-xs text-left text-gray-300"
              >
                <thead className="bg-[#262b3d] text-[11px] uppercase">
                  <tr>
                    {[
                      "UserId",
                      "ReferenceID",
                      "Currency",
                      "AMOUNT",
                      "Sender",
                      "Receiver",
                      "TX Hash",
                      "Block Number",
                      "Crypto",
                      "Crypto Amount",
                      "Network",
                      "Transaction Link",
                      "Action",
                    ].map((h) => (
                      <th key={h} className="px-4 py-2 whitespace-nowrap">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 15 }).map((_, i) => (
                    <tr
                      key={i}
                      className="border-t border-[#262b3d] hover:bg-[#202538]"
                    >
                      {Array.from({ length: 13 }).map((__, j) => (
                        <td
                          key={j}
                          className="px-4 py-2 whitespace-nowrap"
                        >
                          -
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
