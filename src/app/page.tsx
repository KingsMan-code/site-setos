"use client";

import { Flex, Text, Button } from "@radix-ui/themes";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/home");
  }, [router]);

  return (
    <Flex direction="column" gap="2">
      <Text>Olá com Radix Themes!</Text>
      <Button>Vamos lá</Button>
    </Flex>
  );
}
