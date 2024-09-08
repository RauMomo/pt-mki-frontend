import { useState } from "react";
import type { FacilitatorProfile } from "../pages/training/[id].astro";
import Dialog from "./Dialog";

export interface ProfileItemProps {
  data: FacilitatorProfile;
}

export const ProfileItem = ({ data }: ProfileItemProps) => {
  var [dialogIsOpen, setIsDialog] = useState(false);

  var openDialog = (e: any) => {
    setIsDialog(true);
    console.log(dialogIsOpen);
  };

  var closeDialog = (e: any) => {
    e.preventDefault();
    setIsDialog(false);
    console.log("test");
  };

  return (
    <>
      <div className="flex flex-col flex-1 gap-8 justify-center items-center">
        <a href="" className="circle">
          <img height="128" width="128" src={data.image} alt={data.name} />
        </a>
        <div className="relative flex-grow flex flex-col gap-4 items-center text-center">
          <h4>{data.name}</h4>
          <p>{data.role}</p>
          <button
            className="w-auto z-10 text-black underline text-blue-700"
            title="Preview Profile"
            onClick={openDialog}
          >
            Preview Profile
          </button>
        </div>
      </div>
      <Dialog
        isOpen={dialogIsOpen}
        onClose={closeDialog}
        onRequestClose={closeDialog}
        width={200}
        style={{
          marginTop: 250,
        }}
        contentClassName="pb-0 px-0"
      >
        <div className="bg-white h-auto mt-auto mb-auto p-8">
            {/* Close Button */}
            <button
              onClick={closeDialog}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-4 mt-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          <div className="flex flex-col flex-1 gap-10 justify-center items-center text-center">
            <a href="" className="circle">
              <img height="128" width="128" src={data.image} alt={data.name} />
            </a>
            <h4>{data.name}</h4>
            <p>{data.role}</p>
            <p>{data.description}</p>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ProfileItem;
