import React from "react";
import { Box } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import Alert from "./components/Alert";
import Painel from "./components/Painel";
import Form from "./components/Form";

function App() {
  return (
    <Box ml="32" mr="32" mt="20">
      <Form />
      <Alert />
      <Painel />
    </Box>
  );
}

export default App;
