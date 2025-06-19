export default function Loading() {
  return (
    <section>
      <div className="animate-pulse">
        {/* Header Skeleton */}
        <div className="h-8 bg-gray-200 rounded w-1/3 mb-1"></div>
        <div className="h-6 bg-gray-200 rounded w-2/3 mb-8"></div>

        {/* Timeline Skeleton */}
        <div className="mb-20 mx-8">
          <div className="flex items-center justify-between relative">
            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-200 -translate-y-1/2"></div>
            {[...Array(4)].map((_, i) => (
              <div key={i} className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-gray-200"></div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-20 h-3 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Job List Skeleton */}
          <div className="md:w-1/3 flex flex-col gap-3">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="rounded-xl border px-4 py-3 shadow-sm flex items-center gap-3"
              >
                <div className="w-8 h-8 bg-gray-200 rounded"></div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2 mb-1"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Experience Detail Skeleton */}
          <div className="md:w-2/3 bg-white rounded-2xl p-0 border border-gray-100 shadow min-h-[400px]">
            <div className="h-28 w-full bg-gray-200 rounded-t-2xl"></div>
            <div className="pt-10 pl-28">
              <div className="h-6 bg-gray-200 rounded w-1/3 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            </div>
            <div className="pt-4 px-6 pb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-4 bg-gray-200 rounded w-24"></div>
                <div className="h-4 bg-gray-200 rounded w-4"></div>
                <div className="h-4 bg-gray-200 rounded w-32"></div>
              </div>
              <div className="space-y-2 mb-6">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-4/6"></div>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-6 bg-gray-200 rounded w-20"></div>
                ))}
              </div>
              <div className="bg-gray-100 p-4 rounded">
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
