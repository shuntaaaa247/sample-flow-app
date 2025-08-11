import { useCallback, useState } from 'react';
import { Handle, Position } from '@xyflow/react';

export function DCPowerSupply() {
  const [arrangement, setArrangement] = useState<number>(0);
  const [isBeingHovered, setIsBeingHovered] = useState(false);
  const [isBeingClicked, setIsBeingClicked] = useState(false);
  const [value, setValue] = useState("V");

  const handleRotate = () => {
    setArrangement(arrangement + 90);
  };

  const onChange = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
  }, []);

  return (
    <div className="relative group">
      <div 
        className="flex items-center justify-center w-[60px] h-[60px] relative group" 
        style={{ transform: `rotate(${arrangement}deg)` }}
        onMouseEnter={() => setIsBeingHovered(true)} 
        onMouseLeave={() => setIsBeingHovered(false)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 60" width="120" height="120" role="img" aria-labelledby="dcSourceJISAccurate" className="">
          <line x1="50" y1="-10" x2="50" y2="70" stroke="#000" strokeWidth="4"/>
          <line x1="70" y1="10" x2="70" y2="50" stroke="#000" strokeWidth="4"/>

          <line x1="0" y1="30" x2="50" y2="30" stroke="#000" strokeWidth="4"/>
          <line x1="70" y1="30" x2="120" y2="30" stroke="#000" strokeWidth="4"/>
        </svg>

        {/* <Handle type="source" position={arrangement % 180 === 0 ? Position.Left : Position.Top} style={{ visibility: isBeingHovered ? 'visible' : 'hidden' }} />
        <Handle type="source" position={arrangement % 180 === 0 ? Position.Right : Position.Bottom} style={{ visibility: isBeingHovered ? 'visible' : 'hidden' }} /> */}
        {/* <Handle type="source" position={Position.Bottom} style={{ left: 0, visibility: isBeingHovered ? 'visible' : 'hidden' }} /> */}
        {/* <Handle type="source" position={Position.Bottom} style={{ right: 0, visibility: isBeingHovered ? 'visible' : 'hidden' }} /> */}
      </div>
      
      <button 
        className="rotate-90 cursor-pointer absolute -top-2 -right-2 bg-white border border-gray-300 rounded-full w-6 h-6 flex items-center justify-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-gray-100 z-10" 
        onClick={handleRotate}
      >
        ↻
      </button>
      <Handle type="source" position={arrangement % 180 === 0 ? Position.Left : Position.Top} style={{ visibility: isBeingHovered ? 'visible' : 'hidden' }} />
      <Handle type="source" position={arrangement % 180 === 0 ? Position.Right : Position.Bottom} style={{ visibility: isBeingHovered ? 'visible' : 'hidden' }} />
    </div>
  );
}