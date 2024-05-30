import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import styles from './LoginForm.module.scss';
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
  error
} = styles;

const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().required("Обов'язкове поле"),
  })
  .required();

const LoginForm = () => {
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
        Пошта
        <input
          className={input}
          type="text"
          {...register('email', { required: true, maxLength: 20 })}
        />
        <p className={error}>{errors.email?.message}</p>
      </label>
      <label className={label}>
        Пароль
        <input className={input} type="password" {...register('password')} />
        <p className={error}>{errors.password?.message}</p>
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
          Запам&apos;ятати мене
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

export default LoginForm;
