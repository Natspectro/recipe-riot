import { useDisclosure } from "@mantine/hooks";
import {
  Modal,
  Button,
  TextInput,
  Text,
  Container,
  Stack,
  Title,
  PasswordInput,
} from "@mantine/core";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { UserPlus } from "tabler-icons-react";
import { Navigate, redirect, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const logIn = async () => {
    await createUserWithEmailAndPassword(auth, email, password).then(() => {
      navigate("/");
    });
  };
  return (
    <>
      <Modal
        zIndex={300}
        opened={opened}
        onClose={close}
        title={
          <Title order={3} color="brand.5">
            Sign up
          </Title>
        }
      >
        <div>
          <Container size={"xs"}>
            <Stack spacing={"lg"}>
              <TextInput
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="youremail@gmail.com"
                label="Email"
                required
              />
              <PasswordInput
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password123"
                label="Password"
                required
                description="Try to use a combination of letters, numbers, and symbols"
              />

              <Button onClick={logIn}>Sign Up</Button>
            </Stack>
          </Container>
        </div>
      </Modal>

      <Button
        onClick={open}
        variant="gradient"
        gradient={{ from: "orange", to: "brand" }}
        weight={600}
      >
        <UserPlus size={24} strokeWidth={2.5} color={"#FFFFFF"} />
        <Text ml={10}>Create new Account</Text>
      </Button>
    </>
  );
};

export default SignUp;
