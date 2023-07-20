export const nameValdation = {
  require: '* Поле обязательно для заполнения',
  validate: (value, string) => {
    if (!/([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/i.test(value.name)) {
      return 'Имя должно содержать не менее 2-х символов';
    }
    return true;
  },
};

export const surnameValdation = {
  require: '* Поле обязательно для заполнения',
  validate: (value, string) => {
    if (!/([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/i.test(value.surname)) {
      return 'Фамилия должна содержать не менее 2-х символов';
    }
    return true;
  },
};

export const emailValdation = {
  require: '* Поле обязательно для заполнения',
  validate: (value, string) => {
    if (!/([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/i.test(value.email)) {
      // if (!/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email))
      return 'Введите корректно свой email';
    }
    return true;
  },
};

export const passwordValdation = {
  require: '* Поле обязательно для заполнения',
  validate: (value, string) => {
    if (!/([А-Я0-9]{1}[а-яё0-9]{5,23}|[A-Z0-9]{1}[a-z0-9]{5,23})$/i.test(value.password)) {
      return 'Пароль должен содержать не менее 6-ти символов';
    }
    return true;
  },
};
