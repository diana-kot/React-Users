import PropTypes from "prop-types";
import { useState, useEffect } from "react";

import PeopleList from "@components/PeoplePage/PeopleList";


import { getApiResource } from "../../utils/network";
import { PEOPLE_API } from "@constants/api";

import styles from "./PeoplePage.module.scss";

const PeoplePage = () => {
  const [people, setPeople] = useState(null);

  const getResource = async (url) => {
    const res = await getApiResource(url);

    const peopleList = res.map(({ id, name, address, company }) => {
      return {
        id,
        name,
        address: address.city,
        company: company.name,
      };
    });
    setPeople(peopleList);
  };

  useEffect(() => {
    getResource(PEOPLE_API);
  }, []);

  return (
    <>
    <div className="page__container">
     
    <h2 className="title">Список пользователей</h2>
      {people && <PeopleList people={people} />}
     
    </div>
     
    </>
  );
};

PeoplePage.propTypes = {
  // text: PropTypes.string,
};

export default PeoplePage;
