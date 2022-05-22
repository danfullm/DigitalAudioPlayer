import TrackLine from "../components/track.js";
import customData from '../sampleData.json';

function ProjectView() {
  return (
    <div className="bg-slate-900 h-screen relative">
      <div class="flex flex-col sm:flex-row sm:justify-around items-start">
        <div class="w-80 h-screen bg-slate-700 text-center py-8">
            <h1 className="text-2xl text-white">Controls</h1>
        </div>
        {/* Main Column */}
        <div class="flex flex-col w-full pl-0 md:p-0 md:space-y-4">
            {/* Playback Controls */}
        <header class="w-full shadow-lg bg-white items-center h-16 rounded-2xl z-40 text-center py-4 ">
            Playback Controls
        </header>
{/* Timeline */}
<div>
   {customData && customData.tracks.map((track)=>{
       return(
        <TrackLine trackName={track.trackName} data={track.steps} />
       )
   })}



</div>
        
        </div>
      </div>
    </div>
  );
}

export default ProjectView;
