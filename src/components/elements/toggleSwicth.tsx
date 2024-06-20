import React from 'react'

const ToggleSwicth = ({onclick}: any) => {
  return (
    <label
      className="relative h-8 w-12 cursor-pointer [-webkit-tap-highlight-color:_transparent]"
      htmlFor="switch"
    >
      <input
        className="peer sr-only"
        id="switch"
        type="checkbox"
        onClick={onclick}
      />

      <span className="absolute inset-0 m-auto h-2 rounded-full bg-stone-400"></span>

      <span className="absolute inset-y-0 start-0 m-auto size-6 rounded-full bg-stone-600 transition-all peer-checked:start-6 peer-checked:[&amp;_>_*]:scale-0">
        <span className="absolute inset-0 m-auto size-4 rounded-full bg-stone-300 transition"></span>
      </span>
    </label>
  );
}

export default ToggleSwicth