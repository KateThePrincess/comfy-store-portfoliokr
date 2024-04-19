import { Outlet, useNavigation } from 'react-router-dom';
import { Footer, Header, Navbar, Loading } from '../components';
const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  return (
    <>
      <Header />
      <Navbar />
      {/* <nav>
        <span className='text-4xl text-primary'>Comfy</span>
      </nav> */}
      {isPageLoading ? (
        <Loading />
      ) : (
        <section className='align-element py-20'>
          <Outlet />
        </section>
      )}
    </>
  );
};
export default HomeLayout;
