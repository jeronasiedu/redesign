const Ikea = () => {
  return (
    <section className="max-w-screen-xl mx-auto bg-white p-8 flex gap-2 items-center">
      <div className="flex-1">
        <img src="/images/ikea.jpg" alt="ikea" className="w-full h-auto" />
      </div>
      <div className="flex-1 space-y-5">
        <h2 className="text-3xl text-dark_p font-semibold">Week of Ikea</h2>
        <p className="text-dark_s font-medium">
          No matter the season and for any number of reasons, there are always
          amazing offers waiting for you at Ikea at IKEA Russia
        </p>
        <p className="text-dark_s font-medium">
          Whether you're checking IKEA family offers or just looking for a
          little low cost shopping, jumble around the treasure chest of IKEA
          discounts to find a deal that speaks to you
        </p>
        <button className="text-white bg-custom_d px-14 py-2 rounded-xl">
          Shop Now
        </button>
      </div>
    </section>
  )
}

export default Ikea
