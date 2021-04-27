import { Image } from "@chakra-ui/image";
import { Flex, Text } from "@chakra-ui/layout";

export function CityCard() {
  return (
    <Flex flexDir="column" maxW="256px" maxH="279px">
      <Image src="/images/country_image.png" borderTopRadius="4" />

      <Flex
        justifyContent="space-around"
        alignItems="center"
        py="18px"
        backgroundColor="white"
        borderX="1px"
        borderBottom="1px"
        borderColor="yellow.400"
        borderBottomRadius="4"
      >
        <Flex flexDir="column">
          <Text>Londres</Text>
          <Text>Reino Unido</Text>
        </Flex>

        <Image src="/images/country_flag.png" maxw="30px" maxH="30px" />
      </Flex>
    </Flex>
  );
}
