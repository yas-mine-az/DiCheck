import Button1 from "@/components/Button/button1";
import * as React from "react";

function RegisterPage() {
  return (
    <div className="flex justify-center items-center w-full px-16 py-14 bg-zinc-50 max-md:px-5">
      <div className="w-full max-w-[985px] max-md:max-w-full">
        <div className="flex gap-20 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b0508d42ba886f1bc782cf679fe2412ee3c0c84b30e447010be6f3d68e475ae9?apiKey=7fd2b033b9574f39882fe9ef4728cd45&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0508d42ba886f1bc782cf679fe2412ee3c0c84b30e447010be6f3d68e475ae9?apiKey=7fd2b033b9574f39882fe9ef4728cd45&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0508d42ba886f1bc782cf679fe2412ee3c0c84b30e447010be6f3d68e475ae9?apiKey=7fd2b033b9574f39882fe9ef4728cd45&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0508d42ba886f1bc782cf679fe2412ee3c0c84b30e447010be6f3d68e475ae9?apiKey=7fd2b033b9574f39882fe9ef4728cd45&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0508d42ba886f1bc782cf679fe2412ee3c0c84b30e447010be6f3d68e475ae9?apiKey=7fd2b033b9574f39882fe9ef4728cd45&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0508d42ba886f1bc782cf679fe2412ee3c0c84b30e447010be6f3d68e475ae9?apiKey=7fd2b033b9574f39882fe9ef4728cd45&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0508d42ba886f1bc782cf679fe2412ee3c0c84b30e447010be6f3d68e475ae9?apiKey=7fd2b033b9574f39882fe9ef4728cd45&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0508d42ba886f1bc782cf679fe2412ee3c0c84b30e447010be6f3d68e475ae9?apiKey=7fd2b033b9574f39882fe9ef4728cd45&"
              className="self-stretch my-auto w-full shadow-sm aspect-[0.8] max-md:mt-10"
            />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-11 py-7 w-full text-xs leading-5 bg-white rounded-3xl shadow-2xl text-stone-950 text-opacity-70 max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 justify-between text-4xl font-bold text-gray-600 leading-[55.5px]">
                <div
                style={{ 
                  fontFamily: 'Montserrat-Bold', 
                  fontSize: '40px', 
                }}>
                  Register Now</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc2205667538b7debf275b20d18ecf26649888f0f91e8a635a88297bbffff3b7?apiKey=7fd2b033b9574f39882fe9ef4728cd45&"
                  className="shrink-0 self-start aspect-square w-[23px]"
                />
              </div>
              <div 
                style={{ 
                  fontFamily: 'Montserrat-Light', 
                  fontSize: '18px',
                }}
              className="text-lg tracking-normal text-gray-600">
                Let us take part on your health takecare!
              </div>
              <div
                style={{ 
                  fontFamily: 'Montserrat-Light', 
                  fontSize: '15px',
                }} className="items-start px-3 pt-1.5 pb-7 mt-10 max-w-full whitespace-nowrap bg-white rounded-xl border border-gray-600 border-solid w-[392px] max-md:pr-5 max-md:mt-10 max-md:mr-2.5">
                Username
              </div>
              <div style={{ 
                  fontFamily: 'Montserrat-Light', 
                  fontSize: '15px',
                }} className="items-start px-3 pt-1.5 pb-7 mt-6 max-w-full whitespace-nowrap bg-white rounded-xl border border-gray-600 border-solid w-[392px] max-md:pr-5 max-md:mt-10 max-md:mr-2.5">
                Email
              </div>
              <div style={{ 
                  fontFamily: 'Montserrat-Light', 
                  fontSize: '15px',
                }} className="items-start px-3 pt-1.5 pb-7 mt-6 max-w-full whitespace-nowrap bg-white rounded-xl border border-gray-600 border-solid w-[392px] max-md:pr-5 max-md:mt-10 max-md:mr-2.5">
                Password
              </div>
              <div className="mt-1 mb-6 max-md:mr-2.5">
                8+ characters
              </div>
              <Button1 
                style={{ 
                  fontFamily: 'Montserrat-Bold', 
                  fontSize: '18px',
                }}
                className="self-center w-[392px] mt-10">
                Create account
              </Button1>
              <div className="self-center mt-10 text-xs tracking-normal leading-4 text-center text-gray-600 underline w-[281px]">
                By continuing I agree with the{" "}
                <span className="text-gray-600 underline">
                  Terms & Conditions
                </span>
                ,{" "}
                <span className="text-gray-600 underline">Privacy Policy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;

