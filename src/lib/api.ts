export type ApiUserContext = {
  displayName: string;
  email: string;
  companyName: string;
};

export type ApiDashboardJob = {
  id: string;
  title: string;
  createdAt: string;
  _count?: {
    applications?: number;
  };
};

export type ApiDashboardApplication = {
  id: string;
  status: string;
  createdAt: string;
  candidate?: {
    id: string;
    firstName?: string | null;
    lastName?: string | null;
  };
  job?: {
    id: string;
    title?: string | null;
  };
};

export type ApiNotification = {
  id: string;
  title?: string | null;
  message?: string | null;
  type?: string | null;
  isRead?: boolean;
  createdAt?: string;
};

export type ApiDashboardData = {
  stats: {
    totalJobs: number;
    activeJobs: number;
    totalApplications: number;
  };
  recentJobs: ApiDashboardJob[];
  recentApplications: ApiDashboardApplication[];
};

export type ApiCompanyProfileData = {
  company?: {
    id: string;
    name?: string | null;
    jobs?: Array<{
      id: string;
      title: string;
      status: string;
      createdAt: string;
      _count?: {
        applications?: number;
      };
    }>;
  };
  memberRole?: string;
  memberStatus?: string;
};

type ApiSuccess<T> = {
  success: true;
  data: T;
  message?: string;
};

function getApiBaseUrl() {
  return process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://api.colare.co";
}

function getAuthToken() {
  if (typeof window === "undefined") return "";
  return window.localStorage.getItem("recruit_auth_token") ?? "";
}

async function apiGet<T>(path: string): Promise<T> {
  const token = getAuthToken();
  const res = await fetch(`${getApiBaseUrl()}${path}`, {
    method: "GET",
    headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    credentials: "include",
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`GET ${path} failed (${res.status})`);
  }

  const json = (await res.json()) as ApiSuccess<T>;
  return json.data;
}

function getLocalUser() {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem("recruit_user");
    if (!raw) return null;
    return JSON.parse(raw) as {
      email?: string;
      firstName?: string;
      lastName?: string;
    };
  } catch {
    return null;
  }
}

export async function getUserContext(): Promise<ApiUserContext> {
  const localUser = getLocalUser();
  let companyName = "Company";

  try {
    const profile = await apiGet<{
      company?: {
        name?: string | null;
      };
    }>("/api/companies/profile");
    companyName = profile?.company?.name?.trim() || companyName;
  } catch {
    // Keep local fallback values below.
  }

  const firstName = localUser?.firstName?.trim();
  const lastName = localUser?.lastName?.trim();
  const displayName =
    [firstName, lastName].filter(Boolean).join(" ") || localUser?.email || "User";

  return {
    displayName,
    email: localUser?.email || "unknown@colare.co",
    companyName,
  };
}

export async function getDashboardData(): Promise<ApiDashboardData> {
  return apiGet<ApiDashboardData>("/api/companies/dashboard");
}

export async function getCompanyProfile(): Promise<ApiCompanyProfileData> {
  return apiGet<ApiCompanyProfileData>("/api/companies/profile");
}

export async function getNotifications(): Promise<{
  notifications: ApiNotification[];
  unreadCount: number;
}> {
  return apiGet<{ notifications: ApiNotification[]; unreadCount: number }>(
    "/api/notifications"
  );
}
