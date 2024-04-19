import { Form, Link } from 'react-router-dom';
import { FormInput, SubmitBtn } from '../components';

const Login = () => {
  return (
    <section className='h-screen grid place-items-center'>
      <Form
        method='post'
        className={`card w-[80%] p-8 bg-base-100 shadow-lg flex flex-col gap-y-4 md:w-96 
          ${localStorage.theme === 'myLight' ? 'bg-base-100' : 'bg-base-200'}
        `}
      >
        <h4 className='text-center text-3xl font-bold capitalize'>login</h4>
        <FormInput
          type='email'
          label='email'
          name='identifier'
          defaultValue='test@test.com'
        />
        <FormInput
          type='password'
          label='password'
          name='password'
          defaultValue='secret'
        />
        <div className='mt-4 flex flex-col gap-y-4'>
          <SubmitBtn text='login' />
        </div>
        <button type='button' className='btn btn-primary btn-block uppercase'>
          guest user
        </button>
        <p className='text-center'>
          Not a member yet?
          <Link
            to='/register'
            className='ml-2 link link-hover link-secondary capitalize'
          >
            register.
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Login;
