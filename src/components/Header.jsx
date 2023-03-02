import {
  Flex,
  Button,
  Image,
  Anchor,
  Text,
  Box,
  Menu,
  Group,
} from "@mantine/core";
import { NavLink } from "react-router-dom";
import { useViewportSize } from "@mantine/hooks";
import { Home, InfoCircle, Login, SquarePlus } from "tabler-icons-react";
import SignUp from "./SignUp";

const Header = () => {
  const { height, width } = useViewportSize();
  let nav = <div></div>;

  if (width <= 590) {
    nav = (
      <Flex ml={"auto"} justify="flex-start" align="center" p={10}>
        <Menu shadow="md">
          <Menu.Target>
            <Button>Menu</Button>
          </Menu.Target>

          <Menu.Dropdown
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <NavLink to="/" style={{ textDecoration: "none", width: "100%" }}>
              <Menu.Item
                icon={<Home size={24} strokeWidth={2.5} color={"#E2453D"} />}
              >
                <Text color={"brand"} weight={600}>
                  Home
                </Text>
              </Menu.Item>
            </NavLink>
            <NavLink
              to="/about"
              style={{ textDecoration: "none", width: "100%" }}
            >
              <Menu.Item
                icon={
                  <InfoCircle size={24} strokeWidth={2.5} color={"#E2453D"} />
                }
              >
                <Text color={"brand"} weight={600}>
                  About
                </Text>
              </Menu.Item>
            </NavLink>
            <NavLink
              to="/add"
              style={{ textDecoration: "none", width: "100%" }}
            >
              <Menu.Item
                icon={
                  <SquarePlus size={24} strokeWidth={2.5} color={"#E2453D"} />
                }
              >
                <Text color={"brand"} weight={600}>
                  Add
                </Text>
              </Menu.Item>
            </NavLink>
            <NavLink
              to="/signin"
              style={{ textDecoration: "none", width: "100%" }}
            >
              <Menu.Item
                icon={<Login size={24} strokeWidth={2.5} color={"#E2453D"} />}
              >
                <Text color={"brand"} weight={600}>
                  Log In
                </Text>
              </Menu.Item>
            </NavLink>
          </Menu.Dropdown>
        </Menu>
      </Flex>
    );
  } else {
    nav = (
      <Flex ml={"auto"} gap={"sm"} align="center">
        <NavLink to="/" style={{ textDecoration: "none", width: "100%" }}>
          <Text color={"brand"} weight={600}>
            Home
          </Text>
        </NavLink>

        <NavLink to="/about" style={{ textDecoration: "none", width: "100%" }}>
          <Text color={"brand"} weight={600}>
            About
          </Text>
        </NavLink>

        <NavLink to="/add" style={{ textDecoration: "none" }}>
          <Text color={"brand"} weight={600}>
            Add
          </Text>
        </NavLink>
        <NavLink to="/signin" style={{ textDecoration: "none", width: "100%" }}>
          <Button variant="outline">
            <Text color={"brand"} weight={600}>
              Log-In
            </Text>
          </Button>
        </NavLink>
      </Flex>
    );
  }

  return (
    <>
      <Flex
        gap={0}
        justify="flex-start"
        align="center"
        p={{ base: 10, xxs: 20 }}
      >
        <Image src="/Logo-Small.svg" alt="Logo" maw={250} miw={190} />
        {nav}
      </Flex>
    </>
  );
};

export default Header;
