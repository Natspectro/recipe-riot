import {
  Button,
  TextInput,
  PasswordInput,
  Container,
  Stack,
  Text,
  Flex,
  Title,
} from "@mantine/core";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { UserPlus } from "tabler-icons-react";
import SignUp from "../components/SignUp";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logIn = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
  };
  return (
    <Container size={"xs"}>
      <Stack spacing={"lg"}>
        <Title order={3} color="brand.5">
          Login
        </Title>
        <TextInput
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="youremail@gmail.com"
          label="Email"
        />
        <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password123"
          label="Password"
        />
        <Flex
          gap="md"
          justify="center"
          align="center"
          direction={{ base: "column", xxs: "row" }}
          wrap="wrap"
        >
          <Button onClick={logIn}>Log in</Button>
          <Text color={"brand"} weight={600} mx={0}>
            or
          </Text>
          <SignUp />
        </Flex>
      </Stack>
    </Container>
  );
};

export default SignIn;
