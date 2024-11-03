import { Input } from "./components/ui/input"
import { GridContainer } from "./components/grid"
import { Header } from "./components/header/header"
import { TableDashboard } from "./components/Table/table"
import Pagination from "./components/pagination/pagination"

function App() {
  return (
    <div className="w-full h-screen bg-zinc-950">
      <GridContainer className="flex flex-col gap-16">
        <Header />
        <div className="w-full h-auto flex flex-col gap-5">
          <h2 className="text-md text-slate-200 text-[0.9rem] mb-5">
            Opus igitur est dicere possit dura omni specie, "Tu autem in specie, non ventur, nec omnino 
            res est." Et examine ab eis praecepta eius quae habes, et primo et principaliter
          </h2>
          <Input type="email" placeholder="Search name"  className="border-none bg-zinc-900 placeholder:text-zinc-200 text-slate-200"/>
          <TableDashboard />
          <Pagination />
        </div>
      </GridContainer>
    </div>
  )
}

export default App
