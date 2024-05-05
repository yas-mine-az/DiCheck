import * as React from "react";

function LandingPage() {
  return (
    <div className="flex flex-col px-8 pb-9 bg-slate-300 max-md:px-5">
      <div className="flex justify-center items-center self-center px-16 py-9 w-full font-bold whitespace-nowrap bg-slate-300 max-w-[1322px] max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between w-full max-w-[1043px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-wrap max-md:max-w-full">
            <div className="flex-auto my-auto text-2xl tracking-normal leading-8 text-slate-800">
              DiCheck
            </div>
            <div className="flex gap-5 justify-between text-sm tracking-wide leading-6 text-center text-neutral-500">
              <div className="justify-center py-2">Home</div>
              <div className="justify-center px-1.5 py-2">Check</div>
              <div className="justify-center py-2">Articles</div>
              <div className="justify-center px-1 py-1.5">History</div>
            </div>
          </div>
          <div className="justify-center self-start px-px py-1 text-sm tracking-wide leading-5 text-right text-gray-600">
            Login
          </div>
        </div>
      </div>
      <div className="justify-end pl-20 mt-1 bg-slate-300 max-md:pl-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col justify-center self-stretch pr-8 my-auto font-bold tracking-wide leading-[150%] max-md:mt-10 max-md:max-w-full">
              <div className="text-base tracking-normal text-gray-600 max-md:max-w-full">
                Welcome
              </div>
              <div className="mt-8 text-6xl leading-[80px] text-slate-800 max-md:max-w-full max-md:text-4xl max-md:leading-[62px]">
                A Great Place to Receive Care
              </div>
              <div className="mt-8 text-xl text-neutral-500 max-md:max-w-full">
                Get diagnosed or search for health articles now!
              </div>
              <div className="flex gap-2.5 self-start mt-8 text-sm leading-5 text-center">
                <div className="justify-center px-10 py-4 text-white whitespace-nowrap bg-gray-600 rounded-md max-md:px-5">
                  Check
                </div>
                <div className="justify-center px-10 py-4 text-gray-600 rounded-md border border-gray-600 border-solid max-md:px-5">
                  Read Articles
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center items-start pt-20 w-full bg-slate-300 max-md:mt-8 max-md:max-w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1f57bb7534ba54673530f29ca12a55e304e60afe7f3ae9e948f27eb958570be4?apiKey=7fd2b033b9574f39882fe9ef4728cd45&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f57bb7534ba54673530f29ca12a55e304e60afe7f3ae9e948f27eb958570be4?apiKey=7fd2b033b9574f39882fe9ef4728cd45&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f57bb7534ba54673530f29ca12a55e304e60afe7f3ae9e948f27eb958570be4?apiKey=7fd2b033b9574f39882fe9ef4728cd45&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f57bb7534ba54673530f29ca12a55e304e60afe7f3ae9e948f27eb958570be4?apiKey=7fd2b033b9574f39882fe9ef4728cd45&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f57bb7534ba54673530f29ca12a55e304e60afe7f3ae9e948f27eb958570be4?apiKey=7fd2b033b9574f39882fe9ef4728cd45&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f57bb7534ba54673530f29ca12a55e304e60afe7f3ae9e948f27eb958570be4?apiKey=7fd2b033b9574f39882fe9ef4728cd45&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f57bb7534ba54673530f29ca12a55e304e60afe7f3ae9e948f27eb958570be4?apiKey=7fd2b033b9574f39882fe9ef4728cd45&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f57bb7534ba54673530f29ca12a55e304e60afe7f3ae9e948f27eb958570be4?apiKey=7fd2b033b9574f39882fe9ef4728cd45&"
                className="z-10 mt-12 max-w-full aspect-[0.96] w-[569px] max-md:mt-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;