import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { DetailsCharacters } from "./pages/DetailsCharacters";
import { AllPlanets } from "./pages/AllPlanets";
import DetailsPlanets from "./pages/DetailsPlanets";
import { AllVehicles } from "./pages/AllVehicles";
import DetailsVehicles from "./pages/DetailsVehicles";


export const router = createBrowserRouter(
    createRoutesFromElements(

        <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >

            <Route path="/detailsplanets/:id" element={<DetailsPlanets />} />
            <Route path="/planets" element={<AllPlanets/>} /> 
            <Route path="/detailsvehicles/:id" element={<DetailsVehicles />} />
            <Route path="/vehicles" element={<AllVehicles/>} /> 
            <Route path="/" element={<Home />} />
            <Route path="/detailsCharacters/:id" element={<DetailsCharacters />} />
            <Route path="/Characters" element={<AllCharacters/>} /> 
        
        </Route>
    )
);