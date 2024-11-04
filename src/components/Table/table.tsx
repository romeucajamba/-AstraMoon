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
import DialogPatient from "../dialog";

// Definição do componente TableDashboard, que recebe dados e um estado de carregamento como props
const TableDashboard = ({ data, isLoading }: { data: Result[], isLoading: boolean }) => {
  return (
    <>
      {/* Renderização da tabela com estilo */}
      <Table className="text-slate-100 ">
        <TableHeader className="bg-zinc-800 rounded-t-lg">
          <TableRow className="border-none">
            <TableHead className=" text-md text-zinc-400">Name</TableHead>
            <TableHead className="text-md text-zinc-400">Gender</TableHead>
            <TableHead className="text-md text-zinc-400">Birth</TableHead>
            <TableHead className="text-right text-md text-zinc-400">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Mapeamento dos dados recebidos para renderizar as linhas da tabela */}
          {data && data.map((invoice) => (
            <TableRow key={invoice.cell} className="border-b border-zinc-700 py-6 ">
              {/* Exibição do nome do paciente, composto pelo primeiro e último nome */}
              <TableCell className="font-medium text-sm">{invoice.name.first} {invoice.name.last}</TableCell>
              <TableCell>{invoice.gender}</TableCell> {/* Exibição do gênero */}
              <TableCell>
                {/* Formatação da data de nascimento para o formato "pt-PT" */}
                {new Date(invoice.dob.date).toLocaleDateString("pt-PT")}
              </TableCell>
              <TableCell className="text-right">
                {/* Exibição do componente DialogPatient para ações relacionadas ao paciente */}
                <DialogPatient data={invoice} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>
      {/* Exibição do EmptyCard quando não há dados e não está carregando */}
      {(!data.length && !isLoading) && <EmptyCard />}
      {/* Exibição do spinner de carregamento quando isLoading é verdadeiro */}
      {isLoading && (
        <div className="size-auto flex flex-col items-center">
          <LoadingSpinner /> {/* Componente de carregamento */}
          <p className='text-slate-100 text-md font-semibold'>Loading....</p> {/* Mensagem de carregamento */}
        </div>
      )}
    </>
  );
}

export default TableDashboard;