import RealTimeCopy from "../content-header/RealTime copy";

export default function Navbar() {
  return (
    <header className="py-2 text-black border-b-2 border-black">
      <div className="max-w-full container flex justify-between h-16 mx-auto">
        <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center py-2">
          By Karim.
        </a>
        <div className="hidden space-x-6 md:flex items-center">
          {/* <div className="real-time">Real time</div> */}
          <RealTimeCopy></RealTimeCopy>
          <div>
            <a
              href="#_"
              className="inline-flex items-center justify-center h-8 px-4 py-2 text-md text-center text-black no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-[#272829] rounded-full cursor-pointer select-none hover:text-black hover:border-white focus:shadow-xs focus:no-underline"
            >
              Github
            </a>
          </div>
        </div>
        {/* Burger Button */}
        <button className="flex justify-end p-4 md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
