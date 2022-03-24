import { BrowserRouter, Routes, Route } from "react-router-dom";
import PersonPage from "@containers/PersonPage";
import PeopleList from "@components/PeoplePage/PeopleList";
import routesConfig from "@routes/routesConfig";
import { Router } from "@routes/routesConfig";
import Button from "@components/Button/Button";
import PeoplePage from "@containers/PeoplePage";

import styles from "./App.module.scss";

const App = () => {
  const handleChangePrev = () => {};

  return (
    <>
     
      <div className={styles.wrapper}>
        <main className={styles.main}>
          <div className={styles.content}>
            <div className={styles.content__left}>
              <p className={styles.content__title}>Сортировка</p>
              <Button text="по городу" onClick={handleChangePrev} />
              <Button text="по компании" onClick={handleChangePrev} />
            </div>
            <div className={styles.content__right}>
              <Router></Router>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
