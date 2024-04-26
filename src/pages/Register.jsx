import { Form, Link, redirect } from 'react-router-dom';
import { FormInput, SubmitBtn } from '../components';
import { customFetch } from '../utils';
import { toast } from 'react-toastify';
const url = '/auth/local/register';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  try {
    const response = await customFetch.post(url, data);
    toast.success('Account succesufully created!');
    return redirect('/login');
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      'please double check your credentials';
    toast.error(errorMessage);
  }

  return null;
};
const Register = () => {
  return (
    <section className='h-screen grid place-items-center'>
      <Form
        method='POST'
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
      <Link to='/' className=' w-[80%] md:w-96 px-8'>
        <button className='btn btn-base-200 btn-block uppercase'>
          Back to home
        </button>
      </Link>
    </section>
  );
};
export default Register;
