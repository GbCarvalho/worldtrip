import { Image } from "@chakra-ui/image";
import { Flex } from "@chakra-ui/layout";
import { useRouter } from "next/router";

interface HeaderProps {
  throwBack?: string;
}

export function Header({ throwBack = null }: HeaderProps) {
  const router = useRouter();

  return (
    <Flex
      as="header"
      justifyContent="center"
      alignItems="center"
      w="100%"
      h="28"
      maxW="1440px"
      m="auto"
      cursor="pointer"
      onClick={() => router.push("/")}
    >
      <Image src="/images/logo.png" />
    </Flex>
  );
}
