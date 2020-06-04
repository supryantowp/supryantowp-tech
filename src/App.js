import React, { Fragment } from "react";

import background from "./Assets/Images/background.jpg";
import profile from "./Assets/Images/profile.png";

function App() {
  return (
    <Fragment>
      <img
        className="fixed top-0 left-0 w-full h-full object-cover"
        src={background}
      />
      <div className="fixed top-0 left-0 w-full h-full bg-blue-500 opacity-50"></div>

      <div className="h-screen relative flex items-center justify-center">
        <div className="flex lg:w-8/12 w-10/12 md:w-10/12 flex-col md:flex-row">
          <img
            className="w-56 h-56 rounded-full mb-8 md:mb-0 object-cover"
            src={profile}
          />
          <div className="md:ml-16 text-white">
            <h1 className="text-3xl font-bold">Supryanto Widadi Putra</h1>
            <div className="uppercase tracking-widest font-light text-xs">
              Web Developer
            </div>
            <p className="mt-4 text-lg leading-relaxed">
              saya seorang web developer, bermain dengan laravel, reactjs,
              tailwindcss
            </p>
            <a
              className="text-white-500 font-bold hover:underline"
              href="https://project.supryantowp.tech"
              target="_blank"
            >
              Project saya
            </a>
            <div className="flex mt-10 items-center">
              {/* Button  */}
              <a
                className="bg-pink-500 text-white rounded px-10 py-3 mr-4"
                href="mailto:supryantowp@gmail.com"
              >
                Contact Saya
              </a>

              {/* Facebokk */}
              <a href="https://facebook.com/supryantowp" target="_blank">
                <svg
                  className="mx-4"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.75 2.08333H15.625C14.2437 2.08333 12.9189 2.63206 11.9422 3.60881C10.9654 4.58557 10.4167 5.91033 10.4167 7.29166V10.4167H7.29167V14.5833H10.4167V22.9167H14.5833V14.5833H17.7083L18.75 10.4167H14.5833V7.29166C14.5833 7.01539 14.6931 6.75044 14.8884 6.55509C15.0838 6.35974 15.3487 6.25 15.625 6.25H18.75V2.08333Z"
                    fill="white"
                  />
                </svg>
              </a>

              {/* Twitter */}
              <a href="https://twitter.com/supryantowp" target="_blank">
                <svg
                  className="mx-4"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.9583 3.12501C22.9608 3.82863 21.8564 4.36679 20.6875 4.71876C20.0601 3.99741 19.2264 3.48614 18.299 3.2541C17.3716 3.02205 16.3953 3.08042 15.5022 3.42131C14.609 3.76221 13.8421 4.36918 13.3052 5.16013C12.7682 5.95108 12.4872 6.88786 12.5 7.84376V8.88542C10.6694 8.93289 8.85549 8.5269 7.2198 7.7036C5.58411 6.8803 4.17741 5.66525 3.125 4.16667C3.125 4.16667 -1.04167 13.5417 8.33333 17.7083C6.18805 19.1646 3.63245 19.8947 1.04166 19.7917C10.4167 25 21.875 19.7917 21.875 7.81251C21.874 7.52235 21.8461 7.23292 21.7917 6.94792C22.8548 5.89948 23.605 4.57575 23.9583 3.12501V3.12501Z"
                    fill="white"
                  />
                </svg>
              </a>

              {/* Instagram */}
              <a href="https://instagram.com/supryantowp" target="_blank">
                <svg
                  className="mx-4"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.7083 2.08333H7.29166C4.41518 2.08333 2.08333 4.41518 2.08333 7.29166V17.7083C2.08333 20.5848 4.41518 22.9167 7.29166 22.9167H17.7083C20.5848 22.9167 22.9167 20.5848 22.9167 17.7083V7.29166C22.9167 4.41518 20.5848 2.08333 17.7083 2.08333Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.6667 11.8437C16.7952 12.7107 16.6471 13.5961 16.2435 14.374C15.8399 15.1519 15.2012 15.7827 14.4184 16.1767C13.6355 16.5708 12.7484 16.7079 11.8831 16.5687C11.0178 16.4294 10.2185 16.0209 9.5988 15.4012C8.97909 14.7815 8.57056 13.9822 8.43133 13.1169C8.29209 12.2516 8.42924 11.3645 8.82326 10.5816C9.21728 9.7988 9.84812 9.16014 10.626 8.7565C11.4039 8.35285 12.2893 8.20477 13.1563 8.33333C14.0406 8.46446 14.8592 8.87652 15.4914 9.50865C16.1235 10.1408 16.5355 10.9594 16.6667 11.8437Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.2292 6.77083H18.2396"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              {/* Github */}
              <a href="https://github.com/supryantowp" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-4"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default App;
