import { Image } from "@chakra-ui/image";
import { Flex, FlexProps, Text } from "@chakra-ui/layout";

interface CardProps extends FlexProps {
  photo: string;
  city: string;
  country: string;
  flag: string;
}

export function CityCard({ photo, flag, city, country, ...rest }: CardProps) {
  return (
    <Flex flexDir="column" maxW="256px" maxH="279px" {...rest}>
      <Image
        src={photo}
        borderTopRadius="4"
        h="173px"
        w="256px"
        maxh="173px"
        maxw="256 px"
      />

      <Flex
        alignItems="center"
        py="18px"
        backgroundColor="white"
        borderX="1px"
        borderBottom="1px"
        borderColor="yellow.400"
        borderBottomRadius="4"
      >
        <Flex flexDir="column" ml="6">
          <Text color="gray.900" fontSize="20" fontWeight="600">
            {city}
          </Text>
          <Text color="gray.500" fontSize="16" fontWeight="500">
            {country}
          </Text>
        </Flex>

        <Image
          src={flag}
          maxw="30px"
          maxH="30px"
          border="2px"
          borderRadius="30"
          borderColor="yellow.400"
          ml="auto"
          mr="6"
        />
      </Flex>
    </Flex>
  );
}
