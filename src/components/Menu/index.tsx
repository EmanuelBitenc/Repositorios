import { Search2Icon } from "@chakra-ui/icons";

import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import "@fontsource/roboto";
import Form from "../Form";
import carregarRepositorios from "../Form";

export default function Menu() {
  return (
    <Box>
      <Text
        color="#1A202C"
        mb="1rem"
        fontSize="3xl"
        fontWeight="600"
        fontFamily="Roboto"
      >
        Repositorios
      </Text>
      <Flex justifyContent="space-between">
        <Form />
        <Text color="#718096">0 Repositorios Encontrados </Text>
      </Flex>
    </Box>
  );
}
