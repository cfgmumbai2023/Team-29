import React, { useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    arithmetic: {
      fraction: "Poor",
      addition: "Poor",
      subtraction: "Poor",
    },
    speech: {
      two_word: "Poor",
      vocabulary: "Poor",
    },
    real_life: {
      tradition_and_modern_game: "Poor",
      mumbai_map_topography: "Poor",
      lemon_sharbat_making: "Poor",
      stamping_design: "Poor",
    },
  });

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(data);

    fetch("http://localhost:5000/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="h-screen flex justify-center w-full bg-slate-50/50">
      <main className="mb-5">
        <h1
          className="text-3xl font-bold text-center my-3 border border-sky-500 rounded-lg p-3"
          style={{ marginBottom: "30px" }}
        >
          Case Study
        </h1>
        <form
          onSubmit={submitHandler}
          className="w-full max-w-lg border border-gray-400 shadow-sm shadow-gray-500/50 rounded-lg p-3"
        >
          <h1 className="text-2xl mb-4 font-bold text-blue-600">Arithmetic</h1>

          <div className="flex align-center items-center w-full px-3 md:mb-0">
            <label
              className="mr-5 block tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-fraction"
            >
              Fraction
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-[200px] h-[50px] bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-fraction"
                onChange={(e) =>
                  setData({
                    ...data,
                    arithmetic: {
                      ...data.arithmetic,
                      fraction: e.target.value,
                    },
                  })
                }
              >
                <option>Poor</option>
                <option>Average</option>
                <option>Good</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex my-2 align-center items-center w-full px-3 md:mb-0">
            <label
              className="mr-5 block tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-addition"
            >
              Addition
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-[200px] h-[50px] bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-addition"
                onChange={(e) =>
                  setData({
                    ...data,
                    arithmetic: {
                      ...data.arithmetic,
                      addition: e.target.value,
                    },
                  })
                }
              >
                <option>Poor</option>
                <option>Average</option>
                <option>Good</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex my-2 align-center items-center w-full px-3 md:mb-0">
            <label
              className="mr-5 block tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-subtraction"
            >
              Subtraction
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-[200px] h-[50px] bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-subtraction"
                onChange={(e) =>
                  setData({
                    ...data,
                    arithmetic: {
                      ...data.arithmetic,
                      subtraction: e.target.value,
                    },
                  })
                }
              >
                <option>Poor</option>
                <option>Average</option>
                <option>Good</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          <hr className="h-px my-8 bg-blue-200 border-0 dark:bg-blue-300" />

          <h1 className="text-2xl my-4 font-bold text-blue-600">
            Speech And Text
          </h1>
          <div className="flex align-center items-center w-full px-3 md:mb-0">
            <label
              className="mr-5 block tracking-wide break-normal text-gray-700 text-xs font-bold mb-2"
              for="grid-two-word"
            >
              Two Word
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-[200px] h-[50px] bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-two-word"
                onChange={(e) =>
                  setData({
                    ...data,
                    speech: {
                      ...data.speech,
                      two_word: e.target.value,
                    },
                  })
                }
              >
                <option>Poor</option>
                <option>Average</option>
                <option>Good</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex my-2 align-center items-center w-full px-3 md:mb-0">
            <label
              className="mr-5 block tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-vocabulary"
            >
              Vocabulary
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-[200px] h-[50px] bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-vocabulary"
                onChange={(e) =>
                  setData({
                    ...data,
                    speech: {
                      ...data.speech,
                      vocabulary: e.target.value,
                    },
                  })
                }
              >
                <option>Poor</option>
                <option>Average</option>
                <option>Good</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          <hr className="h-px my-8 bg-blue-200 border-0 dark:bg-blue-300" />
          <h1 className="text-2xl my-4 font-bold text-blue-600">Real Life</h1>
          <h2 className="text-1xl text-blue-300 ml-4 my-4 font-bold">
            Functions
          </h2>

          <div className="ml-4 flex align-center items-center w-full px-3 md:mb-0 mt-2">
            <label
              className="mr-5 block tracking-wide break-normal text-gray-700 text-xs font-bold mb-2"
              for="grid-modern-game"
            >
              Tradition and Modern Game
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-[200px] h-[50px] bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-modern-game"
                onChange={(e) =>
                  setData({
                    ...data,
                    real_life: {
                      ...data.real_life,
                      tradition_and_modern_game: e.target.value,
                    },
                  })
                }
              >
                <option>Poor</option>
                <option>Average</option>
                <option>Good</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="ml-4 flex align-center items-center w-full px-3 md:mb-0 mt-2">
            <label
              className="mr-5 block tracking-wide break-normal text-gray-700 text-xs font-bold mb-2"
              for="grid-mumbai"
            >
              Mumbai map topography
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-[200px] h-[50px] bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-mumbai"
                onChange={(e) =>
                  setData({
                    ...data,
                    real_life: {
                      ...data.real_life,
                      mumbai_map_topography: e.target.value,
                    },
                  })
                }
              >
                <option>Poor</option>
                <option>Average</option>
                <option>Good</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="ml-4 flex align-center items-center w-full px-3 md:mb-0 mt-2">
            <label
              className="mr-5 block tracking-wide break-normal text-gray-700 text-xs font-bold mb-2"
              for="grid-lemon"
            >
              Lemon Sharbar making
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-[200px] h-[50px] bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-lemon"
                onChange={(e) =>
                  setData({
                    ...data,
                    real_life: {
                      ...data.real_life,
                      lemon_sharbat_making: e.target.value,
                    },
                  })
                }
              >
                <option>Poor</option>
                <option>Average</option>
                <option>Good</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="ml-4 flex align-center items-center w-full px-3 md:mb-0 mt-2">
            <label
              className="mr-5 block tracking-wide break-normal text-gray-700 text-xs font-bold mb-2"
              for="grid-stamping"
            >
              Stamping Design
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-[200px] h-[50px] bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-stamping"
                onChange={(e) =>
                  setData({
                    ...data,
                    real_life: {
                      ...data.real_life,
                      stamping_design: e.target.value,
                    },
                  })
                }
              >
                <option>Poor</option>
                <option>Average</option>
                <option>Good</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-6"
          >
            Submit
          </button>
        </form>
        <div className="h-[30px]" style={{ height: "30px" }}></div>
      </main>
    </div>
  );
};

export default Form;
