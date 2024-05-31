import React from 'react'

const InputNormal = ({ children, type, onchange, value }: { children: React.ReactNode; type: string; onchange: any; value:any}) => {
  return (
    <label className="input input-bordered flex h-16 flex-row-reverse items-center gap-2">
          <input type={type} className="grow" placeholder={`enter your ${type === "text" ? "username" : type}`} onChange={onchange} value={value}/>
          {children}
    </label>
  );
}

export default InputNormal