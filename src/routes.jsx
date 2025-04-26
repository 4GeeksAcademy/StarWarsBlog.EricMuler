import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import { Home } from "./pages/Home";
import AllPlanets from "./pages/AllPlanets";
import AllVehicles from "./pages/AllVehicles";
import AllCharacters from "./pages/AllCharacters";
import DetailsPlanets from "./pages/DetailsPlanets";
import DetailsCharacters from "./pages/DetailsCharacters";
import DetailsVehicles from "./pages/DetailsVehicles";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>}>
      <Route index element={<Home />} />
      <Route path="characters" element={<AllCharacters />} />
      <Route path="detailsCharacters/:id" element={<DetailsCharacters />} />
      <Route path="planets" element={<AllPlanets />} />
      <Route path="detailsplanets/:id" element={<DetailsPlanets />} />
      <Route path="vehicles" element={<AllVehicles />} />
      <Route path="detailsvehicles/:id" element={<DetailsVehicles />} />
    </Route>
  )
);
