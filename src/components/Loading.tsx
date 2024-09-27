import React from "react";

const Loading : React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-center">
      <div
        className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-e-transparent border-current align-[-0.5em] text-primary relative"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );
}

export default Loading;