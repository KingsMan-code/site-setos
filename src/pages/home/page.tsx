"use client";

import { Flex, Text, Button } from "@radix-ui/themes";

export default function Home() {
  return (
    <Flex direction="column" gap="3" align="center" justify="center" style={{ minHeight: "100vh" }}>
      <Text size="6" weight="bold">Bem-vindo à Home!</Text>
      <Text size="3">Esta é a página inicial do site.</Text>
      <Button>Explorar</Button>
    </Flex>
  );
}