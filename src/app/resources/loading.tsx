export default function Loading() {
  return (
    <section>
      <div className="animate-pulse">
        {/* Header Skeleton */}
        <div className="h-8 bg-gray-200 rounded w-1/3 mb-1"></div>
        <div className="h-6 bg-gray-200 rounded w-2/3 mb-8"></div>

        {/* Tabs Skeleton */}
        <div className="flex gap-2 mb-8 border-b border-gray-200">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-10 w-24 bg-gray-200 rounded-t-lg"></div>
          ))}
        </div>

        {/* Content Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow border border-gray-100 flex flex-col md:flex-row items-stretch overflow-hidden"
            >
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="h-6 bg-gray-200 rounded w-20"></div>
                    <div className="h-4 bg-gray-200 rounded w-24"></div>
                  </div>
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="h-10 bg-gray-200 rounded w-32"></div>
                </div>
              </div>
              <div className="w-full md:w-40 h-40 bg-gray-200 rounded-b-2xl md:rounded-b-none md:rounded-r-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
