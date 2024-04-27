import cards from '../../../data/Data';

// Fungsi untuk menghitung jumlah kartu
function countCards() {
  return cards.length;
}
export default function Information() {
  return (
    <section className="border-t-2 border-[#272829]">
      <div className="md:flex block p-8 justify-between">
        <div className="w-1/4 text-md mb-4 md:border-none border-b-2 border-[#19A7CE]">
          Hi👋
          <br />
          Iam Karim
        </div>
        <div className="flex max-w-[600px] ">
          <h3 className=" md:text-xl text-sm items-start mb-4">
            a passionate front-end developer with a focus on user-centric design. I leverage React and Vite for a smooth front-end experience, coupled with Express.js on the back-end. Let's collaborate on building beautiful and functional
            interfaces!
          </h3>
        </div>
        <div className="md:pl-20 flex flex-col gap-4 w-1/3 ">
          <div className="text-left ">
            <p className=" text-sm">Tech : </p>
            <p className="text-md">React Family</p>
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
