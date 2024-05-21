import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import styles from './LoginForm.module.scss';

const {form, label, input, button, checkbox, text, box} = styles;

const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().min(8, 'Пароль повинен містити щонайменше 8 символів')
    .matches(/[a-z]/, 'Пароль повинен містити щонайменше одну маленьку літеру')
    .matches(/[A-Z]/, 'Пароль повинен містити щонайменше одну велику літеру')
    .matches(/[0-9]/, 'Пароль повинен містити щонайменше одну цифру')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Пароль повинен містити щонайменше один спеціальний символ')
    .required('Обов\'язкове поле'),
  })
  .required();

const LoginForm = () => {
  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = data => console.log(data);

  return (
    <form className={form} onSubmit={handleSubmit(onSubmit)}>
      <label className={label} htmlFor="">
        Email
        <input className={input}
          type="text"
          {...register('email', { required: true, maxLength: 20 })}
        />
      </label>
      <label className={label}>
        Password
        <input className={input} type="password" {...register('password')} />
      </label>

      <div className={box}>
        <label className={label}>
          <input className={input} type="checkbox" {...register('checkbox')} />
        </label>
        <Link to={'/changePassword'}>Forgot password?</Link>
      </div>
      <button className={button} type="submit">Login</button>
      <p className={text}>or</p>
      <Link to={'/google'}>G</Link>
      <Link to={'/facebook'}>f</Link>
    </form>
  );
};

export default LoginForm;
