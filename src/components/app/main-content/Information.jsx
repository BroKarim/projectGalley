import cards from '../../../data/Data';

// Fungsi untuk menghitung jumlah kartu
function countCards() {
  return cards.length;
}
export default function Information() {
  return (
    <section className="border-t-2 border-[#272829]">
      <div className="md:flex block p-8 justify-between">
        <div className="w-1/4 text-md">Information</div>
        <div className="flex max-w-[600px] ">
          <h3 className=" text-xl items-start ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </h3>
        </div>
        <div className="pl-20 flex flex-col gap-2 w-1/3 ">
          <div className='text-left '>
            <p className=' text-sm'>Tech : </p>
            <p className='text-md'>React</p>
          </div>
          <div>
            <p className='text-sm '>All project: </p>
            <p>{countCards()}</p>
          </div>
          {/* <p>All project: </p>
          <p>{countCards()}</p> */}
          {/* rencana nanti dibawahnya taru All project (jumlah project) */}
        </div>
      </div>
    </section>
  );
}
