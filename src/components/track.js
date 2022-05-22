const TrackLine = (props) => {
  return (
    <div
      className="w-full h-24 bg-gray-800 m-0 flex flex-row border-gray-500 border-2	"
      id="track-row"
    >
      <div className="bg-gray-800 h-full w-72 flex flex-col" id="track-label">
        <input value={props.trackName} />{" "}
        <div className="flex flex-row p-4 gap-4">
          <div className="bg-gray-600 text-gray-100 w-8 h-8 text-center font-bold cursor-pointer transition-all hover:bg-gray-400">
            M
          </div>
          <div className="bg-gray-600 text-gray-100 w-8 h-8 text-center font-bold cursor-pointer transition-all hover:bg-gray-400">
            S
          </div>
        </div>
      </div>
      <div className="bg-gray-200 w-full h-full">
        <div className="h-full w-40 bg-slate-700 flex flex-row gap-2">
          {props.data &&
            props.data.map((step) => {
              return <div>{step}</div>;
            })}
        </div>
      </div>
    </div>
  );
};
export default TrackLine;
