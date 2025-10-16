function CardSoldHeader() {
    
  return (
    <div className="flex justify-between ">
      <p className="text-[#23005B] font-medium">Cars Sold </p>
      <select
        className="text-[10px] outline-0 py-1 px-1 text-slate-500 border border-slate-500 rounded-sm"
        name=""
        id=""
      >
        <option className="text-[10px] rounded-2xl" value="">
          This Month
        </option>
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
  );
}

export default CardSoldHeader;
