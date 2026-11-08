
const stats = [
  {
    title: "Total Leads",
    value: 72,
    change: "+12%",
  },
  {
    title: "Qualified Leads",
    value: 28,
    change: "+8%",
  },
  {
    title: "Converted Leads",
    value: 12,
    change: "+20%",
  },
  {
    title: "Conversion Rate",
    value: "16.7%",
    change: "+4%",
  },
];

function LeadsStats() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className=" h-[83px] rounded-xl border border-gray-200 bg-white px-5 py-2 shadow-sm"
        >
          <p className="text-sm font-medium text-gray-500">
            {stat.title}
          </p>

          <div className="mt-1 flex items-end justify-between">
            <h2 className="text-2xl font-semibold text-gray-900">
              {stat.value}
            </h2>

            <span className="text-xs font-semibold text-green-600">
              ↑ {stat.change}
            </span>
          </div>

          <p className="mt-0.5 text-xs text-gray-400">
            vs last month
          </p>
        </div>
      ))}
    </div>
  );
}

export default LeadsStats;

