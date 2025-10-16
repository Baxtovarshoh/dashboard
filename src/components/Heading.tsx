function Heading({ rt }: { rt: string }) {
  return (
    <div className="w-full flex rounded-2xl h-[100px]">
      <div className="w-[58%]  flex flex-col px-1 gap-1 justify-center text-white ">
        <h1 className="text-4xl tracking-wider font-medium   ">
          Welcome Jess!
        </h1>
        <p className="text-sm">Here is your sales forecast dashboard</p>
      </div>
      <div className="w-2/5 flex gap-7 items-center space-x-3">
        <form className="relative flex ">
          <label htmlFor="relative">
            <i className="bi bi-search absolute top-2 left-3 text-white"></i>
            <input
              className="w-full bg-gray-300/20 border outline-0 rounded-xl text-white placeholder:text-white border-white py-2 pl-10"
              type="text"
              placeholder="Search your query"
            />
          </label>
        </form>
        <div className="flex items-center cursor-pointer  gap-7">
          <span className="relative">
            <span className="rounded-[50%] w-3 h-3 top-0.5 left-3 bg-lime-300 absolute"></span>
            <i className="bi bi-bell-fill text-2xl text-white"></i>
          </span>
          <div className="w-10 mt-1 ">
            <img src={rt} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heading;
