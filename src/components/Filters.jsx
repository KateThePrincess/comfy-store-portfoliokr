import { Form, Link, useLoaderData } from 'react-router-dom';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormRange from './FormRange';
import FormCheckbox from './FormCheckbox';

const Filters = () => {
  const { meta, params } = useLoaderData();
  const { search, company, category, shipping, order, price, maxPrice } =
    params;

  return (
    <>
      <h4 className='font-bold text-4xl text-neutral px-8 py-4 bg-base-200 mb-4 rounded-xl'>
        Find product
      </h4>
      <Form className='bg-base-200 rounded-xl px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
        {/* SEARCH */}
        <FormInput
          type='search'
          label='search product'
          name='search'
          size='input-sm'
          defaultValue={search}
        />
        {/* COMPANY */}
        <FormSelect
          label='select company'
          name='company'
          list={meta.companies}
          size='select-sm'
          defaultValue={company}
        />
        {/* CATEGORY */}
        <FormSelect
          label='select category'
          name='category'
          list={meta.categories}
          size='select-sm'
          defaultValue={category}
        />
        {/* ORDER */}
        <FormSelect
          label='sort by'
          name='order'
          list={['a-z', 'z-a', 'high', 'low']}
          size='select-sm'
          defaultValue={order}
        />
        {/* PRICE */}
        <FormRange
          label='select price'
          name='price'
          size='range-sm'
          price={price}
        />
        {/* SHIPPING */}
        <FormCheckbox
          label='free shipping'
          size='checkbox-sm'
          name='shipping'
          defaultChecked={shipping}
        />
        {/* BUTTONS */}
        <button
          type='submit'
          className='btn btn-normal btn-secondary capitalize'
        >
          search
        </button>
        <Link to='/products' className='btn btn-neutral btn-normal capitalize'>
          reset
        </Link>
      </Form>
    </>
  );
};
export default Filters;
