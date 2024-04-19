import { useNavigation } from 'react-router-dom';

const SubmitBtn = ({ text }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <button
      className='btn btn-secondary btn-block uppercase'
      type='submit'
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <span className='loading loading-ring loading-lg'>sending...</span>
        </>
      ) : (
        text || 'submit'
      )}
    </button>
  );
};
export default SubmitBtn;
