import { Image } from "@chakra-ui/image";
import { Flex } from "@chakra-ui/layout";

interface HeaderProps {
  throwBack?: string;
}

export function Header({ throwBack = null }: HeaderProps) {
  return (
    <Flex
      as="header"
      justifyContent="center"
      alignItems="center"
      w="100%"
      h="28"
      maxW="1440px"
      m="auto"
    >
      <Image src="/images/logo.png" />
    </Flex>
  );
}
