function CardDiag() {
  return (
    <div className="flex text-[#23005B] font-medium justify-between">
      <p>Vendor Activty</p>
      <select
        className="text-[10px] outline-0 py-1 px-1 text-slate-500 border border-slate-500 rounded-sm"
        name=""
        id=""
      >
        <option className="text-[10px] rounded-2xl" value="">
          This Week
        </option>
        <option className="text-[10px] rounded-2xl" value="">
          Monday
        </option>
        <option className="text-[10px] rounded-2xl" value="">
          Thusday
        </option>
        <option className="text-[10px] rounded-2xl" value="">
          Wensday
        </option>
        <option className="text-[10px] rounded-2xl" value="">
          Thsturday
        </option>
        <option className="text-[10px] rounded-2xl" value="">
          Friday
        </option>
        <option className="text-[10px] rounded-2xl" value="">
          Sunday
        </option>
      </select>
    </div>
  );
}

export default CardDiag;
