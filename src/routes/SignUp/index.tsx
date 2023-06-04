import style from './style.module.scss';
import Button from '@/components/Button';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import LoginBanner from '@/components/LoginBanner';
import routes from '../routes';
import { Link } from 'react-router-dom';

const messages = {
  form: {
    header: 'Create an account',
    email: 'Email Address',
    name: 'Name',
    username: 'Username',
    password: 'Password',
    submit: 'Sign Up',
    termsOfService:
      'By clicking the “Sign up” button, you agree to Finder Pet Terms of Service and confirm that you have read our Privacy Policy.',
  },
  alreadyMember: 'Already a member?',
  login: 'Sign In',
};

const createUserFormSchema = z.object({
  email: z
    .string()
    .nonempty('this field is required')
    .email('Invalid email format'),
  name: z.string().nonempty('this field is required'),
  username: z.string().nonempty('this field is required'),
  password: z
    .string()
    .nonempty('this field is required')
    .min(6, 'Password should have minimum 6 characters'),
});

type CreateUserFormData = z.infer<typeof createUserFormSchema>;

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });

  const createUser = (data: CreateUserFormData) => alert(JSON.stringify(data));

  return (
    <LoginBanner>
      <form className={style.form} onSubmit={handleSubmit(createUser)}>
        <h1>{messages.form.header}</h1>
        <label htmlFor="email">
          {messages.form.email}{' '}
          {errors.email && <span>*{errors.email.message}</span>}
        </label>
        <input id="email" type="email" {...register('email')} />

        <label htmlFor="name">
          {messages.form.name}{' '}
          {errors.name && <span>*{errors.name.message}</span>}
        </label>
        <input id="name" {...register('name')} />

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

        <p>{messages.form.termsOfService}</p>
        <Button type="submit">{messages.form.submit}</Button>
      </form>
      <p className={style.login}>
        {messages.alreadyMember} <Link to={routes.login}>{messages.login}</Link>
      </p>
    </LoginBanner>
  );
}

export default SignUp;
