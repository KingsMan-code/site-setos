// app/layout.tsx

import { ReactNode } from 'react';

type RootProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootProps) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
