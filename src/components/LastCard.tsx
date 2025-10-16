function LastCard({ val }: { val: string }) {
  return (
    <div className=" cursor-pointer flex flex-col bg-white rounded-2xl p-4 w-[31%] transform rotate-6">
      <h1 className="text-[#23005B] font-medium text-xl">Upcoming QBR</h1>
      <div className="items-center flex flex-col text-[#23005B] text-xl font-bold">
        <img className="w-[46%]" src={val} alt="" />
        12th Aug, 2022
      </div>
      <button className="w-full space-y-2 active:translate-y-0.5 bg-[#3E00C2] py-5 mt-2 rounded-3xl text-white font-bold text-xl">
        Send RSPV
      </button>
    </div>
  );
}

export default LastCard;
