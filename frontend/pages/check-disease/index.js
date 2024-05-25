import * as React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import Select from 'react-select';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = React.useRef(null);
  const [userName, setUserName] = useState('Loading...');

  const user_id = '65ee97ce710ef0b96a2945dd';

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await axios.get(`http://localhost:8080/api/user/one/${user_id}`);
      console.log(res.data);
      setUserName(res.data.first_name + ' ' + res.data.last_name);
    };

    fetchProfile();
  }, []);

  return (
    <header className="flex gap-5 justify-between px-8 py-8 w-full bg-white rounded-3xl border border-violet-100 border-solid shadow-sm max-md:flex-wrap max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between max-md:flex-wrap">
        <div className="flex gap-5 text-base font-semibold leading-4 text-slate-800">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/68da6a688c681255397e4803faf3e224b5e3efc978031ae58587884663116de1?apiKey=7fd2b033b9574f39882fe9ef4728cd45&"
            className="shrink-0 w-12 aspect-square"
            alt="DiCheck logo"
          />
          <div style={{ fontFamily: 'Montserrat-Bold', fontSize: '20px' }} className="my-auto">
            <a href="/homepage">DiCheck</a>
          </div>
          <div style={{ borderLeft: '3px solid #2d3748', height: '30px', alignSelf: 'center' }}></div>
          <div style={{ fontFamily: 'Montserrat-Regular', fontSize: '18 px', fontWeight: '400', letterSpacing: '1px' }} className="my-auto text-neutral-500">
            <p>Your trusted health partner</p>
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between text-sm font-medium leading-6 text-gray-900">
        <div className="flex gap-5 items-center relative">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce8d5aa1db4676e37cfcf9a2f7ba3403df6d0059eabeeede2fcad431e0ca6f66?apiKey=7fd2b033b9574f39882fe9ef4728cd45&"
            className="shrink-0 self-stretch w-12 aspect-square"
            alt="User Avatar"
          />
          <div style={{ fontFamily: 'Montserrat-Bold', fontSize: '15px' }} className="text-slate-800 self-stretch my-auto mr-8">
            <p>{userName}</p>
            <p className="text-neutral-500" style={{fontFamily: 'Montserrat-Light'}}>User</p>
          </div>
          <img
            onClick={toggleDropdown}
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b379a1a79b432ffb40cefb9ff99fce2f032432b8bf95d16c5d738eee5631724b?apiKey=7fd2b033b9574f39882fe9ef4728cd45&"
            className="shrink-0 self-stretch my-auto w-6 aspect-square cursor-pointer"
            alt="Dropdown Icon"
          />
          {isOpen && (
            <div style={{fontFamily: 'Montserrat-Semibold', top: '2em', right: '0'}} ref={dropdownRef} className="absolute w-48 py-2 mt-2 bg-white rounded-md shadow-xl">
              <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-slate-800 hover:text-white">Log Out</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

function MyComponent() {
    const userId = '65ee97ce710ef0b96a2945dd';

    const options = [
        { value: 'fever', label: 'Fever' },
        { value: 'cough', label: 'Cough' },
        { value: 'headache', label: 'Headache' },
        { value: 'soreThroat', label: 'Sore Throat' },
        { value: 'fatigue', label: 'Fatigue' },
        { value: 'shortnessOfBreath', label: 'Shortness of Breath' },
        { value: 'nausea', label: 'Nausea' },
        { value: 'vomiting', label: 'Vomiting' },
        { value: 'diarrhea', label: 'Diarrhea' },
        { value: 'musclePain', label: 'Muscle Pain' },
        // tambahkan lebih banyak opsi di sini jika diperlukan
      ];      
  
    return (
      <div className="p-10 bg-slate-50 max-md:px-5 w-full h-screen">
        <Navbar />
        <section className="px-8 py-8 mt-10 bg-white rounded-3xl border border-violet-100 border-solid shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="grid grid-cols-2 gap-5 max-md:flex-col max-md:gap-0" style={{ gridTemplateColumns: '1.5fr 2fr' }}>
            <div className="flex flex-col w-[100%] max-md:ml-0 max-md:w-full">
              <header className="flex grow gap-5 font-medium max-md:mt-5">
                <h2 style={{ fontFamily: 'Montserrat-Bold', fontSize: '25px' }} className="grow text-base leading-6 text-slate-800 w-fit">
                  Cek Sekarang
                </h2>
              </header>
              <p style={{ fontFamily: 'Montserrat-Regular', fontSize: '17px', fontWeight: '400' }} className="text-neutral-500 mt-5">Segera cek gejala dan berikan penanganan awal</p>
              <p style={{ fontFamily: 'Montserrat-Regular', fontSize: '17px', fontWeight: '400' }} className="text-neutral-500 mt-2">DiCheck siap membantu!</p>
            </div>
            <div className="flex flex-col items-end">
              <Link href="/check-disease">
                <button className="px-10 py-4 text-sm font-bold tracking-wide leading-5 text-center text-white hover:bg-gray-900 whitespace-nowrap bg-gray-600 rounded-md max-md:px-5 max-md:mt-10 max-md:max-w-full" style={{ fontFamily: 'Montserrat-Bold', alignSelf: 'center', marginTop: '20px' }}>
                  Check Now
                </button>
              </Link>
            </div>
          </div>
          <div className="py-10 grid grid-cols-1 gap-5 max-md:flex-col max-md:gap-0">
          <Select
            isMulti
            name="symptoms"
            options={options}
            className="basic-multi-select"
            classNamePrefix="select"
            placeholder="Pilih gejala yang Anda rasakan"
            styles={{
                option: (provided, state) => ({ // style opsi
                ...provided,
                fontFamily: 'Montserrat-Regular',
                fontSize: '17px',
                color: state.isSelected ? 'white' : 'black',
                backgroundColor: state.isSelected ? 'blue' : state.isFocused ? 'lightgray' : 'white',
                cursor: 'pointer'
                }),
                control: (provided) => ({
                ...provided,
                fontFamily: 'Montserrat-Regular',
                fontSize: '17px',
                }),
                multiValueLabel: (provided) => ({
                ...provided,
                fontFamily: 'Montserrat-Regular',
                fontSize: '17px'
                }),
            }}
            />
          </div>
        </section>
      </div>
    );
  }

export default MyComponent;