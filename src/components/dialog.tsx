import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Result } from "@/types"


const DialogPatient = ({ data }: { data: Result }) =>  {
    console.log(data)
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-zinc-900 hover:bg-zinc-800">
                    View
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-zinc-900 border-none flex flex-col">
                <DialogHeader className="w-full h-auto flex justify-center items-center">
                    <div className="size-16 rounded-full overflow-hidden -mt-10">
                        <img src={data.picture.medium} alt="" className="size-auto object-cover" />
                    </div>
                </DialogHeader>
                <div className="w-full h-auto flex flex-col gap-4 justify-center items-center py-2">
                    <h2 className="text-lg text-slate-200 font-semibold">{data.name.first} {data.name.last} ⚡️</h2>
                    <div className="w-full h-auto flex flex-col gap-5 mb-4">

                        <div className="w-full flex justify-between items-center h-auto:">
                            <div className="w-auto flex justify-between gap-1">
                                <p className="text-sm font-medium text-zinc-500">Email: </p>
                                <span className="text-sm font-semibold text-slate-200">{data.email}</span>
                            </div>

                            <div className="w-auto flex justify-between gap-1">
                                <p className="text-sm font-medium text-zinc-500">Gender: </p>
                                <span className="text-sm font-semibold text-slate-200">{data.gender}</span>
                            </div>
                        </div>

                        <div className="w-full flex justify-between items-center h-auto:">
                            <div className="w-auto flex justify-between gap-1">
                                <p className="text-sm font-medium text-zinc-500">Telephone: </p>
                                <span className="text-sm font-semibold text-slate-200">{data.phone}</span>
                            </div>

                            <div className="w-auto flex justify-between gap-1">
                                <p className="text-sm font-medium text-zinc-500">Date: </p>
                                <span className="text-sm font-semibold text-slate-200">{new Date(data.dob.date).toLocaleDateString("pt-PT")}</span>
                            </div>
                        </div>

                        <div className="w-full flex flex-col  h-auto:">
                            <div className="w-auto flex justify-between gap-3">
                                <p className="text-sm font-medium text-zinc-500">Nationality: </p>
                                <span className="text-sm font-semibold text-slate-200">{data.nat}</span>
                            </div>

                            <div className="w-auto flex justify-between gap-1">
                                <p className="text-sm font-medium text-zinc-500">Adress: </p>
                                <span className="text-sm font-semibold text-slate-200">{data.location.country} {data.location.state} {data.location.city}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <DialogFooter>
                   

                    <Button type="submit" className="bg-blue-800/50">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z" clipRule="evenodd" />
                    </svg>
                    <p>https://{data.login.username}</p>
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default DialogPatient