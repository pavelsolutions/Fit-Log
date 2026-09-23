const MyPlan = () => {
  return (
    <section className="min-h-screen bg-[#0C0D10] px-5 py-10 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div>
          <h1 className="font-[var(--font-oswald)] text-3xl font-bold uppercase tracking-tight sm:text-4xl">
            My Plan
          </h1>

          <p className="mt-1 text-sm text-[#858B97]">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-1 overflow-hidden rounded-2xl border border-[#292C31] bg-[#15171D] sm:grid-cols-3">

          {/* Exercises */}
          <div className="px-6 py-7 sm:border-r sm:border-[#292C31]">
            <p className="text-xs text-[#858B97]">
              Exercises
            </p>

            <p className="mt-1 font-[var(--font-oswald)] text-4xl font-semibold text-[#C2F800]">
              2
            </p>
          </div>

          {/* Minutes */}
          <div className="border-t border-[#292C31] px-6 py-7 sm:border-t-0 sm:border-r">
            <p className="text-xs text-[#858B97]">
              Minutes
            </p>

            <p className="mt-1 font-[var(--font-oswald)] text-4xl font-semibold text-white">
              23
            </p>
          </div>

          {/* Calories */}
          <div className="border-t border-[#292C31] px-6 py-7 sm:border-t-0">
            <p className="text-xs text-[#858B97]">
              Calories
            </p>

            <p className="mt-1 font-[var(--font-oswald)] text-4xl font-semibold text-white">
              190
            </p>
          </div>
        </div>

        {/* Tabs + Sort */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          {/* Tabs */}
          <div className="flex w-fit rounded-xl border border-[#292C31] bg-[#15171D] p-1">
            <button className="rounded-lg px-5 py-2 text-xs text-[#858B97]">
              Today's Plan
            </button>

            <button className="rounded-lg border border-[#30343B] bg-[#20232A] px-6 py-2 text-xs font-medium text-white">
              Saved
            </button>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-[#858B97]">
              Sort By
            </span>

            <button className="flex items-center gap-3 rounded-lg border border-[#292C31] bg-[#15171D] px-4 py-2 text-xs text-white">
              Duration

              <svg
                className="h-3 w-3 text-[#858B97]"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M3 4.5L6 7.5L9 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Empty State */}
        <div className="mt-6 flex min-h-[280px] items-center justify-center rounded-2xl border border-dashed border-[#292C31] bg-[#0F1014] px-5">

          <div className="text-center">
            <h2 className="font-[var(--font-oswald)] text-xl font-bold uppercase text-white">
              Nothing Here Yet
            </h2>

            <p className="mt-1 text-xs text-[#858B97]">
              Browse the library and add a lift to get today moving.
            </p>

            <button className="mt-6 rounded-full bg-[#C2F800] px-6 py-2.5 text-xs font-bold text-black shadow-[0_8px_25px_rgba(194,248,0,0.12)] transition hover:bg-[#B7E900]">
              Go to workouts
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MyPlan;