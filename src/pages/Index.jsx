import { Container, Image, Box, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0} centerContent>
      <Box width="100vw" height="100vh" position="relative">
        <Image src="https://caesar-age.netlify.app/ceasar-on-back.jpg" alt="Caesar on Back" objectFit="cover" objectPosition="top" width="100vw" height="100vh" position="fixed" top="0" left="0" />
        <VStack spacing={4} position="absolute" p={4} textAlign="center">
          <Text fontSize="4xl" color="white" fontWeight="bold" textShadow="2px 2px 8px rgba(0,0,0,0.8)">Welcome to Caesar's World</Text>
          <Text fontSize="xl" color="white" textShadow="1px 1px 6px rgba(0,0,0,0.6)">Explore the legacy of an empire</Text>
          <Text fontSize="md" color="white" textShadow="1px 1px 4px rgba(0,0,0,0.5)">
            Caesar is currently 24.03 months old. He was born on 2022-05-12. He is 2 years old.
          </Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;