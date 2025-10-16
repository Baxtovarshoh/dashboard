function SideBar() {
  return (
    <>
      <div className="flex cursor-pointer gap-1 flex-col w-full">
        <div className="ka">
          <i className="bi bi-house-door-fill text-xl"></i>
          <span>Home</span>
        </div>
        <div className="ka relative bg-slate-300/30 ">
          <i className="bi absolute -left-[9.4px] top-[2.4px]  text-3xl bi-caret-right-fill"></i>
          <i className="bi bi-graph-up-arrow text-xl"></i>
          <span>Forecast</span>
        </div>
        <div className="ka">
          <i className="bi bi-people-fill text-xl"></i>
          <span>Venders</span>
        </div>
        <div className="ka ">
          <i className="bi bi-chat-square-text-fill text-xl"></i>
          <span>Messages</span>
        </div>
        <div className="ka ">
          <i className="bi bi-columns-gap text-xl"></i>
          <span>Categories</span>
        </div>
        <div className="ka ">
          <i className="bi bi-folder-fill text-xl"></i>
          <span>Folders</span>
        </div>
      </div>
      <div className="w-full flex flex-col">
        <div className="ka">
          <i className="bi bi-gear-fill"></i>
          <span>Setting</span>
        </div>
        <div className="ka">
          <i className="bi bi-save"></i>
          <span>Backup</span>
        </div>
      </div>
    </>
  );
}

export default SideBar;
