import { AppShell } from "@mantine/core";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const RootLayout = () => {
  return (
    <AppShell padding={20} header={<Header />}>
      <Outlet />
    </AppShell>
  );
};

export default RootLayout;
