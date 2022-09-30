import { ArrowForwardIcon, Search2Icon } from "@chakra-ui/icons";
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
  Grid,
  Image,
  GridItem,
  Link,
} from "@chakra-ui/react";
import Painel from "../Painel";
import { useEffect, useState } from "react";
export default function Form() {
  const [search, setSearch] = useState("");
  const [quant, setQuant] = useState(0);
  const [repositorios, setRepositorio] = useState([]);

  /***async function carregarRepositorios() {
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
  }*/
  useEffect(() => {
    carregarRepositorios();
    async function carregarRepositorios() {
      const response = await fetch(
        "https://api.github.com/search/repositories?q=" + search
      );
      const reps = await response.json();
      if (reps.items) {
        const rep = reps.items.map((a: any) => {
          return {
            id: a.id,
            repositorio: a.full_name,
            description: a.description,
            login: a.login,
            avatar_url: a.owner.avatar_url,
            html_url: a.html_url,
          };
        });
        setQuant(rep.length);
        setRepositorio(rep);
      }
    }
  }, [search]);
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
          <FormControl id="form">
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
            </InputGroup>
          </FormControl>
        </Flex>
        <Text color="#718096"> {quant} Repositorios Encontrados </Text>
      </Flex>
      <Grid templateColumns="repeat(2, 1fr)" gap={"16"} mt={"40px"}>
        {repositorios.map((item: any) => (
          <GridItem
            w="100%"
            borderRadius="10"
            wordBreak={"break-all"}
            boxShadow="xl"
            key={item.id}
          >
            <Grid templateColumns="150px 1fr" gap={0} p={"10px"} pr={"25px"}>
              <Box justifySelf={"center"} pt={"10px"}>
                <Image
                  borderRadius="full"
                  boxSize="100px"
                  src={item.avatar_url}
                  alt=""
                />
              </Box>
              <Grid gap={"5px"}>
                <Text fontWeight={"bold"} fontSize={"3xl"} color={"gray.800"}>
                  {item.repositorio}
                </Text>
                <Text color={"gray.500"}>{item.description}</Text>
                <Link href={item.html_url} isExternal>
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
        ))}
      </Grid>
    </Box>
  );
}
