'use client';
import { useCallback, useState } from 'react';
import { Handle, Position } from '@xyflow/react';

export function ResistanceNode() {
  const [width, setWidth] = useState(90);
  const [height, setHeight] = useState(45);
  const [isBeingHovered, setIsBeingHovered] = useState(false);
  const [isBeingClicked, setIsBeingClicked] = useState(false);
  const [value, setValue] = useState("Resistance");

  const onChange = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
  }, []);
 
  return (
    <div className="resistance-node group relative" onMouseEnter={() => setIsBeingHovered(true)} onMouseLeave={() => setIsBeingHovered(false)}>
      <button 
        className="rotate-90 cursor-pointer absolute -top-2 -right-2 bg-white border border-gray-300 rounded-full w-6 h-6 flex items-center justify-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-gray-100 z-10" 
        onClick={() => {
          setWidth(height);
          setHeight(width);
        }}
      >
        ↻
      </button>
      <div className="flex flex-col items-center justify-center border-2 border-black p-2" style={{ width: width, height: height }} onClick={() => setIsBeingClicked(true)}>
        { isBeingClicked ? (
          <input id="text" name="text" 
          onChange={onChange} 
          className="nodrag" 
          defaultValue={value} 
          style={{ width: width, height: height }} 
          onFocus={() => setIsBeingClicked(true)}
          onBlur={() => setIsBeingClicked(false)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-center">{value}</p>
          </div>
        )}
      </div>
      <Handle type="target" position={Position.Top} style={{ visibility: isBeingHovered ? 'visible' : 'hidden' }} />
      <Handle type="source" position={Position.Bottom} style={{ visibility: isBeingHovered ? 'visible' : 'hidden' }} />
    </div>
  );
}
