export const SearchControl: React.FC = () => {
  const queryParams = window.location.search
  const searchedWord = queryParams.includes("query")
    ? queryParams.substring(queryParams.indexOf("=") + 1, queryParams.length)
    : "";
  
  const navigateToPublicTraining = () => {
    window.location.href = "/public-training/";
  }

  return (
    <div>
      {searchedWord.length > 0 ? (
        <div className="flex flex-row justify-start items-center">
          <div className="mr-8">Hasil Pencarian untuk: </div>
          <div className="inline-block items-start text-left">
            <p className="p-2 rounded-lg relative bg-chip w-auto whitespace-nowrap flex flex-row">
              <span className="rounded-xl font-normal px-4 py-1 text-primary">
                {searchedWord}
              </span>
              <button
                onClick={() => {
                  navigateToPublicTraining()
                }}
                className="text-gray-500 hover:text-gray-800"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}