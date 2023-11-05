import RealTimeCopy from '../content-header/RealTime copy';

export default function Navbar() {
  return (
    <header className="py-2 text-black border-b-2 border-black">
      <div className="max-w-full container flex justify-between h-16 mx-auto">
        <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center py-2">
          By Karim.
        </a>
        <div className="space-x-6 flex items-center">
          <div className='md:block hidden'>
            <RealTimeCopy></RealTimeCopy>
          </div>
          <div>
            <a href="https://github.com/BroKarim" target='_blank' className="relative inline-block px-4 mx-2 py-2 font-medium group">
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
              <span className="relative text-black group-hover:text-white">My Github</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
