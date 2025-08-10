import { useCallback, useState } from 'react';
import { Handle, Position } from '@xyflow/react';

export function DCPowerSupply() {
  const [arrangement, setArrangement] = useState("horizontal");
  const [isBeingHovered, setIsBeingHovered] = useState(false);
  const [isBeingClicked, setIsBeingClicked] = useState(false);
  const [value, setValue] = useState("V");

  const onChange = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
  }, []);

  return (
    <div className="flex bg-amber-300 items-center justify-center p-4 w-[50px] h-[50px]" onMouseEnter={() => setIsBeingHovered(true)} onMouseLeave={() => setIsBeingHovered(false)}>
      <svg width="50" height="50" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg" className="bg-gray-200">
        <g className="layer" transform="scale(-1, 1) translate(-640, 0)">
          <title>Layer 1</title>
          <line fill="none" id="svg_5" stroke="#000000" strokeWidth="10" x1="280" x2="280" y1="90" y2="370"/>
          <line fill="none" id="svg_8" stroke="#000000" strokeWidth="10" transform="matrix(1 0 0 1 0 0)" x1="320" x2="320" y1="132.5" y2="329.5"/>
          <line fill="none" id="svg_9" stroke="#000000" strokeWidth="10" x1="0" x2="200" y1="226.5" y2="227.5"/>
          <line fill="none" id="svg_10" stroke="#000000" strokeWidth="10" x1="320" x2="320" y1="229.5" y2="230.5"/>
        </g>
      </svg>
      <Handle type="target" position={Position.Top} style={{ visibility: isBeingHovered ? 'visible' : 'hidden' }} />
      <Handle type="source" position={Position.Bottom} style={{ visibility: isBeingHovered ? 'visible' : 'hidden' }} />
      <Handle type="target" position={Position.Left} style={{ visibility: isBeingHovered ? 'visible' : 'hidden' }} />
      <Handle type="source" position={Position.Right} style={{ visibility: isBeingHovered ? 'visible' : 'hidden' }} />
    </div>
  );
}