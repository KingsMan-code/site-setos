"use client";

import { Flex, Text } from "@radix-ui/themes";

export default function HelpPage() {
  return (
    <Flex direction="column" gap="3" align="center" justify="center" style={{ minHeight: "100vh" }}>
      <Text size="6" weight="bold">Ajuda</Text>
      <Text size="3">Precisa de ajuda? Entre em contato conosco!</Text>
    </Flex>
  );
}
