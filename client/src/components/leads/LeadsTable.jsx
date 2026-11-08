import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";

const leads = [
  {
    id: 1,
    name: "Rahul Sharma",
    company: "ABC Electricals",
    phone: "9876543210",
    product: "Circuit Breaker",
    status: "Qualified",
    score: 85,
    followUp: "Nov 7",
  },
  {
    id: 2,
    name: "Priya Verma",
    company: "Power Solutions",
    phone: "9876543211",
    product: "Electric Motor",
    status: "Contacted",
    score: 62,
    followUp: "Nov 8",
  },
  {
    id: 3,
    name: "Amit Kumar",
    company: "XYZ Industries",
    phone: "9876543212",
    product: "Cables",
    status: "New",
    score: 45,
    followUp: "Nov 9",
  },
  {
  id: 4,
  name: "Sneha Gupta",
  company: "Gupta Electricals",
  phone: "9876543213",
  product: "Industrial Contactor",
  status: "Qualified",
  score: 92,
  followUp: "Nov 10",
},
{
  id: 5,
  name: "Vikram Singh",
  company: "Singh Power Systems",
  phone: "9876543214",
  product: "Electric Motor",
  status: "Contacted",
  score: 68,
  followUp: "Nov 11",
},
{
  id: 6,
  name: "Neha Agarwal",
  company: "Agarwal Industries",
  phone: "9876543215",
  product: "MCB",
  status: "New",
  score: 38,
  followUp: "Nov 12",
},
{
  id: 7,
  name: "Rohit Mehta",
  company: "Mehta Engineering",
  phone: "9876543216",
  product: "Power Cable",
  status: "Converted",
  score: 96,
  followUp: "Nov 13",
},
{
  id: 8,
  name: "Pooja Sharma",
  company: "Sharma Automation",
  phone: "9876543217",
  product: "PLC Controller",
  status: "Contacted",
  score: 57,
  followUp: "Nov 14",
},
{
  id: 9,
  name: "Karan Malhotra",
  company: "KM Electrical Solutions",
  phone: "9876543218",
  product: "MCCB",
  status: "Lost",
  score: 22,
  followUp: "Nov 15",
},
{
  id: 10,
  name: "Anjali Verma",
  company: "Verma Powertech",
  phone: "9876543219",
  product: "Distribution Panel",
  status: "Qualified",
  score: 88,
  followUp: "Nov 16",
},
{
  id: 11,
  name: "Arjun Patel",
  company: "Patel Industries",
  phone: "9876543220",
  product: "Transformer",
  status: "New",
  score: 42,
  followUp: "Nov 17",
},
{
  id: 12,
  name: "Meera Joshi",
  company: "Joshi Electricals",
  phone: "9876543221",
  product: "AC Contactor",
  status: "Contacted",
  score: 73,
  followUp: "Nov 18",
},
{
  id: 13,
  name: "Sahil Khanna",
  company: "Khanna Engineering Works",
  phone: "9876543222",
  product: "VFD Drive",
  status: "Qualified",
  score: 81,
  followUp: "Nov 19",
},
{
  id: 14,
  name: "Divya Kapoor",
  company: "Kapoor Electric Co.",
  phone: "9876543223",
  product: "Copper Cable",
  status: "Converted",
  score: 94,
  followUp: "Nov 20",
},
{
  id: 15,
  name: "Manish Yadav",
  company: "Yadav Industrial Supplies",
  phone: "9876543224",
  product: "Air Circuit Breaker",
  status: "Lost",
  score: 18,
  followUp: "Nov 21",
},
];

function LeadsTable() {
  const statusStyles = {
    Qualified: "bg-green-100 text-green-700 hover:bg-green-100",
    Contacted: "bg-blue-100 text-blue-700 hover:bg-blue-100",
    New: "bg-gray-100 text-gray-700 hover:bg-gray-100",
    Converted: "bg-purple-100 text-purple-700 hover:bg-purple-100",
    Lost: "bg-red-100 text-red-700 hover:bg-red-100",
  };

  return (
    <div className="mt-6 rounded-xl border border-gray-200 bg-white">

      <Table>

        {/* Table headings */}
        <TableHeader>
          <TableRow>
            <TableHead>Lead Name</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Product</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Lead Score</TableHead>
            <TableHead>Follow-up</TableHead>
          </TableRow>
        </TableHeader>

        {/* Table data */}
        <TableBody>
          {leads.map((lead) => (
            <TableRow key={lead.id}>

              <TableCell className="font-medium">
                {lead.name}
              </TableCell>

              <TableCell>
                {lead.company}
              </TableCell>

              <TableCell>
                {lead.phone}
              </TableCell>

              <TableCell>
                {lead.product}
              </TableCell>

              <TableCell>
                <Badge
                  className={statusStyles[lead.status]}
                  variant="outline"
                >
                  {lead.status}
                </Badge>
              </TableCell>

              <TableCell>
                <span className="font-medium">
                  {lead.score}
                </span>
                <span className="text-gray-400">/100</span>
              </TableCell>

              <TableCell>
                {lead.followUp}
              </TableCell>

            </TableRow>
          ))}
        </TableBody>

      </Table>

    </div>
  );
}

export default LeadsTable;