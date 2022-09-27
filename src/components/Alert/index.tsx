import { Alert, AlertDescription, AlertIcon, Box } from "@chakra-ui/react";
export default function Main() {
  return (
    <Box>
      <Box>
        <Alert status="info">
          <AlertIcon />
          <AlertDescription>Pesquise por repositorios</AlertDescription>
        </Alert>
      </Box>
    </Box>
  );
}
