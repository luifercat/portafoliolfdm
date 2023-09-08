const WorkItem = ({ title, details }) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-2 m-6 custom-neum02">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3  mt-1.5 -left-1.5" />
        <p className="flex fles-wrap gap-4 flex-row items-center justify-start text-xs md-text-sm p-4">
          <span className="text-lg font-semibold text-cyan-950 ">{title}</span>
        </p>
        <span className=" text-base font-normal text-cyan-950 ">{details}</span>
      </li>
    </ol>
  );
};

export default WorkItem;
