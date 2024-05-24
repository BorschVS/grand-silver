import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import styles from './SignUpForm.module.scss';

import { IoMdCheckmark } from 'react-icons/io';
import { useState } from 'react';

import { ReactComponent as GoogleIcon } from 'img/icons/google.svg';
import { ReactComponent as FacebookIcon } from 'img/icons/facebook.svg';

const {
  form,
  label,
  input,
  button,
  hiddenCheckbox,
  text,
  box,
  checkboxLabel,
  checkbox,
  checkmark,
  link,
  socialContainer,
  error,
} = styles;

const schema = yup
  .object({
    email: yup.string().required(),
    number: yup.number().required(),
    password: yup
      .string()
      .min(8, 'Пароль повинен містити щонайменше 8 символів')
      .matches(
        /[a-z]/,
        'Пароль повинен містити щонайменше одну маленьку літеру'
      )
      .matches(/[A-Z]/, 'Пароль повинен містити щонайменше одну велику літеру')
      .matches(/[0-9]/, 'Пароль повинен містити щонайменше одну цифру')
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        'Пароль повинен містити щонайменше один спеціальний символ'
      )
      .required("Обов'язкове поле"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Паролі повинні співпадати')
      .required("Підтвердження паролю обов'язкове"),
  })
  .required();

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = data => console.log(data);

  const [isChecked, setIsChecked] = useState(false);

  return (
    <form className={form} onSubmit={handleSubmit(onSubmit)}>
      <label className={label}>
        Ім'я
        <input
          className={input}
          type="text"
          {...register('name', { required: true, maxLength: 20 })}
        />
        <p className={error}>{errors.name?.message}</p>
      </label>
      <label className={label}>
        Прізвище
        <input
          className={input}
          type="text"
          {...register('surname', { required: true, maxLength: 20 })}
        />
        <p className={error}>{errors.surname?.message}</p>
      </label>
      <label className={label}>
        Телефон
        <input
          className={input}
          type="text"
          {...register('phone', { required: true, maxLength: 12 })}
        />
      </label>
      <label className={label}>
        Пошта
        <input
          className={input}
          type="email"
          {...register('email', { required: true, maxLength: 20 })}
        />
        <p className={error}>{errors.email?.message}</p>
      </label>
      <label className={label}>
        Пароль
        <input className={input} type="password" {...register('password')} />
        <p className={error}>{errors.password?.message}</p>
      </label>
      <label className={label}>
        Повторіть пароль
        <input
          className={input}
          type="password"
          {...register('confirmPassword')}
        />
        <p className={error}>{errors.confirmPassword?.message}</p>
      </label>

      <div className={box}>
        <label
          className={`${label} ${checkboxLabel}`}
          onChange={() => setIsChecked(!isChecked)}
        >
          <input
            className={`${input} ${hiddenCheckbox}`}
            type="checkbox"
            {...register('checkbox')}
          />
          <span className={checkbox}>
            {isChecked && <IoMdCheckmark className={checkmark} />}
          </span>
          Запам'ятати мене
        </label>
        <Link to={'/changePassword'} className={link}>
          Забули пароль?
        </Link>
      </div>
      <button className={button} type="submit">
        Увійти
      </button>
      <p className={text}>або</p>
      <div className={socialContainer}>
        <Link to={'/google'}>
          <GoogleIcon />
        </Link>
        <Link to={'/facebook'}>
          <FacebookIcon />
        </Link>
      </div>
    </form>
  );
};

export default SignUpForm;
