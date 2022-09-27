import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Image, Grid, GridItem, Text, Link } from "@chakra-ui/react";

import Form from "../Form";
export default function Painel() {
  return (
    <Box>
      <Grid templateColumns="repeat(2, 1fr)" gap={"16"} mt={"40px"}>
        <GridItem
          w="100%"
          borderRadius="10"
          wordBreak={"break-all"}
          boxShadow="xl"
        >
          <Grid templateColumns="150px 1fr" gap={0} p={"10px"} pr={"25px"}>
            <Box justifySelf={"center"} pt={"10px"}>
              <Image
                borderRadius="full"
                boxSize="100px"
                src="https://avatars.githubusercontent.com/u/892374?v=4"
                alt="homem aranha"
              />
            </Box>
            <Grid gap={"5px"}>
              <Text fontWeight={"bold"} fontSize={"3xl"} color={"gray.800"}>
                Repositorio 1
              </Text>
              <Text color={"gray.500"}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </Text>
              <Link href="#" isExternal>
                <Text
                  fontWeight={"bold"}
                  fontSize={"lg"}
                  variant="link"
                  color={"blue.600"}
                >
                  Ver repositorio
                  <ArrowForwardIcon mx="2px" />
                </Text>
              </Link>
            </Grid>
          </Grid>
        </GridItem>
        <GridItem
          w="100%"
          borderRadius="10"
          wordBreak={"break-all"}
          boxShadow="xl"
        >
          <Grid templateColumns="150px 1fr" gap={0} p={"10px"} pr={"25px"}>
            <Box justifySelf={"center"} pt={"10px"}>
              <Image
                borderRadius="full"
                boxSize="100px"
                src="https://avatars.githubusercontent.com/u/892374?v=4"
                alt="homem aranha"
              />
            </Box>
            <Grid gap={"5px"}>
              <Text fontWeight={"bold"} fontSize={"3xl"} color={"gray.800"}>
                Repositorio 1
              </Text>
              <Text color={"gray.500"}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </Text>
              <Link href="#" isExternal>
                <Text
                  fontWeight={"bold"}
                  fontSize={"lg"}
                  variant="link"
                  color={"blue.600"}
                >
                  Ver repositorio
                  <ArrowForwardIcon mx="2px" />
                </Text>
              </Link>
            </Grid>
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
}
