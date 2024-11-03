
type Props = {
  legend?: string
}
const EmptyCard = ({ legend }: Props) => {
  return (
    <div className="flex min-h-5  py-5 flex-col items-center  justify-center ">
      <div className="flex flex-col items-center justify-center gap-2.5">
        <h2 className="headlineH2 text-slate-100">List is empty</h2>
        <p className="text-lg text-slate-100">
          {legend || 'Please search for your model at the top search field'}
        </p>
      </div>
    </div>
  )
}

export default EmptyCard
