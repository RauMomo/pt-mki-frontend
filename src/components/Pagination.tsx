interface Props {
    length: number;
    currentUrl: string;
    currentPage: string;
    firstUrl: string;
    prevUrl: string;
    nextUrl: string;
    lastUrl: string;
    baseUrl: string;
    query: string;
}

const Pagination: React.FC<Props> = ({
  length,
  currentUrl,
  currentPage,
  firstUrl,
  prevUrl,
  nextUrl,
  lastUrl,
  baseUrl,
  query,
}) => {
    const paginationList = Array.from(
        { length: Number(length) },
        (_, i) => i + 1,
    );
  return (
    <nav
      aria-label="Blog pages"
      className="pagination pagination-default flex flex-row w-full justify-center items-center"
    >
      {/* First Page Link */}
      {firstUrl == currentUrl ? (
        <span className="pagination__link disabled">
          <i className="pi-angle-left"></i>
          <i className="pi-angle-left"></i>
        </span>
      ) : (
        <a href={firstUrl} className="a_pagination">
          <i className="pi-angle-left"></i>
          <i className="pi-angle-left"></i>
        </a>
      )}

      {/* Previous Page Link */}
      {prevUrl ? (
        <button className="pagination_button">
          <a href={prevUrl} className="a_pagination">
            &#x2190; Previous
          </a>
        </button>
      ) : (
        <button className="pagination_button disabled">
          <a className="a_pagination disabled">&#x2190; Previous</a>
        </button>
      )}

      {/* Pagination Numbers */}
      <div className="flex flex-row gap-2 mx-4">
        {paginationList.length > 0 ? (
            paginationList.map((num) => {
              // Log the current value of 'num'
            
              return (
                <div
                  key={num} // Make sure to add a unique key
                  className={`rounded-xl w-8 text-center py-2 ${
                    parseInt(currentPage) !== num
                      ? "bg-customWhite"
                      : "bg-[#ECF7FD]"
                  }`}
                >
                  <a
                    href={`${num == 1 ? (query.length > 0 ? `/public-training?query=${query}` : "/public-training") : query.length > 0 ? `/public-training/${num}?query=${query}` : `/public-training/${num}`}`}
                    className={`a_pagination ${parseInt(currentPage) === num ? "active text-primary" : "text-captionText"}`}
                  >
                    {num}
                  </a>
                </div>
              );
            })) : (
            <div></div>
        )}
      </div>

      {/* Next Page Link */}
      {nextUrl ? (
        <button className="pagination_button">
          <a href={`/public-training/${nextUrl}`} className="a_pagination">
            Next &#x2192;
          </a>
        </button>
      ) : (
        <button className="pagination_button disabled">
          <a className="a_pagination disabled">Next &#x2192;</a>
        </button>
      )}

      {/* Last Page Link */}
      {lastUrl == currentUrl ? (
        <span className="a_pagination disabled">
          <i className="pi-angle-right"></i>
          <i className="pi-angle-right"></i>
        </span>
      ) : (
        <a href={lastUrl} className="a_pagination">
          <i className="pi-angle-right"></i>
          <i className="pi-angle-right"></i>
        </a>
      )}
    </nav>
  );
};

export default Pagination;