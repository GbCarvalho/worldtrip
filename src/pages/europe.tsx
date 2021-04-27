import { Image } from "@chakra-ui/image";
import { Flex, HStack, Stack, Text, VStack } from "@chakra-ui/layout";
import { CityCard } from "../components/CityCard";
import { Header } from "../components/Header";

export default function Europe() {
  return (
    <Flex flexDir="column">
      <Header />

      <Flex maxW={1440} mx="auto" flexDir="column">
        <Image src="/images/europe.png" />

        <Flex maxW={1160} mx="auto" flexDir="column">
          {/* Continent description */}

          <Flex flex="1" mt="20">
            <Text w="50%" textAlign="justify" lineHeight="36px">
              A Europa é, por convenção, um dos seis continentes do mundo.
              Compreendendo a península ocidental da Eurásia, a Europa
              geralmente divide-se da Ásia a leste pela divisória de águas dos
              montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a
              sudeste
            </Text>
            <Flex w="50%" justifyContent="space-evenly" alignItems="center">
              <Flex flexDir="column" textAlign="center">
                <Text fontSize="48" color="yellow.500" fontWeight="600">
                  50
                </Text>
                <Text fontSize="24" color="gray.700" fontWeight="600">
                  países
                </Text>
              </Flex>
              <Flex flexDir="column" textAlign="center">
                <Text fontSize="48" color="yellow.500" fontWeight="600">
                  60
                </Text>
                <Text fontSize="24" color="gray.700" fontWeight="600">
                  línguas
                </Text>
              </Flex>
              <Flex flexDir="column" textAlign="center">
                <Text fontSize="48" color="yellow.500" fontWeight="600">
                  27
                </Text>
                <Text fontSize="24" color="gray.700" fontWeight="600">
                  cidades +100
                </Text>
              </Flex>
            </Flex>
          </Flex>

          {/* End of continent description */}

          {/* Top 100 cities */}

          <Flex flex="1" mt="20" flexDir="column">
            <Text fontSize="36px" fontWeight="500">
              Cidades +100
            </Text>

            {/* This might be an temporary solution */}

            <VStack spacing="12" mt="10" mb="35">
              <HStack spacing="45px" justify="start" align="center">
                <CityCard />
                <CityCard />
                <CityCard />
                <CityCard />
              </HStack>
              <HStack spacing="45px" justify="start" w="100%">
                <CityCard />
              </HStack>
            </VStack>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
