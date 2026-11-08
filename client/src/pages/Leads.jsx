import LeadsStats from "../components/leads/LeadsStats";
import LeadsFilters from "@/components/leads/LeadsFilters";
import LeadsTable from "@/components/leads/LeadsTable";
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

function Leads() {
  return (
    <div className="p-0">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Leads</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage and track your potential customers.
          </p>
        </div>

        <button className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-700">
          + Add Lead
        </button>
      </div>
       <LeadsStats />
       <LeadsFilters/>
       <LeadsTable/>
    </div>
  );
}

export default Leads;