import { Form, Link, redirect, useNavigate } from 'react-router-dom';
import { FormInput, SubmitBtn } from '../components';
import { customFetch } from '../utils';
import { toast } from 'react-toastify';
import { loginUser } from '../features/user/userSlice';
import { useDispatch } from 'react-redux';

const url = '/auth/local';
export const action =
  (store) =>
  async ({ request }) => {
    //we need dispatch somewhere --> this is unusual case, because we have to use useDispatch() and we won't be able to do directly inside action. Thats why we pass in the store.
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      const response = await customFetch.post('/auth/local', data);
      store.dispatch(loginUser(response.data));
      toast.success('Logged in successfully!');
      return redirect('/');
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        'Please double check your credentials';

      toast.error(errorMessage);
      return null;
    }
  };
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginAsGuest = async () => {
    try {
      const response = await customFetch.post('/auth/local', {
        identifier: 'test@test.com',
        password: 'secret',
      });
      dispatch(loginUser(response.data));
      toast.success('Hi there, Demo User!');
      navigate('/');
    } catch (error) {
      toast.error('Something went wrong...');
      return null;
    }
  };
  return (
    <section className='h-screen grid place-items-center'>
      <Form
        method='post'
        className={`card w-[80%] p-8 bg-base-100 shadow-lg flex flex-col gap-y-4 md:w-96 
          ${localStorage.theme === 'myLight' ? 'bg-base-100' : 'bg-base-200'}
        `}
      >
        <h4 className='text-center text-3xl font-bold capitalize'>login</h4>
        <FormInput type='email' label='email' name='identifier' />
        <FormInput type='password' label='password' name='password' />
        <div className='mt-4 flex flex-col gap-y-4'>
          <SubmitBtn text='login' />
        </div>
        <button
          type='button'
          className='btn btn-primary btn-block uppercase'
          onClick={loginAsGuest}
        >
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
      <Link to='/' className=' w-[80%] md:w-96 px-8'>
        <button className='btn btn-base-200 btn-block uppercase'>
          Back to home
        </button>
      </Link>
    </section>
  );
};
export default Login;
