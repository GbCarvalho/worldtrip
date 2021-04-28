import Icon from "@chakra-ui/icon";
import { Image } from "@chakra-ui/image";
import { Flex, Grid, HStack, Text, VStack } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/tooltip";
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

          <Flex
            flex="1"
            mt="20"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text w="50%" textAlign="justify" lineHeight="36px">
              A Europa é, por convenção, um dos seis continentes do mundo.
              Compreendendo a península ocidental da Eurásia, a Europa
              geralmente divide-se da Ásia a leste pela divisória de águas dos
              montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a
              sudeste
            </Text>

            {/* Data details from the continent */}
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
                <Flex flexDir="row">
                  <Text fontSize="24" color="gray.700" fontWeight="600" mr="2">
                    cidades +100
                  </Text>
                  <Tooltip label="top 100 cidades mais visitadas no mundo">
                    <Image src="/images/info.svg" />
                  </Tooltip>
                </Flex>
              </Flex>
            </Flex>
          </Flex>

          {/* End of continent description */}

          {/* Top 100 cities */}

          <Flex flex="1" mt="20" flexDir="column">
            <Text fontSize="36px" fontWeight="500">
              Cidades +100
            </Text>

            <Grid templateColumns="repeat(4, 1fr)" gap={12} mt="10" mb="35">
              <CityCard
                flag="https://cdn.countryflags.com/thumbs/united-kingdom/flag-round-250.png"
                photo="/images/country_image.png"
                city="Londres"
                country="Reino Unido"
              />
              <CityCard
                photo="https://images.unsplash.com/photo-1431274172761-fca41d930114?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                flag="https://cdn.countryflags.com/thumbs/france/flag-round-250.png"
                city="Paris"
                country="França"
              />
              <CityCard
                photo="https://images.unsplash.com/photo-1597177724434-245eb4d730e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80"
                flag="https://cdn.countryflags.com/thumbs/italy/flag-round-250.png"
                city="Roma"
                country="Itália"
              />
              <CityCard
                photo="https://images.unsplash.com/photo-1562624475-96c2bc08fab9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                flag="https://cdn.countryflags.com/thumbs/czech-republic/flag-round-250.png"
                city="Praga"
                country="República Tcheca"
              />
              <CityCard
                photo="https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                flag="https://cdn.countryflags.com/thumbs/netherlands/flag-round-250.png"
                city="Amstedã"
                country="Holanda"
              />
            </Grid>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
