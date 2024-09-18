
// import CustomButton from "./CustomButton";

import { useState } from "react";
import { selectedTab } from "../store/HomeStore";
import CustomButton from "./CustomButton";

//   const handleClick = (index: number) => {
//     console.log("You clicked element index " + index);
//   }

//   const tabs = [
//     "Consulting Services",
//     "Learning Services",
//     "Human Capital Services",
//   ];
// <div
//   class="h-auto flex flex-row w-full justify-center"
// >
//   {tabs.map((value, index) => (
//     <div
//       id="demo"
//       class="border-b-4 border-secondary relative flex-[33%] flex justify-center"
//     >
//       <CustomButton title={value} onClick={() => handleClick(index)} />
//     </div>
//   ))}
// </div>

const Tabs : React.FC =  () => {
  const [currentTab, setCurrentTab] = useState(selectedTab?.get() ?? 'Public Training'); // Local state to track current tab

  // Update selectedTab when a tab is clicked
  const handleClick = (index: number) => {
    selectedTab.set(index);
    setCurrentTab(index); // Update local state for immediate UI update
  };

  const tabs = [
    "Public Training",
  ];

  var additionalCssStyle = "";

  return (
    <div className="h-auto flex flex-row w-full justify-center">
      {tabs.map((value, index) => {
        return (
          <div
            id="demo"
            className={`border-b-4 relative flex-[33%] flex justify-center ${
              currentTab === index
                ? "border-secondary text-secondary"
                : "border-black"
            } hover:text-complementary`}
          >
            <CustomButton title={value} onClick={() => handleClick(index)} index={index} />
          </div>
        );
      })}
    </div>
  );
}

export default Tabs;

// <!-- <script>
// function handleClick(index: number) {
//   console.log("You clicked element index " + index);
// }
// </script> -->

