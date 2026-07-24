import { Suspense } from "react";
import Shell from "@/components/Shell";
import DashboardClient from "./sections/DashboardClient";

export const metadata = { title: "Dashboard — TechCareIDN" };

export default function DashboardPage() {
  return (
    <Shell>
      <Suspense fallback={<div className="tc-wrap" style={{ padding: "60px 0" }}>Memuat dashboard…</div>}>
        <DashboardClient />
      </Suspense>
    </Shell>
  );
}
