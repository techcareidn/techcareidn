import Shell from "@/components/Shell";
import DeviceForm from "./sections/DeviceForm";

export const metadata = { title: "Upload Perangkat — TechCareIDN" };

export default function DashboardPage() {
  return (
    <Shell>
      <section className="tc-section">
        <div className="tc-wrap tc-dash">
          <div className="tc-dash-intro">
            <span className="tc-eyebrow">Dashboard Bintang</span>
            <h1>Upload perangkat ke Marketplace</h1>
            <p>Sebagai Bintang, kamu bisa menyumbang (gratis) atau menyewakan perangkat dengan harga terjangkau. Data disimpan di Supabase dan langsung tampil di katalog Marketplace.</p>
          </div>
          <DeviceForm />
        </div>
      </section>
    </Shell>
  );
}
