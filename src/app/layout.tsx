// app/layout.tsx

import { ReactNode } from 'react';
import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

type RootProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootProps) {
  return (
    <html lang="pt-BR">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
