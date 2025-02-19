/* eslint-disable react/prop-types */
import { leftIcon, rightIcon } from '../../assets/icons';

const classes =
  'm-auto shadow-md block text-sm md:test-base px-2 py-1 text-center md:px-4 md:py-2 border w-fit text-gray-900 bg-gray-100 hover:text-blue-600 hover:bg-gray-200 focus:ring-1 focus:outline-none focus:ring-gray-100 font-medium dark:focus:ring-blue-500 disabled:text-blue-600 disabled:bg-gray-200 ';

export default function PaginationLinks({ page, pages, changePage }) {
  let middlePagination;

  if (pages <= 2) {
    middlePagination = [...Array(pages)].map((_, index) => (
      <li key={index + 1}>
        <button
          className={classes}
          onClick={() => {
            changePage(index + 1);
          }}
          disabled={page === index + 1}
        >
          {index + 1}
        </button>
      </li>
    ));
  } else {
    const startValue = Math.floor((page - 1) / 2) * 2;

    middlePagination = (
      <>
        {[...Array(2)].map((_, index) => (
          <li key={startValue + index + 1}>
            <button
              className={classes}
              onClick={() => {
                changePage(startValue + index + 1);
              }}
              disabled={page === startValue + index + 1}
            >
              {startValue + index + 1}
            </button>
          </li>
        ))}
        <li>
          <button className={classes}>...</button>
        </li>
        <li>
          <button
            className={classes}
            onClick={() => {
              changePage(pages);
            }}
            disabled={page === pages}
          >
            {pages}
          </button>
        </li>
      </>
    );

    if (page > 2) {
      if (pages - page >= 2) {
        middlePagination = (
          <>
            <li>
              <button
                onClick={() => {
                  changePage(1);
                }}
                disabled={page === 1}
                className={classes}
              >
                1
              </button>
            </li>
            <li>
              <button className={classes}>...</button>
            </li>
            <li>
              <button
                onClick={() => {
                  changePage(startValue);
                }}
                className={classes}
              >
                {startValue}
              </button>
            </li>
            {[...Array(2)].map((_, index) => (
              <li key={startValue + index + 1}>
                <button
                  className={classes}
                  onClick={() => {
                    changePage(startValue + index + 1);
                  }}
                  disabled={page === startValue + index + 1}
                >
                  {startValue + index + 1}
                </button>
              </li>
            ))}
            <li>
              <button className={classes}>...</button>
            </li>
            <li>
              <button
                className={classes}
                onClick={() => {
                  changePage(pages);
                }}
                disabled={page === pages}
              >
                {pages}
              </button>
            </li>
          </>
        );
      } else {
        let amountLeft = pages - page + 2;
        middlePagination = (
          <>
            <li>
              <button
                onClick={() => {
                  changePage(1);
                }}
                disabled={page === 1}
                className={classes}
              >
                1
              </button>
            </li>
            <li>
              <button className={classes}>...</button>
            </li>
            <li>
              <button
                onClick={() => {
                  changePage(startValue);
                }}
                className={classes}
              >
                {startValue}
              </button>
            </li>
            {[...Array(amountLeft)].map((_, index) => (
              <li
                key={startValue + index + 1}
                style={
                  pages < startValue + index + 1 ? { display: 'none' } : null
                }
              >
                <button
                  className={classes}
                  onClick={() => {
                    changePage(startValue + index + 1);
                  }}
                  disabled={page === startValue + index + 1}
                >
                  {startValue + index + 1}
                </button>
              </li>
            ))}
          </>
        );
      }
    }
  }

  return (
    pages > 1 && (
      <div>
        <ul className="flex justify-center items-center gap-2 flex-wrap">
          <li>
            <button
              onClick={() => changePage((prevPage) => prevPage - 1)}
              className={classes}
              disabled={page === 1}
            >
              {leftIcon}
            </button>
          </li>
          {middlePagination}
          <li>
            <button
              onClick={() => changePage((prevPage) => prevPage + 1)}
              disabled={page === pages}
              className={classes}
            >
              {rightIcon}
            </button>
          </li>
        </ul>
      </div>
    )
  );
}
