import { ReactNode } from "react";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="app-shell">
      <Header />
      <main className="site-main">{children}</main>
      <Footer />
    </div>
  );
}
