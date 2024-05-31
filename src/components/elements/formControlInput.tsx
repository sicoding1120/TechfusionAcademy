import React from "react";

const InputFromControl = ({ children }: { children: React.ReactNode }) => {
  return (
    <label className="form-control w-full">
      <div className="input input-bordered flex flex-row-reverse items-center gap-2 h-16">
        <input
          type="text"
          placeholder="Type here"
          className=" w-full py-4"
        />
        {children}
      </div>
      <div className="label">
        <span className="label-text-alt">Bottom Left label</span>
        <span className="label-text-alt">Bottom Right label</span>
      </div>
    </label>
  );
};

export default InputFromControl;
