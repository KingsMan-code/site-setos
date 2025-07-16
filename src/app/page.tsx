"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/home");
  }, [router]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-2">
      <p>Olá!</p>
      <button className="rounded bg-green-600 px-4 py-2 text-white">Vamos lá</button>
    </main>
  );
}
