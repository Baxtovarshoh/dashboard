import three from "../assets/Group 44.png";
import four from "../assets/Group 54.png";

function CardHold() {
  return (
    <div className="flex flex-col gap-5 w-2/5">
      <div className="w-full h-1/2 flex justify-center flex-col items-center bg-white rounded-2xl">
        <div className="w-full px-7  flex gap-5">
          <img className="" src={three} alt="" />
          <div className="text-[#5321CA]">
            <h1 className="text-3xl font-bold">300</h1>
            <p className="text-[12px]">Vendors Onboard</p>
          </div>
        </div>
        <select
          className="text-[10px] outline-0 py-1 px-1 text-slate-500 border border-slate-500 rounded-sm"
          name=""
          id=""
        >
          <option value="">Jull 2022</option>
        </select>
      </div>
      <div className="w-full h-1/2 flex justify-center flex-col items-center bg-white rounded-2xl">
        <div className="w-full px-7  flex gap-5">
          <img className="" src={four} alt="" />
          <div className="text-[#5321CA]">
            <h1 className="text-3xl font-bold">€ 60K</h1>
            <p className="text-[12px]">Profits Earned</p>
          </div>
        </div>
        <select
          className="text-[10px] outline-0 py-1 px-1 text-slate-500 border border-slate-500 rounded-sm"
          name=""
          id=""
        >
          <option value="">Jull 2022</option>
        </select>
      </div>
    </div>
  );
}

export default CardHold;
