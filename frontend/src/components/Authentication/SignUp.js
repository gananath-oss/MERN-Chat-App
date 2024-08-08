import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const SignUp = () => {
  const [showPs, setShowPs] = useState(false);
  const [showCps, setShowCps] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmedPassword, setConfirmedPassword] = useState();
  const [pic, setPic] = useState();

  const postDetails = (pics) => {};

  const handleSubmit = () => {};

  return (
      <VStack spacing="5px">
        <FormControl id="first-name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            placeholder="Enter Your Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Enter Your Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              type={showPs ? "text" : "password"}
              placeholder="Enter Your Password!"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={() => setShowPs(!showPs)}>
                {showPs ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl id="confirmed-password" isRequired>
          <FormLabel>Confirmed Password</FormLabel>
          <InputGroup>
            <Input
              type={showCps ? "text" : "password"}
              placeholder="Enter Your Confirmed Password!"
              onChange={(e) => {
                setConfirmedPassword(e.target.value);
              }}
            />
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                onClick={() => setShowCps(!showCps)}
              >
                {showCps ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl id="pic">
          <FormLabel>Upload Your Picture</FormLabel>
          <Input
            type="file"
            p={1.5}
            accept="image/*"
            onChange={(e) => {
              postDetails(e.target.files[0]);
            }}
          ></Input>
        </FormControl>

        <Button
          colorScheme="purple"
          width="100%"
          style={{ marginTop: 15 }}
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
      </VStack>
  );
};

export default SignUp;
