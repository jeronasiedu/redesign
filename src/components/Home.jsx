import {
  FiChevronRight,
  FiChevronLeft,
  BsPlayCircle,
  BsArrowRightShort,
} from 'react-icons/all'
const Home = () => {
  const items = [
    { img: 'images/tesla/0x0-ModelS_04.jpg', alt: 'ModelS' },
    { img: 'images/tesla/0x0-Roadster_01.jpg', alt: 'Roadster' },
    { img: 'images/tesla/0x0-ModelS_07.jpg', alt: 'ModelS' },
  ]
  const buttons = [
    <FiChevronLeft className="text-dark_s  group-hover:text-light_p transition duration-500" />,
    <FiChevronRight className="text-dark_s  group-hover:text-light_p transition duration-500" />,
  ]
  return (
    <main className=" bg-light_p w-full flex gap-5 px-16 py-8 mx-auto max-w-screen-xl  ">
      <section className=" space-y-7 flex-1 ">
        <article className="p-4 bg-white rounded-xl font-semibold space-y-4">
          <h2 className="text-4xl text-dark_p">Tesla Bot</h2>
          <p className="text-sm font-medium ">
            Tesla CEO Elon Musk on thursday unveiled a humanoid robot called
            Tesla Bot that runs on the same AI used by Tesla's fleet of
            autonomous vehicles.
          </p>
          <p className="text-sm font-medium  text-dark_s">
            A functioning version of the robot didn't make an appearance during
            Musk's reveal, though a slightly bizarre dance by a performer
            dressed like a Tesla Bot did
          </p>
        </article>
        <section className="flex justify-between items-center">
          <div className="py-4 px-8 bg-white rounded-xl space-y-2">
            <p className="text-dark_s">Price</p>
            <span className="font-semibold block">12 250$</span>
          </div>
          <div className="flex">
            <div className="bg-white rounded-xl p-4 space-y-1">
              <p>
                Elon Musk reveals <br />
                Tesla Bot
              </p>
              <p className="text-dark_s font-semibold">Tesla</p>
            </div>
            <div className=" scale-105 w-44 h-30 rounded-lg overflow-hidden cursor-pointer relative">
              <img
                src="/images/tesla/elon_musk.jpg"
                alt="Elon Musk"
                className="object-cover w-full h-auto"
              />
              <span className="absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 text-white text-xl">
                <BsPlayCircle />
              </span>
            </div>
          </div>
        </section>
        {/* MIDDLE SECTION */}
        <article className="flex gap-2">
          <div className="  bg-white py-5 px-7 rounded-lg space-y-3 font-semibold flex-1">
            <h2>More Products by Tesla</h2>
            <div className=" flex gap-5">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="rounded-lg cursor-pointer w-32 h-24 overflow-hidden"
                >
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <button className="bg-custom_l px-3 py-2 text-custom_d font-poppins rounded-lg">
            Go <br />
            to <br />
            the <br />
            shop <br />
            page
            <span className="block text-center">
              <BsArrowRightShort />
            </span>
          </button>
        </article>
        {/* BOTTOM NAVIGATION */}
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <p>01</p>
            <div className="w-24 bg-custom_l h-1 rounded-sm overflow-hidden ">
              <span className="bg-custom_d block w-6 h-full"></span>
            </div>
            <p>09</p>
          </div>
          <div className="space-x-4">
            {buttons.map((btn, i) => (
              <button
                key={i}
                className="p-2 bg-white rounded-lg cursor-pointer hover:bg-dark_s group transition duration-500"
              >
                {btn}
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="flex-1 flex justify-center">
        <div className="overflow-hidden rounded-xl h-full max-w-md relative">
          <img
            src="images/tesla/0x0-Robotics-3.jpg"
            alt="tesla robotics"
            className="object-cover h-full"
          />
          <button className="px-3 py-5 bg-light_p rounded-tl-2xl absolute right-0 bottom-0 text-custom_d flex items-center text-sm">
            Go to the product
            <BsArrowRightShort />
          </button>
        </div>
      </section>
    </main>
  )
}

export default Home
