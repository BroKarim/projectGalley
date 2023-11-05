import cards from '../../../data/Data';

// Fungsi untuk menghitung jumlah kartu
function countCards() {
  return cards.length;
}
export default function Information() {
  return (
    <section className="border-t-2 border-[#272829]">
      <div className="md:flex block p-8 justify-between">
        <div className="w-1/4 text-md mb-4 md:border-none border-b-2 border-[#19A7CE]">Information</div>
        <div className="flex max-w-[600px] ">
          <h3 className=" text-xl items-start mb-4">
            Project gallery is a website that provide simple front-end project based on my mood, cause whenenver i see a new tech, new tool or front-end dev topic i can't stop my feeling to explore it"
          </h3>
        </div>
        <div className="md:pl-20 flex flex-col gap-4 w-1/3 ">
          <div className="text-left ">
            <p className=" text-sm">Tech : </p>
            <p className="text-md">React</p>
          </div>
          <div>
            <p className="text-sm ">All project: </p>
            <p>{countCards()}</p>
          </div>
        </div>

      </div>
    </section>
  );
}
