import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import Input from "@components/Input";
import Button from "@components/Button/Button";

import styles from "./PersonForm.module.scss";

const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = (e) => {
    setDirty(true);
  };

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid,
  };
};

const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true);
  const [emailError, setEmailError] = useState(true);
  const [inputValid, setInputValid] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "isEmpty":
          value ? setEmpty(false) : setEmpty(true);
          break;
        case "isEmail":
          const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
          re.test(String(value).toLowerCase())
            ? setEmailError(false)
            : setEmailError(true);
          break;
      }
    }
  }, [value]);

  useEffect(() => {
    if (isEmpty || isEmpty) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, isEmpty]);

  return {
    isEmpty,
    emailError,
    inputValid
  };
};

const PersonForm = () => {
  const email = useInput("", { isEmpty: true });

  //   const [name, setName] = useState("");

  //   const [userName, setUserName] = useState("");
  //   const [email, setEmail] = useState("");

  //   const [street, setStreet] = useState("");
  //   const [city, setCity] = useState("");
  //   const [zipCode, setZipCode] = useState("");
  //   const [phone, setPhone] = useState("");
  //   const [website, setWebsite] = useState("");
  //   const [textarea, setTextarea] = useState("");

  //   const handleInputChangeName = (value) => {
  //     setName(value);
  //   };

  //   const handleInputChangeUserName = (value) => {
  //     setUserName(value);
  //   };
  //   const handleInputChangeEmail = (value) => {
  //     setEmail(value);
  //   };
  //   const handleInputChangeStreet = (value) => {
  //     setStreet(value);
  //   };
  //   const handleInputChangeCity = (value) => {
  //     setCity(value);
  //   };
  //   const handleInputChangeZipCode = (value) => {
  //     setZipCode(value);
  //   };
  //   const handleInputChangePhone = (value) => {
  //     setPhone(value);
  //   };
  //   const handleInputChangeWebsite = (value) => {
  //     setWebsite(value);
  //   };

  //   const handleInputChangeTextarea = (e) => {
  //     setTextarea(e.target.value);
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={cn(styles.wrapper__input)}>
          {/* <Input
            name="name"
            type="text"
            label="Name"
            value={name.value}
            
            className={styles.input}
          />
          <Input
            name="userName"
            type="text"
            value={userName.value}
            label="User name"
           
            className={styles.input}
          /> */}

          {email.isDirty && email.isEmpty && (
            <div style={{ color: "red" }}>Поле пусто</div>
          )}

          {email.isDirty && email.emailError && (
            <div style={{ color: "red" }}>неккоректный</div>
          )}
          <input
            name="email"
            type="email"
            value={email.value}
            label="E-mail"
            onChange={(e) => email.onChange(e)}
            onBlur={(e) => email.onBlur(e)}
            className={styles.input}
          />
          {/* <Input
            name="street"
            type="text"
            value={street.value}
            label="Street"
            
            className={styles.input}
          />
          <Input
            name="city"
            type="text"
            label="City"
            value={city.value}
            
            className={styles.input}
          />
          <Input
            name="zipCode"
            type="number"
            value={zipCode.value}
            label="Zip code"
            
            className={styles.input}
          />
          <Input
            name="phone"
            type="phone"
            value={phone}
            label="Phone"
            
            className={styles.input}
          />
          <Input
            type="text"
            name="website"
            value={website}
            label="Website"
           
            className={styles.input}
          />
          <label className={styles.textarea__label}>
            Comment:
            <textarea
              value={textarea}
              
              className={styles.textarea}
            />
          </label> */}
        </div>
        <Button disabled={!email.inputValid} className={styles.b} text="Отправить" type="submit" />
      </form>
    </>
  );
};

PersonForm.propTypes = {};

export default PersonForm;
