import style from './Style.module.css';
import {element} from '../../data/Img'

export default function App() {
const {star, shuriken} = element()


  return (
    <>
      <div>
        <header>
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="md:flex md:items-center md:gap-12">
                <a className="flex gap-2 text-black font-medium" href="#">
                  <span className="sr-only text-black">Home</span>
                  <svg className="h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14 9V3L11 4H8L5 3V9L9.5 11L14 9ZM14 9L20 12L22 18L20 21H4L2 19L4 17L2 15L4 13M7 21V9.88889M11 15V21L16.0435 16H18M8 7L8.00707 7.00707M11 7L11.0071 7.00707"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Logoipsum
                </a>
              </div>

              <div className="hidden md:block">
                <nav aria-label="Global">
                  <ul className="flex items-center gap-6 text-sm">
                    <li>
                      <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
                        {' '}
                        Home
                      </a>
                    </li>

                    <li>
                      <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
                        {' '}
                        About Us{' '}
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
                        {' '}
                        Our Service{' '}
                      </a>
                    </li>

                    <li>
                      <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
                        {' '}
                        News{' '}
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <a className="bg-[#fc68b2] px-5 py-2.5 text-sm font-medium text-black hover:text-white hover:bg-black" href="/">
                    {' '}
                    Contact Us{' '}
                  </a>
                </div>

                <div className="block md:hidden">
                  <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className={style.hero}>
          <div className="mx-auto max-w-screen px-4 md:px-10 py-28 lg:flex flex-col gap-8 lg:items-center">
            <div className="text-center flex lg:justify-start justify-center lg:h-32 w-full lg:text-start px-4">
              <h1 className="text-4xl font-extrabold xl:text-7xl sm:text-6xl lg:w-2/3 w-full">
                The Best
                <img src={shuriken} className=" inline-block w-16 h-16  " alt="" />
                <br />
                <img src={star} className=" inline-block w-16 h-16  " alt="" />
                <span>Cat Boutique</span>
              </h1>

              <div className="mx-auto lg:flex hidden border border-black w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1624026739539-66b84efc5e64?q=80&w=1946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="home image"
                  className="home__image w-60 md:w-full object-cover object-center"
                />
              </div>
            </div>

            <div className="flex flex-col items-center md:flex-row w-full gap-4">
              <div className="div1 md:w-1/2 flex justify-center text-center items-center gap-4 order-1 md:order-0">
                <div className="btn mt-4 w-full h-20">
                  <a href="#_" className="relative inline-block lg:text-6xl text-4xl w-full px-4 py-2 font-medium group">
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full bg-[#fc68b2] border-2 border-black group-hover:bg-black"></span>
                    <span className="relative text-black group-hover:text-white">Request Service</span>
                  </a>
                </div>
              </div>
              <div className="div2 md:w-1/2 flex justify-end text-left pl-10 md:order-1">
                <p className="desc mt-4 sm:text-xl w-full">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#ececc2] text-black">
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="mx-auto max-w-lg text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">Looking for Pet Service</h2>

              <p className="mt-4 text-black">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam fugit consequuntur saepe laborum.</p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <a className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10" href="/services/digital-campaigns">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-10 w-10 text-pink-500">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                  />
                </svg>

                <h2 className="mt-4 text-xl font-bold text-black">Pet Center</h2>

                <p className="mt-1 text-sm text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.</p>
              </a>

              <a className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10" href="/services/digital-campaigns">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-10 w-10 text-pink-500">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                  />
                </svg>

                <h2 className="mt-4 text-xl font-bold text-black">Pet Grooming</h2>

                <p className="mt-1 text-sm text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.</p>
              </a>

              <a className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10" href="/services/digital-campaigns">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-10 w-10 text-pink-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

                <h2 className="mt-4 text-xl font-bold text-black">Pet Health</h2>

                <p className="mt-1 text-sm text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.</p>
              </a>
            </div>

            <div className="mt-12 text-center">
              <a href="#" className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400">
                {' '}
                Get Started Today{' '}
              </a>
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
              <div className="relative z-10 lg:py-16">
                <div className="relative border-2 border-black h-64 sm:h-80 lg:h-full">
                  <img
                    alt="House"
                    src="https://images.unsplash.com/photo-1616492355586-6634b6d22c42?q=80&w=2057&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="relative flex items-center bg-[#fc68b2]">
                <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-[#fc68b2]"></span>

                <div className="p-8 sm:p-16 lg:p-24">
                  <h2 className="text-2xl font-bold sm:text-3xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h2>

                  <p className="mt-4 text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.
                  </p>

                  <a
                    href="#"
                    className="mt-8 inline-block rounded border border-black bg-black px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-indigo-500"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-8 mx-auto">
            <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Testimonials</h1>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/2 w-full">
                <div className="relative h-full bg-gray-100 p-8 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="relative z-10 block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="relative z-10 text-black leading-relaxed mb-6">
                    Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.
                  </p>
                  <a className="relative z-10 inline-flex items-center">
                    <img
                      alt="testimonial"
                      src="https://images.unsplash.com/photo-1630798939554-75b4e2f60bae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-gray-900">Eren</span>
                      <span className="text-gray-500 text-sm">AOT Actor</span>
                    </span>
                  </a>
                  <span className="absolute inset-0 w-full -z-l h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span className="absolute inset-0 w-full -z-1 h-full bg-white border-2 border-black group-hover:bg-black"></span>
                </div>
              </div>
              <div className="p-4 md:w-1/2 w-full">
                <div className="h-full relative bg-gray-100 p-8 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="z-10 relative block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="relative z-10 leading-relaxed mb-6">
                    Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.
                  </p>
                  <a className="relative inline-flex z-10 items-center">
                    <img
                      alt="testimonial"
                      src="https://images.unsplash.com/photo-1578632749014-ca77efd052eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-gray-900">Nezuko Chan</span>
                      <span className="text-gray-500 text-sm">Housewife</span>
                    </span>
                  </a>
                  <span className="absolute inset-0 w-full -z-l h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span className="absolute inset-0 w-full -z-1 h-full bg-[#fc68b2] border-2 border-black group-hover:bg-black"></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="p-4 border-black border-t">
          <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
            <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full dark:bg-blue-400">
                <a href="">
                  <svg className="h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14 9V3L11 4H8L5 3V9L9.5 11L14 9ZM14 9L20 12L22 18L20 21H4L2 19L4 17L2 15L4 13M7 21V9.88889M11 15V21L16.0435 16H18M8 7L8.00707 7.00707M11 7L11.0071 7.00707"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>
              <ul className="md:flex block flex-wrap items-center space-x-4 sm:space-x-8">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
            <ul className="md:flex hidden flex-wrap pl-3 space-x-4 sm:space-x-8">
              <li>
                <a rel="noopener noreferrer" href="#">
                  Instagram
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Facebook
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}
