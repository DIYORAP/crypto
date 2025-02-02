import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            CryptoKaro is your ultimate destination for all things cryptocurrency. We are here to empower you with the knowledge, tools, and resources you need to navigate the fascinating world of digital currencies.
          </Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            As the crypto market continues to grow and evolve, staying informed is crucial. At CryptoKaro, we are committed to providing you with the most up-to-date and comprehensive information, ensuring you never miss a beat in this dynamic industry.
          </Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            Stay informed with our latest news and market updates, keeping you in the loop on the latest trends, developments, and opportunities in the crypto space. We cover a wide array of topics, including Bitcoin, altcoins, blockchain technology, decentralized finance (DeFi), NFTs, and more. Our team of knowledgeable writers and industry experts ensures that you have access to accurate and relevant information
          </Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            At CryptoKaro, we foster a vibrant community where crypto enthusiasts can connect, share ideas, and learn from one another. Join our forums, engage in discussions, and expand your network with like-minded individuals who share your passion for cryptocurrencies. We believe that collaboration and community building are key to unlocking the full potential of this transformative technology.
          </Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            Join us on this exhilarating crypto journey at CryptoKaro. Explore, learn, and embark on a path to financial empowerment with the ever-evolving world of cryptocurrencies. Together, let's navigate the exciting possibilities that await in this digital frontier.
          </Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            Welcome to CryptoKaro, where knowledge meets opportunity!
          </Text>

        </VStack>


      </Stack>
    </Box>
  );
};

export default Footer;