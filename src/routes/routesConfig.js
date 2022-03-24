import { Routes, Route, BrowserRouter, link } from "react-router-dom";

import PeoplePage from "@containers/PeoplePage";
import PersonPage from "@containers/PersonPage";
import PeopleList from "@components/PeoplePage/PeopleList";
import App from "../containers/App/App";

const Home = () => <h2>home</h2>;

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PeoplePage />}> </Route>
        <Route path="/people/:id" element={<PersonPage />} />
        <Route path="*" element={<h2>404</h2>} />
      </Routes>
    </BrowserRouter>
  );
};

