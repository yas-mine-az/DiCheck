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
        localStorage.setItem('user', JSON.stringify(response.data.User));
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
              <a href="/">
                <img
                  loading="lazy"
                  src="/images/close.svg"
                  className="shrink-0 self-start aspect-square w-[23px]"
                  alt="Logo"
                />
              </a>
            </div>
            <div className="font-montserrat-light text-lg text-gray-600 tracking-normal mb-6">
              Log in and check now!
            </div>
            <input
              className="mb-4 w-full px-3 py-3 bg-white rounded-xl border border-gray-600 text-black font-montserrat-light text-[15px] leading-normal"
              style={{ fontFamily: 'Montserrat-Regular' }}
              placeholder="Username"
              aria-label="Username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <input
              className="mb-4 w-full px-3 py-3 bg-white rounded-xl border border-gray-600 text-black font-montserrat-light text-[15px] leading-normal"
              style={{ fontFamily: 'Montserrat-Regular' }}
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
            <div style={{ fontFamily: 'Montserrat-Regular' }} className="mt-4 text-center text-sm text-gray-600">
              Belum memiliki akun? <a href="/register" className="text-blue-500 underline">Daftar sekarang</a>
            </div>
          </div>
        </div>
        <div className="flex w-full md:w-1/2">
          <img
            loading="lazy"
            srcSet="/images/100w-2.png 100w, /images/200w-2.png 200w, /images/400w-2.png 400w, /images/800w-2.png 800w, /images/1200w-2.png 1200w, /images/1600w-2.png 1600w, /images/2000w-2.png 2000w, /images/fix-2.png"
            className="self-stretch w-full shadow-sm aspect-[0.8] rounded-3xl"
            alt="Descriptive alt text"
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;