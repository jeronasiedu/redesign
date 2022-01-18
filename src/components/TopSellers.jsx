import {
  BsArrowRightShort,
  FiChevronLeft,
  FiChevronRight,
  BiCart,
} from 'react-icons/all'
const TopSellers = () => {
  const tags = ['Samsung', 'Apple', 'Xiaomi', 'Redmi', 'Google', 'Huawei']
  const buttons = [
    <FiChevronLeft className="text-dark_s  group-hover:text-light_p transition duration-500" />,
    <FiChevronRight className="text-dark_s  group-hover:text-light_p transition duration-500" />,
  ]
  const products = [
    {
      name: 'Iphone 13 pro Max',
      brand: 'Iphone',
      price: '1150',
      url: '/images/iphone13.png',
    },
    {
      name: 'Desktop gaming PC',
      brand: 'Alienware',
      price: '2210',
      url: '/images/desktop.png',
    },
    {
      name: 'Samsung galaxy s21 ultra',
      brand: 'Samsung',
      price: '950',
      url: '/images/samsung.png',
    },
  ]
  return (
    <section className="max-w-screen-xl mx-auto bg-light_p p-8 flex justify-center items-center">
      <div className="flex gap-4 items-end">
        <div className="space-y-3 w-72">
          <div className="">
            <h3 className=" text-dark_p text-3xl font-semibold">
              Top <br />
              Sellers <br />
              Phones
            </h3>
            <button className="py-2 px-4 ring-2 mt-4 ring-opacity-75 ring- ring-custom_d text-custom_d rounded-xl flex items-center">
              Go to page
              <span>
                <BsArrowRightShort className="block" />
              </span>
            </button>
          </div>
          <div className=" bg-white rounded-lg p-3 pr-0 pb-0 w-full space-y-2">
            <h4 className="text-lg font-medium">Quick view</h4>
            <div className="flex items-end">
              <div className=" flex gap-2 flex-wrap pb-4">
                {tags.map((item, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-light_p text-dark_s block rounded-md text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="space-x-4 bg-light_p  p-3 flex flex-1 rounded-tl-lg round-it">
                {buttons.map((btn, i) => (
                  <button
                    key={i}
                    className="p-2 bg-white rounded-lg hover:bg-dark_s group transition duration-500"
                  >
                    {btn}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Single Product */}
        {products.map((item, i) => (
          <div className="bg-white p-4 w-64 rounded-lg" key={i}>
            <div className="w-full">
              <img
                src={item.url}
                alt={item.name}
                className="object-cover w-full h-auto"
              />
            </div>
            <div className="bg-light_p pt-3 pl-2 rounded-lg space-y-2 flex justify-between items-end">
              <div className="pb-4">
                <h3 className="text-md text-dark_p font-semibold ">
                  {item.name}
                </h3>
                <p className="text-sm font-medium text-dark_s">{item.brand}</p>
                <p className="text font-bold text-custom_d text-lg mt-2">
                  {item.price}$
                </p>
              </div>
              <div className="bg-white p-3 rounded-tl-lg  ">
                <button className=" p-1 px-5 rounded-lg bg-custom_d">
                  <BiCart size={20} className="text-white" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TopSellers
