export const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} relative flex rounded-xl bg-white p-2 shadow-lg md:px-6`}
    >
      <div className="my-auto h-16 w-16 rounded-lg bg-gray-200"></div>
      <div className="ml-8 flex flex-col items-start justify-center py-8">
        <div className="mb-2 h-4 w-48 rounded-md bg-gray-200"></div>
        <div className="h-6 w-36 rounded-lg bg-gray-200"></div>
      </div>
    </div>
  );
}

export function CardsSkeleton() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
}

export function HeadingSkeleton() {
  return (
    <section className={`${shimmer} relative mb-4 flex justify-between`}>
      <div>
        <div className="mb-1 h-5 w-32 rounded-md bg-gray-200"></div>
        <div className="mt-2 h-8 w-48 rounded-md bg-gray-200"></div>
      </div>
      <div className="flex items-center gap-2">
        <div className="h-10 w-48 rounded-lg bg-gray-200"></div>
        <div className="ml-3 h-10 w-20 rounded-lg bg-gray-200"></div>
      </div>
    </section>
  );
}
export function TemperatureAreaChartSkeleton() {
  return (
    <div className={`${shimmer} relative w-full overflow-hidden p-6`}>
      <div className="flex justify-between">
        <div>
          <div className="mb-2 h-5 w-36 rounded bg-gray-200" />
          <div className="mb-4 h-4 w-36 rounded bg-gray-200" />
        </div>
        <div className="h-5 w-5 rounded bg-gray-200"></div>
      </div>
      <div className="rounded-md bg-gray-200 p-4">
        <div className="mt-0 grid h-[300px] grid-cols-12 items-end gap-2 rounded-md bg-gray-200 p-4 sm:grid-cols-13 md:gap-4" />
      </div>
    </div>
  );
}

export function TemperaturePieChartSkeleton() {
  return (
    <div
      className={`${shimmer} relative ml-2 lg:mx-auto mt-4 flex max-w-[280px] space-x-2`}
    >
      <div className="mr-4 w-1/2 max-w-[100px] rounded-full bg-gray-200 p-4">
        <div className="mx-auto aspect-square w-full rounded-full bg-white"></div>
      </div>
      <div className="mt-2 w-24 space-y-2">
        <div className="h-3 w-full rounded bg-gray-200"></div>
        <div className="h-3 w-full rounded bg-gray-200"></div>
        <div className="h-3 w-full rounded bg-gray-200"></div>
        <div className="h-3 w-full rounded bg-gray-200"></div>
      </div>
    </div>
  );
}

export function OverviewCardSkeleton() {
  return (
    <section className={`${shimmer} relative flex flex-col border-b-2 pb-4`}>
      <div className="flex items-center justify-between">
        <div>
          <div className="mb-2 h-6 w-28 rounded-md bg-gray-200"></div>{' '}
          <div className="h-4 w-20 rounded-md bg-gray-200"></div>{' '}
        </div>
        <div className="relative h-6 w-10 animate-pulse rounded bg-gray-200">
          <div className="absolute -left-1.5 top-[5px] ml-0 h-3.5 w-1.5 rounded-l bg-gray-200"></div>
        </div>{' '}
      </div>
      <div className="mt-5">
        <div className="flex items-end justify-between">
          <div className="space-y-2">
            <div className="h-14 w-16 rounded-md bg-gray-200"></div>{' '}
            <div className="h-8 w-24 rounded bg-gray-200"></div>
          </div>
          <div>
            <div className="mb-2 ml-auto h-6 w-16 rounded-md bg-gray-200"></div>{' '}
            <div className="ml-auto h-4 w-24 rounded-md bg-gray-200"></div>{' '}
          </div>
        </div>
      </div>
    </section>
  );
}
export function SunCardSkeleton() {
  return (
    <section
      className={`${shimmer} bg-gradient col-span-4 mb-2 mt-2.5 h-fit w-full rounded-lg bg-gradient-to-br from-primary-500 via-[#F19C69] via-40% to-[#EB4D4B] p-2 shadow-lg`}
    >
      <div className="flex items-center justify-between rounded border border-white/50 bg-white/30 px-3 py-2 text-gray-800">
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-md bg-gray-300"></div>
          <div className="ml-3">
            <div className="mb-2 h-4 w-16 rounded-md bg-gray-300"></div>
            <div className="h-6 w-24 rounded-md bg-gray-300"></div>
          </div>
        </div>
        <div className="h-4 w-20 rounded-md bg-gray-300"></div>
      </div>
    </section>
  );
}
export function SunCardsSkeleton() {
  return (
    <>
      <div className={`${shimmer} mt-4 h-4 w-1/2 bg-gray-200`}></div>
      <SunCardSkeleton />
      <SunCardSkeleton />
    </>
  );
}

export default function DashboardSkeleton() {
  return (
    <>
      <HeadingSkeleton />
      <section className="grid grid-cols-12 gap-6">
        <section className="col-span-8">
          <CardsSkeleton />
          <div className="mt-6 flex w-full rounded-lg bg-white shadow-lg">
            <TemperatureAreaChartSkeleton />
          </div>
        </section>
        <section className="relative col-span-4 h-full w-full overflow-x-hidden rounded-lg bg-white p-4 shadow-lg">
          <OverviewCardSkeleton />
          <TemperaturePieChartSkeleton />
          <SunCardsSkeleton />
        </section>
      </section>
    </>
  );
}
