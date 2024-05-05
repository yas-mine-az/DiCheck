import * as React from "react";

function RegisterPage() {
  return (
    <div className="flex justify-center items-center px-16 py-20 bg-white max-md:px-5">
      <div className="w-full max-w-[1086px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/66d01c54f86ee37ad169b1f97d22f622a18ff37a46b755eeaf090d0b7fcba1df?apiKey=7fd2b033b9574f39882fe9ef4728cd45&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/66d01c54f86ee37ad169b1f97d22f622a18ff37a46b755eeaf090d0b7fcba1df?apiKey=7fd2b033b9574f39882fe9ef4728cd45&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/66d01c54f86ee37ad169b1f97d22f622a18ff37a46b755eeaf090d0b7fcba1df?apiKey=7fd2b033b9574f39882fe9ef4728cd45&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/66d01c54f86ee37ad169b1f97d22f622a18ff37a46b755eeaf090d0b7fcba1df?apiKey=7fd2b033b9574f39882fe9ef4728cd45&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/66d01c54f86ee37ad169b1f97d22f622a18ff37a46b755eeaf090d0b7fcba1df?apiKey=7fd2b033b9574f39882fe9ef4728cd45&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/66d01c54f86ee37ad169b1f97d22f622a18ff37a46b755eeaf090d0b7fcba1df?apiKey=7fd2b033b9574f39882fe9ef4728cd45&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/66d01c54f86ee37ad169b1f97d22f622a18ff37a46b755eeaf090d0b7fcba1df?apiKey=7fd2b033b9574f39882fe9ef4728cd45&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/66d01c54f86ee37ad169b1f97d22f622a18ff37a46b755eeaf090d0b7fcba1df?apiKey=7fd2b033b9574f39882fe9ef4728cd45&"
              className="w-full shadow-sm aspect-[0.8] max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-16 py-20 mt-6 w-full text-xs leading-5 bg-white rounded-2xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="self-center mt-1.5 text-6xl font-semibold text-center text-gray-600 max-md:text-4xl">
                DiCheck
              </div>
              <div className="flex flex-col justify-center items-start px-11 py-4 mt-12 whitespace-nowrap bg-white rounded-md border border-gray-600 border-solid max-md:px-5 max-md:mt-10">
                <div className="bg-clip-text">Username</div>
              </div>
              <div className="flex flex-col justify-center items-start px-11 py-4 mt-2.5 whitespace-nowrap bg-white rounded-md border border-gray-600 border-solid max-md:px-5">
                <div className="bg-clip-text">Email</div>
              </div>
              <div className="flex flex-col justify-center items-start px-11 py-4 mt-2.5 whitespace-nowrap bg-white rounded-md border border-gray-600 border-solid max-md:px-5">
                <div className="bg-clip-text">Password</div>
              </div>
              <div className="justify-center items-center px-16 py-4 mt-28 text-base font-semibold text-white whitespace-nowrap bg-gray-600 rounded-md max-md:px-5 max-md:mt-10">
                REGISTER
              </div>
              <div className="self-center mt-6 leading-6 text-gray-600 bg-clip-text">
                Already have an account?{" "}
                <span className="text-gray-600">Login</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;