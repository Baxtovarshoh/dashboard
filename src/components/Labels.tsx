function Label() {
  return (
    <div className="flex flex-col space-y-7 justify-center w-fit">
      <div className="flex flex-col text-indigo-900 font-bold text-xl">
        {" "}
        <span className="flex items-center font-medium text-slate-500/50 text-base gap-1">
          <span className="w-3 h-3  flex rounded-full  bg-[#9B4DFF]"></span>
          Sold
        </span>
        10K{" "}
      </div>
      <div className="flex flex-col text-indigo-900 font-bold text-xl">
        {" "}
        <span className="flex items-center font-medium  text-slate-500/50 text-base gap-1">
          <span className="w-3 h-3 flex rounded-full  bg-[#08D110]"></span>
          Produced
        </span>
        7K{" "}
      </div>
    </div>
  );
}

export default Label;
