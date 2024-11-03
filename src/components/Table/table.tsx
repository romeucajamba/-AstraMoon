import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Result } from "@/types";
import EmptyCard from "../emply-card";
import LoadingSpinner from "../loading-spinner";
import DialogPatient  from "../dialog";

const  TableDashboard = ({ data, isLoading }: { data: Result[], isLoading: boolean }) => {
  return (
    <>
      <Table className="text-slate-100 ">
        <TableHeader className="bg-zinc-800  rounded-t-lg">
          <TableRow className="border-none">
            <TableHead className=" text-md text-zinc-400">Name</TableHead>
            <TableHead className="text-md text-zinc-400">Gender</TableHead>
            <TableHead className="text-md text-zinc-400">Birth</TableHead>
            <TableHead className="text-right text-md text-zinc-400">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data && data.map((invoice) => (
            <TableRow key={invoice.cell} className="border-b  border-zinc-700 py-6 ">
              <TableCell className="font-medium text-sm">{invoice.name.first} {invoice.name.last}</TableCell>
              <TableCell>{invoice.gender}</TableCell>
              <TableCell>
                {new Date(invoice.dob.date).toLocaleDateString("pt-PT")}
              </TableCell>
              <TableCell className="text-right">
                <DialogPatient data={invoice} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>
      {(!data.length && !isLoading) && <EmptyCard />}
      {isLoading && (
        <div className="size-auto flex flex-col items-center">
          <LoadingSpinner />
          <p className='text-slate-100 text-md font-semibold'>Loading....</p>
        </div>
      )}
    </>
  );
}

export default TableDashboard;