import { Box, Image, Text, Flex, useColorModeValue } from "@chakra-ui/react";

const testimonials = [
  {
    name: "Gioni Loeren",
    role: "Lead Designer",
    content:
      "It was a very good experience Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec turpis orci lectus maecenas.",
    rating: "★★★☆☆",
    avatar: "https://via.placeholder.com/150",
  },
  {
    name: "Leo Junior",
    role: "Lead Designer",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec turpis orci lectus maecenas.",
    rating: "★★★★☆",
    avatar: "https://via.placeholder.com/150",
  },
  {
    name: "Johan Zein",
    role: "Lead Designer",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec turpis orci lectus maecenas.",
    rating: "★★★★☆",
    avatar: "https://via.placeholder.com/150",
  },
];

const Testimonial = () => {
  return (
    <Box p={5} bg={useColorModeValue("white", "gray.700")}>
      <Text fontSize="3xl" textAlign="center" mb={5}>
        Testimoni from our students
      </Text>
      <Flex wrap="wrap" justifyContent="center" alignItems="center">
        {testimonials.map((testimonial, index) => (
          <Box
            key={index}
            w={index === 1 ? "320px" : "280px"} 
            m={4}
            bg="white"
            boxShadow="2xl"
            borderRadius="lg"
            transform={index === 1 ? "scale(1.05)" : "none"} 
            transition="transform 0.3s, box-shadow 0.3s"
            _hover={{
              boxShadow: index === 1 ? "2xl" : "xl",
              transform: index === 1 ? "scale(1.1)" : "scale(1.03)",
            }}
          >
            <Image
              borderRadius="full"
              boxSize="100px"
              src={testimonial.avatar}
              alt={testimonial.name}
              mb={4}
              mx="auto"
            />
            <Text fontWeight="bold" fontSize="xl" mb={1} textAlign="center">
              {testimonial.name}
            </Text>
            <Text color="gray.500" mb={3} textAlign="center">
              {testimonial.role}
            </Text>
            <Text fontSize="sm" textAlign="center">
              {testimonial.content}
            </Text>
            <Text fontSize="lg" color="yellow.400" mt={3} textAlign="center">
              {testimonial.rating}
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Testimonial;
