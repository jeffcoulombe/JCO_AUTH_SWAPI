import { BrowserRouter, Route, Routes } from "react-router-dom";
import Film from "../films/components/film";
import Films from "../films/components/films";
import People from "../people/components/people";
import Peoples from "../people/components/peoples";
import Starship from "../starships/components/starship";
import Starships from "../starships/components/starships";
import Vehicle from "../vehicles/components/vehicle";
import Vehicles from "../vehicles/components/vehicles";
import NavMenu from "./NavMenu";
import AuthLayout from '../auth/components/AuthLayout';
import AppContainer from '../auth/components/AppContainer';
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <BrowserRouter>
        <AppContainer>
        <NavMenu />
          <Container>
            <Routes>
              <Route path='login' element={<AuthLayout />} />
              <Route path="*" element={<Films />} />
              <Route path="/film" element={<Films />} />
              <Route path="/film/:id" element={<Film />} />
              <Route path="/vehicle" element={<Vehicles />} />
              <Route path="/vehicle/:id" element={<Vehicle />} />
              <Route path="/starships" element={<Starships />} />
              <Route path="/starships/:id" element={<Starship />} />
              <Route path="people" element={<Peoples />} />
              <Route path="/people/:id" element={<People />} />
            </Routes>
          </Container>
        </AppContainer>
    </BrowserRouter>
  );
};
export default App;
