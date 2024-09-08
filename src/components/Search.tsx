import { searchParams } from "../store/HomeStore";

export const Search: React.FC = () => {
  const handleClick = () => {
    var inputElement = document.getElementById(
      "searchInput",
    ) as HTMLInputElement;
    const inputValue = inputElement?.value;
    searchParams.set(inputValue)
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set("query", inputValue || "");

    window.location.search = queryParams.toString();
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

