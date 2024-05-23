import Button1 from "@/components/Button/button1";
import * as React from "react";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RegisterPage2() {
  const [data, setData] = React.useState({});
  const [first_name, setfirst_name] = React.useState('');
  const [last_name, setlast_name] = React.useState('');
  const [age, setAge] = React.useState('');
  const [gender, setGender] = React.useState('');

  React.useEffect(() => {
    const registerData = localStorage.getItem('registerData');
    if (registerData) {
      setData(JSON.parse(registerData));
    }
  }, []);

  const handleSubmit = async () => {
    const newData = { ...data, first_name, last_name, age, gender };
    localStorage.setItem('registerData', JSON.stringify(newData));
    console.log('Data yang disimpan', newData);

    try {
      const response = await axios.post('http://localhost:8080/api/user/', newData);
      console.log('Register berhasil', response.data);
      localStorage.removeItem('registerData');
      toast.success('Register berhasil', {
        position: "top-center",
        autoClose: 2000
      });
      setTimeout(() => {
        window.location = '/login';
      }, 2000);
    } catch (error) {
      console.error('Register gagal', error);
      toast.error('Register gagal', {
        position: "top-center",
        autoClose: 2000
      });
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center w-full px-16 py-14 bg-zinc-50 max-md:px-5">
        <ToastContainer />
      <div className="w-full max-w-[985px] max-md:max-w-full">
        <div className="flex gap-20 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:w-full max-md:ml-0 max-md:mt-10">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b0508d42ba886f1bc782cf679fe2412ee3c0c84b30e447010be6f3d68e475ae9?apiKey=7fd2b033b9574f39882fe9ef4728cd45&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0508d42ba886f1bc782cf679fe2412ee3c0c84b30e447010be6f3d68e475ae9?apiKey=7fd2b033b9574f39882fe9ef4728cd45&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0508d42ba886f1bc782cf679fe2412ee3c0c84b30e447010be6f3d68e475ae9?apiKey=7fd2b033b9574f39882fe9ef4728cd45&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0508d42ba886f1bc782cf679fe2412ee3c0c84b30e447010be6f3d68e475ae9?apiKey=7fd2b033b9574f39882fe9ef4728cd45&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0508d42ba886f1bc782cf679fe2412ee3c0c84b30e447010be6f3d68e475ae9?apiKey=7fd2b033b9574f39882fe9ef4728cd45&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0508d42ba886f1bc782cf679fe2412ee3c0c84b30e447010be6f3d68e475ae9?apiKey=7fd2b033b9574f39882fe9ef4728cd45&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0508d42ba886f1bc782cf679fe2412ee3c0c84b30e447010be6f3d68e475ae9?apiKey=7fd2b033b9574f39882fe9ef4728cd45&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0508d42ba886f1bc782cf679fe2412ee3c0c84b30e447010be6f3d68e475ae9?apiKey=7fd2b033b9574f39882fe9ef4728cd45&"
              className="self-stretch my-auto w-full shadow-sm aspect-[0.8]"
              alt="Descriptive alt text"
            />
          </div>
          <div className="flex flex-col w-6/12 max-md:w-full max-md:ml-0">
            <div className="flex flex-col grow px-11 py-7 w-full bg-white rounded-3xl shadow-2xl text-stone-950 max-md:px-5 max-md:mt-10">
              <div className="flex gap-5 justify-between text-4xl font-bold text-gray-600 leading-[55.5px]">
                <div className="text-[30px]"
                 style={{ 
                  fontFamily: 'Montserrat-Bold', 
                }}>
                  Just a little more ...
                </div>
                <a href="/">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc2205667538b7debf275b20d18ecf26649888f0f91e8a635a88297bbffff3b7?apiKey=7fd2b033b9574f39882fe9ef4728cd45&"
                    className="shrink-0 self-start aspect-square w-[23px]"
                    alt="Logo"
                  />
                </a>
              </div>
              <div className="text-lg text-gray-600 tracking-normal"
                style={{ 
                fontFamily: 'Montserrat-Regular', 
              }}>
                And we are ready for the journey!
              </div>
              <input
                className="mt-10 w-[392px] max-w-full px-3 py-3 bg-white rounded-xl border border-gray-600 text-black font-montserrat-light text-[15px] leading-normal"
                placeholder="First Name"
                aria-label="First Name"
                value={first_name}
                onChange={(e) => setfirst_name(e.target.value)}
              />
                <input
                className="mt-10 w-[392px] max-w-full px-3 py-3 bg-white rounded-xl border border-gray-600 text-black font-montserrat-light text-[15px] leading-normal"
                placeholder="Last Name"
                aria-label="Last Name"
                value={last_name}
                onChange={(e) => setlast_name(e.target.value)}
              />
              <input
                className="mt-10 w-[392px] max-w-full px-3 py-3 bg-white rounded-xl border border-gray-600 text-black font-montserrat-light text-[15px] leading-normal"
                placeholder="Age"
                aria-label="Age"
                value={age}
                onChange={(e) => setAge(parseInt(e.target.value))}
              />
                <div className="mt-4 font-montserrat-light text-[15px] leading-normal">
                    <p className="text-lg text-gray-600 tracking-normal mb-2"style={{ 
                        fontFamily: 'Montserrat-Bold', 
                    }}>Gender</p>
                    <div className="flex items-center text-[15px] text-gray-600 tracking-normal mt-3"style={{ 
                        fontFamily: 'Montserrat-Regular', 
                    }}>
                        <input 
                            type="radio" 
                            id="male" 
                            name="gender" 
                            value="male"
                            onChange={(e) => setGender(e.target.value)}
                        />
                        <label for="male" style={{ marginLeft: '10px' }}>Male</label><br/>
                    </div>
                    <div className="flex items-center text-[15px] text-gray-600 tracking-normal mt-4 mb-4" style={{ 
                        fontFamily: 'Montserrat-Regular', 
                    }}>
                        <input 
                            type="radio" 
                            id="female" 
                            name="gender" 
                            value="female"
                            onChange={(e) => setGender(e.target.value)}
                        />
                        <label for="female" style={{ marginLeft: '10px' }}>Female</label><br/>
                    </div>
                </div>
                <button
                    onClick={handleSubmit}
                    className="self-center w-[392px] mt-5 font-montserrat-bold text-[18px] justify-center px-10 py-4 text-sm font-bold tracking-wide leading-5 text-center text-white whitespace-nowrap bg-gray-600 rounded-md"
                >
                    Create account
                </button>
              <div className="mt-4 text-center text-sm text-gray-600">
                Sudah memiliki akun? <a href="/login" className="text-blue-500 underline">Login sekarang</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage2;
