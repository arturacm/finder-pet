import style from './style.module.scss';
import Button from '@/components/Button';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import LoginBanner from '@/components/LoginBanner';
import { Link, useNavigate } from 'react-router-dom';
import routes from '../routes';
import { supabase } from '@/remote/superbase';
import { useAppDispatch } from '@/redux/hooks';
import { login } from '@/redux/user/slice';
import { useState } from 'react';
import type { AuthError } from '@supabase/supabase-js';

const messages = {
  form: {
    header: 'Sign in',
    username: 'Username or Email',
    password: 'Password',
    submit: 'Log In',
  },
  forgotPassword: 'Forgot your password?',
  notMember: 'Not a member? ',
  signUp: 'Sign up now',
};

const loginFormSchema = z.object({
  email: z
    .string()
    .nonempty('this field is required')
    .email('Invalid email format'),
  password: z
    .string()
    .nonempty('this field is required')
    .min(6, 'Password should have minimum 6 characters'),
});

type LoginFormData = z.infer<typeof loginFormSchema>;

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState<AuthError | null>(null);
  const createUser = async (formData: LoginFormData) => {
    const { data, error } = await supabase.auth.signInWithPassword(formData);

    console.log('data', data, 'error', error);
    if (!error) {
      dispatch(login(data));
      navigate(routes.home);
    } else {
      setError(error);
    }
  };

  return (
    <LoginBanner>
      <form className={style.form} onSubmit={handleSubmit(createUser)}>
        <h1>{messages.form.header}</h1>

        <label htmlFor="email">
          {messages.form.username}{' '}
          {errors.email && <span>*{errors.email.message}</span>}
        </label>
        <input id="email" {...register('email')} />

        <label htmlFor="password">
          {messages.form.password}{' '}
          {errors.password && <span>*{errors.password.message}</span>}
        </label>
        <input id="password" type="password" {...register('password')} />
        {error && <span className={style.authError}>* {error.message}</span>}
        <Button type="submit">{messages.form.submit}</Button>
      </form>
      <a href="#" className={style.forgotPassword}>
        {messages.forgotPassword}
      </a>
      <p className={style.signup}>
        {messages.notMember} <Link to={routes.signUp}>{messages.signUp}</Link>
      </p>
    </LoginBanner>
  );
}

export default Login;
