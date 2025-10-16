import imgs from "./assets/Group 11.png";
import SideBar from "./components/SideBar";
import rt from "./assets/Ellipse 2.png";
import Heading from "./components/Heading";
import Line from "./components/Line";
import HeaderTextLine from "./components/HeaderTextLine";
import CardHold from "./components/CardHold";
import T from "./assets/9_Pragmatica_3D_Metal_Calendar.png";
import LastCard from "./components/LastCard";
import CardSoldDiagram from "./components/CardSoldDiagram";
import CardSoldHeader from "./components/CardSoldHeader";
import Label from "./components/Labels";
import CardDiag from "./components/CardDiag";
import CardBar from "./components/CardBar";

function Dashboard() {
  return (
    <div className="w-7xl  mx-auto h-[800px] p-5 justify-center bg-gradient-to-bl from-indigo-500 flex  to-purple-500 relative">
      <div className="relative z-10 w-[96%] h-full gap-6 bg-neutral-300/50 border border-indigo-600 rounded-4xl flex p-5 ">
        <div className="w-1/6 bg-indigo-900 py-10 h-full rounded-2xl">
          <div className="w-full flex text-white justify-between items-center flex-col h-full">
            <span className="flex justify-center flex-col items-center">
              {" "}
              <img src={imgs} alt="" />
              <p>
                Digit<span className="text-lime-500">X</span>
              </p>
            </span>
            <SideBar />
          </div>
        </div>
        <div className="w-[89%] space-y-5 rounded-2xl ">
          <Heading rt={rt} />
          <div className="w-full flex  h-[40%] gap-5">
            <div className="w-[85%] bg-white rounded-2xl flex justify-center gap-2 flex-col px-5 py-2">
              <HeaderTextLine />
              <div className="w-full h-3/4">
                <Line />
              </div>
            </div>
            <CardHold />
          </div>
          <div className=" flex gap-5 h-[40%]">
            <div className="w-4/6 flex gap-5">
              <div className="w-1/2  p-3 bg-white space-y-1.5 rounded-2xl">
                <CardSoldHeader />
                <div className="w-full flex gap-3 h-[calc(100%-30px)]">
                  <CardSoldDiagram />
                  <Label />
                </div>
              </div>
              <div className="  bg-white rounded-2xl p-3 flex flex-col gap-5 w-[47%]">
                <CardDiag />
                <div className="w-full h-full flex">
                  <CardBar />
                </div>
              </div>
            </div>
            <LastCard val={T} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
