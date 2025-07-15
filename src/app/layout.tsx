// app/layout.tsx

import { ReactNode } from 'react';
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

type RootProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootProps) {
  return (
    <html lang="pt-BR">
      <body>
        <Theme>
          {children}
        </Theme>
      </body>
    </html>
  );
}
