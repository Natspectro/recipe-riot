import {
  Modal,
  Button,
  TextInput,
  PasswordInput,
  Container,
  Stack,
  Text,
  Flex,
} from "@mantine/core";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { UserPlus } from "tabler-icons-react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logIn = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
  };
  return (
    <Container size={"xs"}>
      <Stack spacing={"lg"}>
        <TextInput
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          label="Email"
        />
        <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
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
          <NavLink
            to="/"
            style={{
              textDecoration: "none",
            }}
          >
            <Text component={Button} color={"brand.1"} weight={600}>
              <UserPlus size={24} strokeWidth={2.5} color={"#FFFFFF"} />
              <Text ml={10}>Create new Account</Text>
            </Text>
          </NavLink>
        </Flex>
      </Stack>
    </Container>
  );
};

export default SignUp;
