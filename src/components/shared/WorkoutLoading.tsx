const WorkoutLoading = () => {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div
          key={item}
          className="overflow-hidden rounded-xl border border-[#292C31] bg-[#15171D]"
        >
          {/* Image Skeleton */}
          <div className="h-52 w-full animate-pulse bg-[#20232A]" />

          {/* Content */}
          <div className="space-y-4 p-5">

            {/* Title */}
            <div className="h-5 w-3/4 animate-pulse rounded bg-[#20232A]" />

            {/* Muscle Groups */}
            <div className="flex gap-2">
              <div className="h-5 w-16 animate-pulse rounded-full bg-[#20232A]" />
              <div className="h-5 w-20 animate-pulse rounded-full bg-[#20232A]" />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <div className="h-3 w-full animate-pulse rounded bg-[#20232A]" />
              <div className="h-3 w-5/6 animate-pulse rounded bg-[#20232A]" />
            </div>

            {/* Workout Info */}
            <div className="flex gap-4">
              <div className="h-3 w-16 animate-pulse rounded bg-[#20232A]" />
              <div className="h-3 w-16 animate-pulse rounded bg-[#20232A]" />
              <div className="h-3 w-16 animate-pulse rounded bg-[#20232A]" />
            </div>

            {/* Button */}
            <div className="h-9 w-32 animate-pulse rounded-lg bg-[#20232A]" />

          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkoutLoading;