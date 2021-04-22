import { Image } from "@chakra-ui/image";
import { Flex, FlexProps, Text } from "@chakra-ui/layout";

interface MenuItemProps extends FlexProps {
  src: string;
  text: string;
}

export function MenuItem({ text, src, ...rest }: MenuItemProps) {
  return (
    <Flex
      background="transparent"
      display="flex"
      flexDir="column"
      alignItems="center"
      _hover={{
        color: "yellow.500",
      }}
      {...rest}
    >
      <Image w="85px" h="85px" alt={text} src={src} />
      <Text fontWeight="600" fontSize="24px" mt="24px" color="gray.700">
        {text}
      </Text>
    </Flex>
  );
}
