import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Pagination() {
  const { page, handlePageChange, totalPages, isDarkMode } = useContext(AppContext);

  if (!totalPages) return null;

    return (
      <div
          className={`w-full flex justify-center items-center fixed bottom-0  
          ${
            isDarkMode ? "bg-[#1a1a1a] border-t-2 border-zinc-950 text-white shadow-lg" : "bg-white text-black border shadow"
        }  `
    }
      >
          <div className={`flex justify-between w-11/12 max-w-[670px] py-3`}>
              <div className={` flex gap-x-2  `}>
                  {page > 1 && (
                      <button
                          className={`rounded-md border-2 px-4 py-1 `}
                          onClick={() => handlePageChange(page - 1)}
                      >
                          Previous
                      </button>
                  )}
                  {page < totalPages && (
                      <button
                          className="rounded-md border-2 px-4 py-1"
                          onClick={() => handlePageChange(page + 1)}
                      >
                          Next
                      </button>
                  )}
              </div>

              <p className="font-bold">
                  Page {page} of {totalPages}
              </p>
          </div>
      </div>
  );
};
