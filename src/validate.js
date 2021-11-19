
export default function validate(values) {
    let errors = {};
  
    if (!values.username.trim()) {
      errors.username = 'Nazwa użytkownika jest wymagana';
    }
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
  
    if (!values.email) {
      errors.email = 'Email jest wymagany';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email jest błędny';
    }
    if (!values.password) {
      errors.password = 'Hasło jes wymagane';
    } else if (values.password.length < 6) {
      errors.password = 'Hasło musi mieć minimum 6 znaków';
    }
  
    if (!values.password2) {
      errors.password2 = 'Hasło jes wymagane';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Hasła nie są identyczne';
    }
    return errors;
  }