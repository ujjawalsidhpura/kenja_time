import kenja_time from "../Images/kenja_time.jpeg"

export default function Sidebar() {
    return (
        <div className="bg-zinc-200 w-48 flex-col">

            <a href="#" className="block py-2.5 px-4">
                <img src={kenja_time} alt="appLogo" className="object-center w-40 h-40 hover:bg-zinc-500" />
            </a>

            <nav className="">
                <a href="#" className="block p-1 underline text-blue-700 py-2.5 px-4 hover:text-red-500"> Home </a>
                <a href="#" className="block p-1 underline text-blue-700 py-2.5 px-4 hover:text-red-500"> About </a>
                <a href="#" className="block p-1 underline text-blue-700 py-2.5 px-4 hover:text-red-500"> Projects </a>
            </nav>



        </div>
    )
}