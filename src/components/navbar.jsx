const Navbar = ()=>{
    return(
        <>
            <div className="w-screen absolute bg-transparent z-50">
                <div className="container mx-auto h-24 pt-6">
                    <div className="float-left text-white font-alexsa text-2xl">
                        RAIHAN
                    </div>
                    <div className="float-right mr-12 font-bold">
                        <a className="px-4 py-2 hover:bg-orange-400  hover:text-slate-700 text-white mr-3 cursor-pointer">
                            About Me
                        </a>
                        <a className="px-4 py-2 hover:bg-orange-400 hover:text-slate-700 text-white mr-3 cursor-pointer">
                            Portofolio
                        </a>
                        <a className="px-4 py-2 hover:bg-orange-400 hover:text-slate-700 text-white mr-3 cursor-pointer">
                            Technology
                        </a>
                        <button className="px-4 py-2 text-slate-700 bg-orange-400 font-bold">
                            Hire Me
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar;