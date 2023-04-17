import React, { useEffect, useState } from "react";
import ResidentCard from "./ResidentCard";

const ResidentList = ({ location }) => {
  const residents = location?.residents;
  const [currentPage, setcurrentPage] = useState(1);

  let arrayPages = [];
  const cantPage = Math.ceil(residents?.length / 20);

  for (let i = 1; i <= cantPage; i++) {
    arrayPages.push(i);
  }

  // 0 ,  20
  // 20 , 40
  // 40, 60

  let start = currentPage * 20 - 20;
  let end = currentPage * 20;

  const changePage = (page) => {
    window.scrollTo(0, 500);
    setcurrentPage(page);
  };

  useEffect(()=> {
    setcurrentPage(1)
  }, [location])
  return (
    <>
      <section className="flex flex-col items-center gap-4 md:flex-row md:flex-wrap md:justify-center md:items-stretch  md:mb-10">
        {residents?.slice(start, end).map((resident) => (
          <ResidentCard key={resident} resident={resident} />
        ))}
      </section>
      <div className="flex justify-center flex-wrap gap-3 mb-5 mt-3">
        {arrayPages.map((page) => (
          <div
            key={page}
            className={`h-[50px] w-[50px] lg:h-[80px]  lg:w-[80px] cursor-pointer hover:bg-[#062226] ${
              currentPage === page && "bg-[#062226]"
            } flex justify-center items-center`}
            onClick={() => changePage(page)}
          >
            <p className="text-[22px] lg:text-[25px]">{page}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ResidentList;
