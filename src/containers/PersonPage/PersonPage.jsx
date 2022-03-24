import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

import PersonForm from "@components/PersonPage/PersonForm";
import Button from "@components/Button/Button"

import styles from "./PersonPage.module.scss";

const PersonPage = () => {
  const { id } = useParams();
  const handleChangePrev = () => {};

  return (
    <>
      <div className="page__container">
      <div className={styles.page__info}>
      <h2 className="title">Профиль пользоваетля</h2>
      <Button text="Редактировать" onClick={handleChangePrev} />
      </div>
      
        <PersonForm />
      </div>

      
    </>
  );
};

PersonPage.propTypes = {
  // text: PropTypes.string,
};

export default PersonPage;
