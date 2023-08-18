import React from "react";
import {
  Box,
  ChakraProvider,
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Center,
  SimpleGrid,
  Input,
} from "@chakra-ui/react";


export default function ColorPicker( { color, setColor, disabled, disableInput } ) {

  const colors = [
    "gray",
    "cyan",
    "green",
    "red",
    "orange",
    "yellow",
    "purple",
    "pink",
    "blue",
    "teal",
  ];

  return (
        <Center>
        <Popover variant="picker">
          <PopoverTrigger>
            <Button
              aria-label={color}
              colorScheme={color}
              height="38px"
              width="38px"
              padding={0}
              minWidth="unset"
              borderRadius={3}
              isDisabled={disabled}
            ></Button>
          </PopoverTrigger>
          <PopoverContent width="170px">
            <PopoverArrow bg={color} />
            <PopoverCloseButton color="white" />
            <PopoverHeader
              height="100px"
              backgroundColor={color}
              borderTopLeftRadius={5}
              borderTopRightRadius={5}
              color="white"
            >
              <Center height="100%">{color}</Center>
            </PopoverHeader>
            <PopoverBody height="120px">
              <SimpleGrid columns={5} spacing={2}>
                {colors.map((c) => (
                  <Button
                    key={c}
                    aria-label={c}
                    colorScheme={c}
                    height="22px"
                    width="22px"
                    padding={0}
                    minWidth="unset"
                    borderRadius={3}
                    _hover={{ background: c }}
                    onClick={() => {
                      setColor(c);
                    }}
                  ></Button>
                ))}
              </SimpleGrid>
              {!disableInput &&
              <Input
                borderRadius={3}
                marginTop={3}
                placeholder="red.100"
                size="sm"
                value={color}
                onChange={(e) => {
                  setColor(e.target.value);
                }}
              />}
            </PopoverBody>
          </PopoverContent>
        </Popover>
        </Center>
  );
}

