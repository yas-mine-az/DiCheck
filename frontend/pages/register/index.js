import * as React from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RegisterPage() {
  const router = useRouter();
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleRegister = async (e) => {
    if (!username || !email || !password) {
      toast.error('Mohon isi seluruh data!', {
        position: "top-center",
        autoClose: 1000,
      });
      return;
    }
  
    if (password.length < 8) {
      toast.error('Password harus memiliki minimal 8 karakter!', {
        position: "top-center",
        autoClose: 1000,
      });
      return;
    }
  
    // Check if username exists
    const response = await fetch('http://localhost:8080/api/user/check_username', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    });
  
    const data = await response.json();
  
    if (data.message === 'Username sudah ada') {
      toast.error('Username sudah diambil!', {
        position: "top-center",
        autoClose: 1000,
      });
      return;
    }
  
    localStorage.setItem('registerData', JSON.stringify({ username, email, password }));
    router.push('/register-2');
  };

  return (
    <div className="min-h-screen flex justify-center items-center w-full px-16 py-14 bg-zinc-50 max-md:px-5">
      <div className="w-full max-w-[985px] max-md:max-w-full">
        <div className="flex gap-20 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:w-full max-md:ml-0 max-md:mt-10">
            <img
              loading="lazy"
              srcSet="/images/100w-2.png 100w, /images/200w-2.png 200w, /images/400w-2.png 400w, /images/800w-2.png 800w, /images/1200w-2.png 1200w, /images/1600w-2.png 1600w, /images/2000w-2.png 2000w, /images/fix-2.png"
              className="self-stretch my-auto w-full shadow-sm aspect-[0.8]"
              alt="Descriptive alt text"
            />
          </div>
          <div className="flex flex-col w-6/12 max-md:w-full max-md:ml-0">
            <div className="flex flex-col grow px-11 py-7 w-full bg-white rounded-3xl shadow-2xl text-stone-950 max-md:px-5 max-md:mt-10">
              <div className="flex gap-5 justify-between text-4xl font-bold text-gray-600 leading-[55.5px]">
                <div className="text-[40px]"
                 style={{ 
                  fontFamily: 'Montserrat-Bold', 
                }}>
                  Register Now
                </div>
                <a href="/">
                  <img
                    loading="lazy"
                    src="/images/close.svg"
                    className="shrink-0 self-start aspect-square w-[23px]"
                    alt="Logo"
                  />
                </a>
              </div>
              <div className="text-lg text-gray-600 tracking-normal"
                style={{ 
                fontFamily: 'Montserrat-Regular', 
              }}>
                Let us take part on your health takecare!
              </div>
              <input
                className="mt-10 w-[392px] max-w-full px-3 py-3 bg-white rounded-xl border border-gray-600 text-black font-montserrat-light text-[15px] leading-normal"
                style={{ fontFamily: 'Montserrat-Regular' }}
                placeholder="Username"
                aria-label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                className="mt-10 w-[392px] max-w-full px-3 py-3 bg-white rounded-xl border border-gray-600 text-black font-montserrat-light text-[15px] leading-normal"
                style={{ fontFamily: 'Montserrat-Regular' }}
                placeholder="Email"
                aria-label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="mt-10 w-[392px] max-w-full px-3 py-3 bg-white rounded-xl border border-gray-600 text-black font-montserrat-light text-[15px] leading-normal"
                style={{ fontFamily: 'Montserrat-Regular' }}
                type="password"
                placeholder="Password"
                aria-label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div style={{ fontFamily: 'Montserrat-Regular' }} className="mt-1 mb-6 text-gray-600 max-md:mr-2.5">
                8+ characters
              </div>
              <button onClick={handleRegister} style={{ fontFamily: 'Montserrat-Bold' }} className="hover:bg-gray-900 self-center w-[392px] mt-10 font-montserrat-bold text-[18px] justify-center px-10 py-4 text-sm font-bold tracking-wide leading-5 text-center text-white whitespace-nowrap bg-gray-600 rounded-md">
                Create account
              </button>
              <div style={{ fontFamily: 'Montserrat-Regular' }} className="mt-4 text-center text-sm text-gray-600">
                Sudah memiliki akun? <a href="/login" className="text-blue-500 underline">Login sekarang</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default RegisterPage;
