"use client";

import * as React from "react";
import Link from "next/link";
import {
  getDashboardData,
  getNotifications,
  type ApiDashboardApplication,
  type ApiDashboardData,
  type ApiNotification,
} from "@/lib/api";

function IconBell(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        d="M10 3a5 5 0 0 1 5 5v3l2 2H3l2-2V8a5 5 0 0 1 5-5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 17a2 2 0 0 0 4 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconChevronRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.5 4.5 13 10l-5.5 5.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function initials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const first = parts[0]?.[0] ?? "?";
  const last = parts.length > 1 ? parts[parts.length - 1]?.[0] ?? "" : "";
  return (first + last).toUpperCase();
}

function toCandidateName(application: ApiDashboardApplication) {
  const first = application.candidate?.firstName?.trim() ?? "";
  const last = application.candidate?.lastName?.trim() ?? "";
  const full = `${first} ${last}`.trim();
  return full || "Unknown Candidate";
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString();
}

export default function DashboardPage() {
  const [dashboard, setDashboard] = React.useState<ApiDashboardData | null>(null);
  const [notifications, setNotifications] = React.useState<ApiNotification[]>([]);
  const [unreadCount, setUnreadCount] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [notificationsOpen, setNotificationsOpen] = React.useState(false);
  const notifRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        setNotificationsOpen(false);
      }
    }
    if (notificationsOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [notificationsOpen]);
  React.useEffect(() => {
    let isMounted = true;

    Promise.all([getDashboardData(), getNotifications()])
      .then(([dashboardData, notificationData]) => {
        if (!isMounted) return;
        setDashboard(dashboardData);
        setNotifications(notificationData.notifications ?? []);
        setUnreadCount(notificationData.unreadCount ?? 0);
        setError(null);
      })
      .catch(() => {
        if (!isMounted) return;
        setError("Failed to load dashboard data.");
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const recentTests = React.useMemo(
    () =>
      (dashboard?.recentJobs ?? []).map((job) => ({
        id: job.id,
        title: job.title,
        candidates: job._count?.applications ?? 0,
      })),
    [dashboard]
  );

  const recentCandidates = React.useMemo(
    () =>
      (dashboard?.recentApplications ?? []).map((application) => ({
        id: application.id,
        name: toCandidateName(application),
        appliedFor: application.job?.title || "Untitled Job",
        applied: formatDate(application.createdAt),
      })),
    [dashboard]
  );

  const totalTests = dashboard?.stats.totalJobs ?? 0;
  const totalCandidates = dashboard?.stats.totalApplications ?? 0;
  const pendingReviews = dashboard?.recentApplications?.filter(
    (application) => application.status === "submitted"
  ).length ?? 0;

  return (
    <div className="flex flex-col min-h-full">
      <header className="border-b border-zinc-200 bg-white">
        <div className="flex h-[72px] items-center justify-between px-8">
          <h1 className="font-fustat text-2xl font-semibold text-graphite">
            Dashboard
          </h1>
          <div className="relative" ref={notifRef}>
            <button
              type="button"
              aria-label="Notifications"
              aria-expanded={notificationsOpen}
              onClick={() => setNotificationsOpen((v) => !v)}
              className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-600"
            >
              <IconBell className="h-5 w-5" />
              {unreadCount > 0 && (
                <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-corePurple" />
              )}
            </button>
            {notificationsOpen && (
              <div className="absolute right-0 top-full z-50 mt-2 w-80 overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-lg">
                <div className="border-b border-zinc-100 px-4 py-3">
                  <h3 className="text-sm font-semibold text-zinc-900">Notifications</h3>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {notifications.length === 0 && (
                    <div className="px-4 py-3 text-sm text-zinc-500">No notifications</div>
                  )}
                  {notifications.map((n) => (
                    <Link
                      key={n.id}
                      href="/candidates"
                      onClick={() => setNotificationsOpen(false)}
                      className="block border-b border-zinc-100 px-4 py-3 text-left transition hover:bg-zinc-50 last:border-b-0"
                    >
                      <p className="text-sm font-medium text-zinc-900">
                        {n.message || n.title || "Notification"}
                      </p>
                      <p className="mt-0.5 text-xs text-zinc-500">
                        {n.createdAt ? formatDate(n.createdAt) : "Just now"}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="flex-1 p-8">
        {isLoading && (
          <div className="mb-4 rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-500">
            Loading dashboard...
          </div>
        )}
        {error && (
          <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}
        {/* Key metrics — compact, scannable */}
        <div className="grid gap-4 sm:grid-cols-3">
          <Link
            href="/tests"
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-corePurple to-violet p-6 text-white shadow-lg shadow-corePurple/20 transition hover:shadow-xl hover:shadow-corePurple/25"
          >
            <div className="relative">
              <div className="text-3xl font-bold tabular-nums">{totalTests}</div>
              <div className="mt-1 text-sm font-medium text-white/90">
                Active Tests
              </div>
              <div className="mt-4 flex items-center text-xs font-medium text-white/70">
                View all
                <IconChevronRight className="ml-1 h-4 w-4 transition group-hover:translate-x-0.5" />
              </div>
            </div>
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/10" />
          </Link>

          <Link
            href="/candidates"
            className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-zinc-300 hover:shadow-md"
          >
            <div className="text-3xl font-bold tabular-nums text-zinc-900">
              {totalCandidates || 0}
            </div>
            <div className="mt-1 text-sm text-zinc-600">Candidates</div>
            <div className="mt-4 flex items-center text-xs font-medium text-corePurple">
              Manage
              <IconChevronRight className="ml-1 h-4 w-4 transition group-hover:translate-x-0.5" />
            </div>
          </Link>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="text-3xl font-bold tabular-nums text-zinc-900">
              {pendingReviews}
            </div>
            <div className="mt-1 text-sm text-zinc-600">Pending review</div>
            <div className="mt-4 text-xs text-zinc-400">
              Awaiting your decision
            </div>
          </div>
        </div>

        {/* Main content — two columns, tests first (primary action) */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          {/* Recent tests — primary focus */}
          <div className="rounded-2xl border border-zinc-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-zinc-100 px-6 py-4">
              <h2 className="font-semibold text-zinc-900">Recent tests</h2>
              <Link
                href="/tests"
                className="text-sm font-medium text-corePurple transition hover:text-violet"
              >
                View all →
              </Link>
            </div>
            <div className="divide-y divide-zinc-100">
              {recentTests.length === 0 && (
                <div className="px-6 py-6 text-sm text-zinc-500">No tests yet.</div>
              )}
              {recentTests.map((t) => (
                <Link
                  key={t.id}
                  href={`/tests/${t.id}`}
                  className="flex items-center justify-between px-6 py-4 transition hover:bg-zinc-50/80"
                >
                  <div className="min-w-0 flex-1">
                    <div className="truncate font-medium text-zinc-900">
                      {t.title}
                    </div>
                    <div className="mt-0.5 text-xs text-zinc-500">
                      {t.candidates} candidate{t.candidates !== 1 ? "s" : ""}
                    </div>
                  </div>
                  <IconChevronRight className="ml-3 h-4 w-4 shrink-0 text-zinc-300" />
                </Link>
              ))}
            </div>
            <div className="border-t border-zinc-100 px-6 py-4">
              <Link
                href="/create-test"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-softLavender py-3 text-sm font-semibold text-corePurple transition hover:bg-corePurple hover:text-white"
              >
                + Create test
              </Link>
            </div>
          </div>

          {/* Recent candidates — secondary */}
          <div className="rounded-2xl border border-zinc-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-zinc-100 px-6 py-4">
              <h2 className="font-semibold text-zinc-900">Recent candidates</h2>
              <Link
                href="/candidates"
                className="text-sm font-medium text-corePurple transition hover:text-violet"
              >
                View all →
              </Link>
            </div>
            <div className="divide-y divide-zinc-100">
              {recentCandidates.length === 0 && (
                <div className="px-6 py-6 text-sm text-zinc-500">No candidates yet.</div>
              )}
              {recentCandidates.map((c) => (
                <Link
                  key={c.id}
                  href="/candidates"
                  className="flex items-center gap-4 px-6 py-4 transition hover:bg-zinc-50/80"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-softLavender text-sm font-semibold text-corePurple">
                    {initials(c.name)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-medium text-zinc-900">{c.name}</div>
                    <div className="mt-0.5 truncate text-xs text-zinc-500">
                      {c.appliedFor}
                    </div>
                  </div>
                  <IconChevronRight className="h-4 w-4 shrink-0 text-zinc-300" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
