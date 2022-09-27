import { Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Text,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  DarkMode,
} from "@chakra-ui/react";
import Painel from "../Painel";
import { useEffect, useState } from "react";
export default function Form() {
  const [search, setSearch] = useState("");
  const [quant, setQuant] = useState();
  const [repositorios, setRepositorio] = useState([]);

  let i = 0;

  async function carregarRepositorios() {
    const response = await fetch(
      "https://api.github.com/search/repositories?q=" + search
    );
    const setRepositorio = await response.json();

    const repositorios = setRepositorio;
    repositorios.forEach((a: object) => {
      i = i + 1;
      salvarDados(repositorios[i]);
    });
    function salvarDados(dado: object) {
      const dados = dado;

      const valores = {
        repositorio: repositorios[i].full_name,
        description: repositorios[i].description,
        login: repositorios[i].login,
        avatar_url: repositorios[i].avatar_url,
        html_url: repositorios[i].html_url,
      };
    }
  }

  function pegarValor() {
    carregarRepositorios();
  }

  /**
  useEffect(() => {
    async function carregarRepositorios() {
      const response = await fetch(
        "https://api.github.com/search/repositories?q=" + search
      );
      const setRepositorio = await response.json();
      console.log(response);
    }
  }, [search]);*/

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
        <Flex mb="2rem">
          <FormControl id="form" onSubmit={pegarValor}>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<Search2Icon color="gray.300" />}
              />
              <Input
                w="lg"
                className="pesquisa"
                name="input"
                type="text"
                variant="outline"
                placeholder="Pesquisar"
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button
                name="input"
                type="submit"
                className="botao"
                ml="10px"
                colorScheme="blue"
                variant="outline"
                onClick={pegarValor}
              >
                Buscar
              </Button>
            </InputGroup>
          </FormControl>
        </Flex>
        <Text color="#718096"> 0 Repositorios Encontrados </Text>
      </Flex>
    </Box>
  );
}
