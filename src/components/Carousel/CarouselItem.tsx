import { Image } from "@chakra-ui/image";
import { Flex, Text, FlexProps } from "@chakra-ui/layout";

interface ItemProps extends FlexProps {
  title: string;
  subtitle: string;
  image: string;
}

export function CarouselItem({ title, subtitle, image, ...rest }: ItemProps) {
  return (
    <Flex h="100%" w="100%" {...rest}>
      <Image
        src={image}
        position="absolute"
        top="0"
        w="100%"
        h="100%"
        zIndex="0"
      />
      <Text
        color="gray.100"
        fontWeight="600"
        fontSize="48"
        zIndex="1"
        mx="auto"
        my="auto"
        textAlign="center"
      >
        {title}
        <Text fontSize="24" color="gray.200">
          {subtitle}
        </Text>
      </Text>
    </Flex>
  );
}
