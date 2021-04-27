import { Image } from "@chakra-ui/image";
import { Flex } from "@chakra-ui/layout";

export function Header() {
  return (
    <Flex
      as="header"
      justifyContent="center"
      alignItems="center"
      w="100%"
      h="28"
    >
      <Image src="/images/logo.png" />
    </Flex>
  );
}
