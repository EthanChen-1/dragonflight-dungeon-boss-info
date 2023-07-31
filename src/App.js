import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import AlgetharsAcademy from "./pages/algetharsacademy/AlgetharsAcademy";
import BrackenhideHallow from "./pages/brackenhidehallow/BrackenhideHallow";
import HallsOfInfusion from "./pages/HallsOfInfusion";
import Neltharus from "./pages/Neltharus";
import RubyLifePools from "./pages/RubyLifePools";
import TheAzureVault from "./pages/TheAzureVault";
import TheNokhudOffensive from "./pages/TheNokhudOffensive";
import UldamanLegacyOfTyr from "./pages/UldamanLegacyOfTyr";
import OvergrownAncient from "./pages/algetharsacademy/OvergrownAncient";
import Crawth from "./pages/algetharsacademy/Crawth";
import Vexamus from "./pages/algetharsacademy/Vexamus";
import EchoOfDoragosa from "./pages/algetharsacademy/EchoOfDoragosa";
import ErrorLayout from "./pages/ErrorLayout";
import HackclawsWarBand from "./pages/brackenhidehallow/HackclawsWarBand";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorLayout />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "algetharsacademy",
          element: <AlgetharsAcademy />,
          children: [
            { path: "overgrownancient", element: <OvergrownAncient /> },
            { path: "crawth", element: <Crawth /> },
            { path: "vexamus", element: <Vexamus /> },
            { path: "echoofdoragosa", element: <EchoOfDoragosa /> },
          ],
        },
        {
          path: "brackenhidehallow",
          element: <BrackenhideHallow />,
          children: [
            { path: "hackclawswarband", element: <HackclawsWarBand /> },
          ],
        },
        { path: "hallsofinfusion", element: <HallsOfInfusion /> },
        { path: "neltharus", element: <Neltharus /> },
        { path: "rubylifepools", element: <RubyLifePools /> },
        { path: "theazurevault", element: <TheAzureVault /> },
        { path: "thenokhudoffensive", element: <TheNokhudOffensive /> },
        { path: "uldamanlegacyoftyr", element: <UldamanLegacyOfTyr /> },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}
