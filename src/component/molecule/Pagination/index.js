"use client";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import classes from "./PaginationComponent.module.css";
import { RECORDS_LIMIT } from "@/resources/const";

export default function Pagination({
  totalRecords = 10,
  currentPage = 1,
  setCurrentPage = () => {},
}) {
  const totalPages = Math.ceil(totalRecords / RECORDS_LIMIT);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    
    // Always show first page
    pages.push(
      <div
        key={1}
        onClick={() => setCurrentPage(1)}
        className={classes.textBox}
        data-active={currentPage === 1}
      >
        <p>1</p>
      </div>
    );

    // Show second page if not active
    if (currentPage !== 2) {
      pages.push(
        <div
          key={2}
          onClick={() => setCurrentPage(2)}
          className={classes.textBox}
          data-active={currentPage === 2}
        >
          <p>2</p>
        </div>
      );
    }

    // Show third page if not active
    if (currentPage !== 3) {
      pages.push(
        <div
          key={3}
          onClick={() => setCurrentPage(3)}
          className={classes.textBox}
          data-active={currentPage === 3}
        >
          <p>3</p>
        </div>
      );
    }

    // Show ellipsis if we're not near the end
    if (currentPage < totalPages - 2) {
      pages.push(
        <div key="ellipsis" className={classes.ellipsis}>
          <p>...</p>
        </div>
      );
    }

    // Show last few pages
    if (totalPages > 3) {
      for (let i = Math.max(totalPages - 2, 8); i <= totalPages; i++) {
        if (i !== currentPage) {
          pages.push(
            <div
              key={i}
              onClick={() => setCurrentPage(i)}
              className={classes.textBox}
              data-active={currentPage === i}
            >
              <p>{i}</p>
            </div>
          );
        }
      }
    }

    return pages;
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.iconBox} onClick={goToPrevPage}>
        <IoIosArrowBack size={16} />
        <span>Previous</span>
      </div>
      
      <div className={classes.pageBtnContainer}>
        {renderPageNumbers()}
      </div>
      
      <div className={classes.iconBox} onClick={goToNextPage}>
        <span>Next</span>
        <IoIosArrowForward size={16} />
      </div>
    </div>
  );
}
