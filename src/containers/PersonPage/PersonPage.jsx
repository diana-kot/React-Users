import PropTypes from "prop-types";
import { useParams } from 'react-router-dom';


import  PersonForm  from "@components/PersonPage/PersonForm";

import styles from "./PersonPage.module.scss";

const PersonPage = () => {
  const { id } = useParams();




  return <>
  <p>hrfjhff</p>
  <PersonForm/>
  </>;
};

PersonPage.propTypes = {
  // text: PropTypes.string,
};

export default PersonPage;
