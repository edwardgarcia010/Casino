"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname();
  const isDashboard = pathname === "/dashboard";
  const isAnalytics = pathname.startsWith("/dashboard/analytics");

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

          {/* Dashboard link */}
          <Link
            id="nav-dashboard"
            href="/dashboard"
            className={`relative w-full text-left flex items-center gap-2 px-6 py-3 font-semibold ${
              isDashboard
                ? "bg-[#24263A] text-pink-400"
                : "text-gray-300 hover:bg-[#181b2d]"
            }`}
          >
            {isDashboard && (
              <span className="absolute left-0 top-0 bottom-0 w-1 bg-pink-500 rounded-r-full" />
            )}
            <span
              className={
                isDashboard ? "text-pink-400 text-lg" : "text-gray-300 text-lg"
              }
            >
              ▦
            </span>
            <span>Dashboard</span>
          </Link>

          {/* Analytics link */}
                    <Link
            id="nav-analytics"
            href="/dashboard/analytics"
            className={`relative w-full text-left flex items-center gap-2 px-6 py-3 font-semibold ${
                isAnalytics
                ? "bg-[#24263A] text-pink-400"
                : "text-gray-300 hover:bg-[#181b2d]"
            }`}
            >
            {isAnalytics && (
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-pink-500 rounded-r-full" />
            )}
            <span
                className={
                isAnalytics ? "text-pink-400 text-lg" : "text-gray-300 text-lg"
                }
            >
                 ▤
            </span>
            <span>Analytics</span>
            </Link>


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

      {/* Main content wrapper */}
      <section className="flex-1 flex justify-center">
        <div className="w-full max-w-6xl p-8 space-y-8">{children}</div>
      </section>
    </main>
  );
}
