import dynamic from 'next/dynamic';

const OverviewPage = dynamic(() => import('./overview-content'), {
  ssr: false,
});

export default function Page() {
  return (
    <>
      <OverviewPage />
    </>
  );
}
