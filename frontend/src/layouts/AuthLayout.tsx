import type { ReactNode } from "react";
import VisualPanel from "../components/auth/VisualPanel";

type AuthLayoutProps = {
  children: ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="min-h-screen lg:grid lg:grid-cols-2">
      <section className="flex items-center justify-center">{children}</section>
      <section className="hidden lg:flex">
        <VisualPanel />
      </section>
    </main>
  );
}
