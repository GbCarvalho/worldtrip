import { Image } from "@chakra-ui/image";
import { Flex, Text } from "@chakra-ui/layout";
import SwiperCore, { Navigation, Pagination, Thumbs } from "swiper/core";

import { Carousel } from "../components/Carousel";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";

SwiperCore.use([Navigation, Pagination, Thumbs]);

export default function Home() {
  return (
    <Flex
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      <Header />
      <Flex maxw="1440px" mX="auto" display="flex" flexDir="column">
        <Image src="/images/banner.png" w="100%" />

        <Menu />
      </Flex>

      <Flex w="90px" h="2px" bg="gray.700" mx="auto" mt="20" />

      <Text textAlign="center" mx="auto" mt="12" fontSize={36} fontWeight="600">
        Vamos nessa?
      </Text>
      <Text textAlign="center" mx="auto" fontSize={36} fontWeight="600">
        Então escolha seu continente
      </Text>

      <Carousel />
    </Flex>
  );
}
