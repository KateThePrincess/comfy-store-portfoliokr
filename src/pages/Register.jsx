import { Form, Link } from 'react-router-dom';
import { FormInput, SubmitBtn } from '../components';
const Register = () => {
  return (
    <section className='h-screen grid place-items-center'>
      <Form
        method='post'
        className={`card  p-8 bg-base-100 shadow-lg flex flex-col gap-y-4 w-[80%] md:w-96
          ${localStorage.theme === 'myLight' ? 'bg-base-100' : 'bg-base-200'}
        `}
      >
        <h4 className='text-center text-3xl font-bold capitalize'>register</h4>
        <FormInput type='text' label='username' name='username' />
        <FormInput type='email' label='email' name='email' />
        <FormInput type='password' label='password' name='password' />
        <div className='mt-4'>
          <SubmitBtn text='register' />
        </div>

        <p className='text-center'>
          Already a member?
          <Link
            to='/login'
            className='ml-2 link link-hover link-secondary capitalize'
          >
            login.
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Register;
