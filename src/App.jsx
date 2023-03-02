import { useState } from "react";
import { MantineProvider, Text } from "@mantine/core";
import {
  createBrowserRouter,
  Routes,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//*pages
import Home from "./pages/Home";
import About from "./pages/About";
import RootLayout from "./layouts/RootLayout";
import Add from "./pages/Add";
import SignIn from "./pages/SignIn";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="add" element={<Add />} />
      <Route path="signin" element={<SignIn />} />
    </Route>
  )
);

function App() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colors: {
          brand: [
            "#FEFEFE",
            "#EDE2E1",
            "#E0C6C4",
            "#D7A9A7",
            "#D48B87",
            "#D76A64",
            "#E2453D",
            "#CC3E37",
            "#AB433D",
            "#904541",
            "#7B4442",
            "#694240",
            "#5B3F3D",
          ],
        },
        primaryColor: "brand",
        primaryShade: 6,
        breakpoints: {
          xxxs: 320,
          xxs: 480,
        },
      }}
    >
      <RouterProvider router={router} />
    </MantineProvider>
  );
}

export default App;
