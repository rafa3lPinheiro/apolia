import type { ReactNode } from "react";

export const metadata = {
  title: "Apolia",
  description: "Operação administrativa de planos de saúde empresariais.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
