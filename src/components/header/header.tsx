const Header = () => {
    return (
        <div className="w-full h-auto flex  header-container justify-between items-start md:items-center py-14 border-b-2 border-zinc-800">
            <div className="flex flex-col gap-1">
                <h1 className="text-slate-100 text-xl font-bold">My dashboard</h1>
                <p className="text-slate-300 text-[0.8rem]">Welcome back user, let's go</p>
            </div>

            <div className="flex  gap-6 items-start md:items-center mt-4 md:mt-0">
                <div className="flex  flex-col ">
                    <p className="text-slate-100 text-lg font-semibold">Romeu Cajamba</p>
                    <span className="text-zinc-600 text-right text-[0.6rem]">romeucajamba@gmail.com</span>
                </div>
                <div className="border-2 border-violet-500 rounded-full flex p-1 justify-center items-center">
                    <div className="w-[2.5rem] h-[2.5rem] rounded-full overflow-hidden">
                        <img
                            src="https://avatars.githubusercontent.com/u/117159526?v=4"
                            alt="user avatar"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header