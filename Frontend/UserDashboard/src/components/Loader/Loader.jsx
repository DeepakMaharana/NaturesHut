import ReactLoading from 'react-loading';

const Loader = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <ReactLoading type={'cylon'} color={'#6C3428'} className='duration-400' height={150} width={150} />
    </div>
  );
};

export default Loader;
