import Button1 from "@/components/Button/button1";
import * as React from "react";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginPage() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [user, setUser] = React.useState(null);

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/user/login', {
        username,
        password
      });
  
      if (response.data) {
        console.log('Login berhasil');
        setUser(response.data.User);
        toast.success('Login berhasil', {
          position: "top-center",
          autoClose: 1000
        });
        setTimeout(() => {
          window.location = '/homepage';
        }, 2000);
      }
    } catch (error) {
      console.error('Login gagal', error);
      toast.error('Password atau username salah', {
        position: "top-center",
        autoClose: 5000
      });
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center w-full px-4 py-14 bg-zinc-50">
      <ToastContainer />
      <div className="w-full max-w-[985px] flex flex-col md:flex-row gap-10 md:gap-20 items-center">
        <div className="flex flex-col w-full md:w-1/2">
          <div className="flex flex-col grow p-6 md:px-11 md:py-7 w-full bg-white rounded-3xl shadow-2xl text-stone-950">
            <div className="flex justify-between text-4xl font-bold text-gray-600 mb-6">
              <div className="font-montserrat-bold text-[40px]">Sign In</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc2205667538b7debf275b20d18ecf26649888f0f91e8a635a88297bbffff3b7?apiKey=7fd2b033b9574f39882fe9ef4728cd45&"
                className="shrink-0 self-start aspect-square w-[23px]"
                alt="Logo"
              />
            </div>
            <div className="font-montserrat-light text-lg text-gray-600 tracking-normal mb-6">
              Log in and check now!
            </div>
            <input
              className="mb-4 w-full px-3 py-3 bg-white rounded-xl border border-gray-600 text-black font-montserrat-light text-[15px] leading-normal"
              placeholder="Username"
              aria-label="Username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <input
              className="mb-4 w-full px-3 py-3 bg-white rounded-xl border border-gray-600 text-black font-montserrat-light text-[15px] leading-normal"
              type="password"
              placeholder="Password"
              aria-label="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <Button1
              className="self-center w-full md:w-[392px] mt-6 font-montserrat-bold text-[18px]"
              onClick={handleLogin}
            >
              Sign in
            </Button1>
          </div>
        </div>
        <div className="flex w-full md:w-1/2">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b0508d42ba886f1bc782cf679fe2412ee3c0c84b30e447010be6f3d68e475ae9?apiKey=7fd2b033b9574f39882fe9ef4728cd45&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0508d42ba886f1bc782cf679fe2412ee3c0c84b30e447010be6f3d68e475ae9?apiKey=7fd2b033b9574f39882fe9ef4728cd45&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0508d42ba886f1bc782cf679fe2412ee3c0c84b30e447010be6f3d68e475ae9?apiKey=7fd2b033b9574f39882fe9ef4728cd45&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0508d42ba886f1bc782cf679fe2412ee3c0c84b30e447010be6f3d68e475ae9?apiKey=7fd2b033b9574f39882fe9ef4728cd45&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0508d42ba886f1bc782cf679fe2412ee3c0c84b30e447010be6f3d68e475ae9?apiKey=7fd2b033b9574f39882fe9ef4728cd45&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0508d42ba886f1bc782cf679fe2412ee3c0c84b30e447010be6f3d68e475ae9?apiKey=7fd2b033b9574f39882fe9ef4728cd45&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0508d42ba886f1bc782cf679fe2412ee3c0c84b30e447010be6f3d68e475ae9?apiKey=7fd2b033b9574f39882fe9ef4728cd45&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0508d42ba886f1bc782cf679fe2412ee3c0c84b30e447010be6f3d68e475ae9?apiKey=7fd2b033b9574f39882fe9ef4728cd45&"
            className="self-stretch w-full shadow-sm aspect-[0.8] rounded-3xl"
            alt="Descriptive alt text"
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;