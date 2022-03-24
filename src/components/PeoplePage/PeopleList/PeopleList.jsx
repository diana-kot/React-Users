import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

import styles from "./PeopleList.module.scss";

const PeopleList = ({ people }) => {
  const { peopleId } = useParams();
  return (
    <>
      <ul className={styles.list__container}>
        {people.map(({ id, name, address, company }) => (
          <li className={styles.list__item} key={id}>
            <p className={styles.person__info}>
              <span className={styles.person__span}>ФИО:</span>
              {name}
            </p>
            <p className={styles.person__info}>
              <span className={styles.person__span}>город:</span>
              {address}
            </p>
            <p className={styles.person__info}>
              <span className={styles.person__span}>компания:</span>
              {company}
            </p>
            <Link className={styles.person__link} to={`/people/${id}`}>
              Подробнее
            </Link>
          </li>
        ))}
      </ul>
      <p className={styles.list__text}>Найдено {people.length} пользователей</p>
    </>
  );
};

PeopleList.propTypes = {
  people: PropTypes.array,
};

export default PeopleList;
