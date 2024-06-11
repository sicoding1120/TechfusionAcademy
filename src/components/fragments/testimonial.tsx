// components/Testimonial.js
import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import Image from "next/image";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

const testimonials = [
  {
    name: "Gioni Loeren",
    role: "Lead Designer",
    content:
      "It was a very good experience. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec turpis orci. Lectus maecenas.",
    rating: "★★★☆☆",
    avatar: "/path/to/avatar1.jpg",
  },
  {
    name: "Leo Junior",
    role: "Lead Designer",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec turpis orci. Lectus maecenas.",
    rating: "★★★★☆",
    avatar: "/path/to/avatar2.jpg",
  },
  {
    name: "Johan Zein",
    role: "Lead Designer",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec turpis orci. Lectus maecenas.",
    rating: "★★★★☆",
    avatar: "/path/to/avatar3.jpg",
  },
];

const Testimonial = () => {
  return (
    <Box className="py-8 md:px-24">
      <Text
        fontSize="4xl"
        textAlign="center"
        mb={8}
        className="text-color-c5 dark:text-color-c4"
      >
        Testimonials from our students
      </Text>
      <Box className="w-full hidden md:block" mx="auto" p={8} borderRadius="lg">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1.8}
          className=""
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[Autoplay, EffectCoverflow, Pagination]}
          spaceBetween={30}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Flex
                direction="column"
                align="center"
                className="bg-color-c4 dark:bg-transparent dark:border-2 dark:border-color-c2 dark:text-color-c4"
                p={8}
                gap={8}
                borderRadius="lg"
                boxShadow="md"
              >
                <Box className="flex w-full gap-4 items-center">
                  <Image
                    src={testimonial.avatar}
                    alt={""}
                    width={80}
                    height={60}
                    className="rounded-full bg-red-500 w-16 h-16"
                  />
                  <Box className="flex flex-col justify-center">
                    <Text fontWeight="bold" fontSize="xl" mb={1}>
                      {testimonial.name}
                    </Text>
                    <Box className="flex gap-4">
                      <Text color="gray.500">{testimonial.role}</Text>
                      <Text fontSize="2xl" color="yellow.400">
                        {testimonial.rating}
                      </Text>
                    </Box>
                  </Box>
                </Box>
                <Text textAlign={"center"} fontSize={"xl"}>
                  It was a very good experience
                </Text>
                <Text fontSize="md" mb={4} textAlign="start">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Assumenda ipsum, cupiditate repudiandae quasi exercitationem
                  rerum doloribus magni consequatur voluptates magnam eos facere
                  deserunt. Impedit, in? Alias magnam sint quasi ex?
                </Text>
              </Flex>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Box className=" md:hidden flex flex-col gap-4 px-6">
        {testimonials.map((testimonial, index) => (
          <Flex
            key={index}
            direction="column"
            align="center"
            className="border-2 border-color-c2 bg-color-c4 dark:bg-transparent dark:border-2 dark:border-color-c2 dark:text-color-c4"
            p={8}
            gap={8}
            borderRadius="lg"
          >
            <Box className="flex w-full gap-4 items-center">
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                width={80}
                height={60}
                className="rounded-full bg-red-500 w-16 h-16"
              />
              <Box className="flex flex-col justify-center">
                <Text fontWeight="bold" fontSize="xl" mb={1}>
                  {testimonial.name}
                </Text>
                <Box className="flex gap-4">
                  <Text color="gray.500">{testimonial.role}</Text>
                  <Text fontSize="2xl" color="yellow.400">
                    {testimonial.rating}
                  </Text>
                </Box>
              </Box>
            </Box>
            <Text textAlign={"center"} fontSize={"xl"}>
              It was a very good experience
            </Text>
            <Text fontSize="md" mb={4} textAlign="start">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Assumenda ipsum, cupiditate repudiandae quasi exercitationem rerum
              doloribus magni consequatur voluptates magnam eos facere deserunt.
              Impedit, in? Alias magnam sint quasi ex?
            </Text>
          </Flex>
        ))}
      </Box>
    </Box>
  );
};

export default Testimonial;
