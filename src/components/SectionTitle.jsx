const SectionTitle = ({ text, bg }) => {
  return (
    <div className={`pb-5 ${bg}`}>
      <h2 className='text-3xl font-bold capitalize sm:text-4xl'>{text}</h2>
    </div>
  );
};
export default SectionTitle;
