import style from './style.module.scss';
import Button from '@/components/Button';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import LoginBanner from '@/components/LoginBanner';
import { Link } from 'react-router-dom';
import routes from '../routes';

const messages = {
  form: {
    header: 'Sign in',
    username: 'Username or Email',
    password: 'Password',
    submit: 'Log In',
  },
  forgotPassword: 'Forgot your password?',
  notMember: 'Not a member? ',
  signUp: 'Sign up now'
};

const loginFormSchema = z.object({
  username: z.string().nonempty('this field is required'),
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

  const createUser = (data: LoginFormData) => console.log(data);

  return (
    <LoginBanner>
      <form className={style.form} onSubmit={handleSubmit(createUser)}>
        <h1>{messages.form.header}</h1>

        <label htmlFor="username">
          {messages.form.username}{' '}
          {errors.username && <span>*{errors.username.message}</span>}
        </label>
        <input id="username" {...register('username')} />

        <label htmlFor="password">
          {messages.form.password}{' '}
          {errors.password && <span>*{errors.password.message}</span>}
        </label>
        <input id="password" type="password" {...register('password')} />

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
