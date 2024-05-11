import dynamic from 'next/dynamic';

const GreenergyContent = dynamic(() => import('./greenergy-content'), {
  ssr: false,
});

const Page = () => {

  return (
    <GreenergyContent />
  );
};

export default Page;
