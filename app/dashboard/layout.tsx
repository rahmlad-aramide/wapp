import React from 'react';
import SideNav from '../ui/dashboard/sidenav';
import { UnitsProvider } from '../contexts/units-context';
import { CoordinatesProvider } from '../contexts/coordinate-context';
import { WeatherDataProvider } from '../contexts/weather-data-context';
import { ForecastDataProvider } from '../contexts/forecast-data-context';
import { QueryProvider } from '../contexts/query-context';
import { NotificationProvider } from '../contexts/notification-context';
import { LoadingProvider } from '../contexts/loading-context';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <NotificationProvider>
      <CoordinatesProvider>
        <QueryProvider>
          <WeatherDataProvider>
            <ForecastDataProvider>
              <UnitsProvider>
                <LoadingProvider>
                  <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
                    <div className="w-full flex-none md:w-20 lg:w-56">
                      <SideNav />
                    </div>
                    <div className="flex-grow overflow-y-auto bg-gray-50 p-4 md:p-8">
                      {children}
                    </div>
                  </div>
                </LoadingProvider>
              </UnitsProvider>
            </ForecastDataProvider>
          </WeatherDataProvider>
        </QueryProvider>
      </CoordinatesProvider>
    </NotificationProvider>
  );
}
