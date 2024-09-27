import { textParams } from "../store/HomeStore";
import { capitalizeFirstletter } from "../utils/capitalizeFirstLetter";

export const Search: React.FC = () => {
  const handleClick = () => {
    var inputElement = document.getElementById(
      "searchInput",
    ) as HTMLInputElement;
    const inputValue = inputElement?.value;
    textParams.set(inputValue)

    const queryParams = new URLSearchParams();
    queryParams.set("query", capitalizeFirstletter(inputValue) || "");
    window.location.href = `/public-training?${queryParams}`;
  };

  return (
    <div className="flex flex-row flex-1">
      <div className="bg-bgCard p-2 rounded-l-lg">
        <button id="search" onClick={handleClick}>
          <img src="../../icons/icon-search.svg" />
        </button>
      </div>
      <input
        type="text"
        id="searchInput"
        placeholder="Cari di sini..."
        className="form-control border-dimGray p-2 w-80 rounded-r-lg bg-bgCard focus:outline-none"
      />
    </div>  
  );
};

