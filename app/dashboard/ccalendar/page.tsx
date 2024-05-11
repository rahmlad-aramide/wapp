import { calendarData } from '@/app/lib/placeholder-data';
import dynamic from 'next/dynamic';

const CalendarPage = dynamic(() => import('./ccalendar-content'), {
  ssr: false,
});

export default function Page() {
    
  return (
    <>
      <CalendarPage />
    </>
  );
}
