import { SwiperSlide } from "swiper/react";
import { Image } from "@chakra-ui/image";
import { Flex, Text } from "@chakra-ui/layout";
import { useRouter } from "next/router";

interface ItemProps extends SwiperSlide {
  title: string;
  subtitle: string;
  image: string;
  link?: string;
}

export function CarouselItem({
  title,
  subtitle,
  image,
  link,
  ...rest
}: ItemProps) {
  const router = useRouter();

  function redirect() {
    router.push(link);
  }

  return (
    <SwiperSlide onClick={redirect} {...rest}>
      <Flex h="100%" w="100%">
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
          cursor="pointer"
        >
          {title}
          <Text fontSize="24" color="gray.200">
            {subtitle}
          </Text>
        </Text>
      </Flex>
    </SwiperSlide>
  );
}
