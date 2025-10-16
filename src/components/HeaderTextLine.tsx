function HeaderTextLine() {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="text-2xl leading-4 text-[#23005B]">
        <p className="font-bold ">€ 100.2m</p>
        <p className="text-sm">Total Revenue</p>
      </div>
      <div className="flex gap-1">
        <div className="text-[12px] flex gap-2">
          <div className="relative flex items-center gap-1">
            <span className="w-2 h-2  rounded-full bg-[#3E00C2]"></span>Earned
          </div>
          <div className="relative flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#08D110]"></span>
            Forecasted
          </div>
        </div>
        <select
          className="text-[10px] outline-0 py-1 px-1 text-slate-500 border border-slate-500 rounded-sm"
          name=""
          id=""
        >
          <option className="text-[10px] rounded-2xl" value="">
            1 Month
          </option>
          <option className="text-[10px] rounded-2xl" value="">
            3 Month
          </option>
          <option className="text-[10px] rounded-2xl" value="">
            6 Month
          </option>
          <option className="text-[10px] rounded-2xl" value="">
            9 Month
          </option>
          <option className="text-[10px] rounded-2xl" value="">
            12 Month
          </option>
          <option className="text-[10px] rounded-2xl" value="">
            All Month
          </option>
        </select>
      </div>
    </div>
  );
}

export default HeaderTextLine;
