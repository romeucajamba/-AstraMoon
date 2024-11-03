

const Header = () => {
    return (
        <div className="w-full h-4 flex justify-between items-center py-14 border-b-2 border-zinc-800">
            <div className="size-auto flex flex-col gap-1">
                <h1 className="text-slate-100 text-xl font-bold">My dashboard</h1>
                <p className="text-slate-300 text-[0.8rem]">Welcome ao clinet mbora la comecar</p>
            </div>

            <div className="flex size-auto gap-6 items-center">
                <p className="text-slate-100 text-md font-semibold">Romeu Cajamba</p>
                <div className="border-2 border-violet-500 rounded-full flex p-1 justify-center items-center">
                    <div className="size-[2.5rem] rounded-full overflow-hidden ">
                        <img
                            src="https://avatars.githubusercontent.com/u/117159526?v=4"
                            alt="user avatar"
                            className="size-auto object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header