import * as React from "react";
import { useState, useEffect } from "react";
import ArticleCard from "@/components/ArticleCard/ArticleCard";
import Link from "next/link";
import axios from "axios";
import { useRouter } from 'next/router';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = React.useRef(null);

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
            <p>DiCheck</p>
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
            <p>Nama User</p>
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

function Card({ children }) {
  return (
    <section className="flex flex-col px-8 pt-8 pb-10 w-full text-xs font-medium leading-5 bg-white rounded-3xl border border-violet-100 border-solid shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
      {children}
    </section>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;

  try {
    const res = await axios.get(`http://localhost:8080/api/record/record/${id}`);
    const check = res.data;

    if (!check) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        check,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

function MyComponent() {
  const [checks, setChecks] = useState([]);
  const [totalChecks, setTotalChecks] = useState(0);
  const [totalChecksToday, setTotalChecksToday] = useState(0);
  const [lastCheckTime, setLastCheckTime] = useState(null);
  const router = useRouter();
  const { id } = router.query;
  const userId = '65ee97ce710ef0b96a2945dd';

  const [surprise, setSurprise] = useState(false);

  const handleClick = () => {
    setSurprise(true);
    setTimeout(() => setSurprise(false), 5000);
  };

  useEffect(() => {
    async function fetchChecks() {
      try {
        const response = await axios.get(`http://localhost:8080/api/record/record/${id}`);
        setChecks(response.data);
      } catch (error) {
        console.error('Error fetching check records:', error);
      }
    }

    fetchChecks();
  }, [id]);

  useEffect(() => {
    async function fetchTotalChecks() {
      try {
        const response = await axios.get(`http://localhost:8080/api/record/total/${userId}`);
        setTotalChecks(response.data.totalRecords);
      } catch (error) {
        console.error('Error fetching total checks today:', error);
      }
    }

    async function fetchTotalChecksToday() {
      try {
        const response = await axios.get(`http://localhost:8080/api/record/total_today/${userId}`);
        setTotalChecksToday(response.data.totalRecords);
      } catch (error) {
        console.error('Error fetching total checks today:', error);
      }
    }

    async function fetchLatestCheckTime() {
      try {
        const response = await axios.get(`http://localhost:8080/api/record/latest_record/${userId}`);
        setLastCheckTime(response.data.latestRecordTime);
      } catch (error) {
        console.error('Error fetching latest check time:', error);
      }
    }

    fetchTotalChecks();
    fetchTotalChecksToday();
    fetchLatestCheckTime();
  }, [userId]);

  const date = new Date(lastCheckTime);
  const formattedDate = date.toLocaleDateString('id-ID');

  return (
    <div className="flex flex-col p-10 bg-slate-50 max-md:px-5">
      <Navbar />
      <section className="px-8 py-8 mt-10 bg-white rounded-3xl border border-violet-100 border-solid shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="grid grid-cols-3 gap-5 max-md:flex-col max-md:gap-0" style={{ gridTemplateColumns: '1.5fr 1fr 2fr' }}>
          <div className="flex flex-col w-[100%] max-md:ml-0 max-md:w-full">
            <header className="flex grow gap-5 font-medium max-md:mt-5">
              <h2 style={{ fontFamily: 'Montserrat-Bold', fontSize: '25px' }} className="grow text-base leading-6 text-slate-800 w-fit">
                Cek Sekarang
              </h2>
            </header>
            <p style={{ fontFamily: 'Montserrat-Regular', fontSize: '17px', fontWeight: '400' }} className="text-neutral-500 mt-5">Segera cek gejala dan berikan penanganan awal</p>
            <p style={{ fontFamily: 'Montserrat-Regular', fontSize: '17px', fontWeight: '400' }} className="text-neutral-500 mt-2">DiCheck siap membantu!</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Link href="/check-disease">
              <button className="px-10 py-4 text-sm font-bold tracking-wide leading-5 text-center text-white hover:bg-gray-900 whitespace-nowrap bg-gray-600 rounded-md max-md:px-5 max-md:mt-10 max-md:max-w-full" style={{ fontFamily: 'Montserrat-Bold', alignSelf: 'center', marginTop: '20px' }}>
                Check Now
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-3 max-md:mt-5">
            <div className="box flex flex-col items-center justify-center">
              <p style={{ fontFamily: 'Montserrat-Semibold' }} className="mb-5 grow text-base leading-6 text-slate-800 w-fit text-sm md:text-base lg:text-lg xl:text-0.5xl">Total checks today</p>
              <p style={{ fontFamily: 'Montserrat-Light' }} className="grow leading-6 text-slate-800 w-fit text-1xl md:text-3xl lg:text-4xl xl:text-4xl">{totalChecksToday}</p>
            </div>
            <div className="box flex flex-col items-center justify-center">
              <p style={{ fontFamily: 'Montserrat-Semibold' }} className="mb-5 grow leading-6 text-slate-800 w-fit text-sm md:text-base lg:text-lg xl:text-0.5xl">Last check time</p>
              <p style={{ fontFamily: 'Montserrat-Light' }} className="grow leading-6 text-slate-800 w-fit text-1xl md:text-3xl lg:text-4xl xl:text-4xl">{formattedDate}</p>
            </div>
            <div className="box flex flex-col items-center justify-center">
              <p style={{ fontFamily: 'Montserrat-Semibold' }} className="mb-5 grow leading-6 text-slate-800 w-fit text-sm md:text-base lg:text-lg xl:text-0.5xl">Total checks</p>
              <p style={{ fontFamily: 'Montserrat-Light' }} className="grow leading-6 text-slate-800 w-fit text-1xl md:text-2xl lg:text-4xl xl:text-4xl">{totalChecks}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-10 max-md:max-w-full">
        <div className="grid gap-5 max-md:flex-col">
          {checks.length === 0 ? (
            <p>No checks found.</p>
          ) : (
            checks.map((check) => (
              <Card key={check._id} className="p-5 bg-white rounded-lg shadow-md">
                <header style={{ fontFamily: 'Montserrat-Bold', fontSize: '25px' }} className="mb-5 gap-5 pr-20 text-slate-800 font-semibold leading-6 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                  Detail Checks
                </header>
                <p style={{ fontFamily: 'Montserrat-Regular', fontSize: '17px', fontWeight: '400' }} className="mb-5 text-neutral-500">Berikut detail medical record yang kamu buat!</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="mb-2 font-bold text-gray-700 lg:text-lg xl:text-1xl" style={{ fontFamily: 'Montserrat-Bold' }}><u>Symptoms</u></p>
                    <ul className="ml-5 text-gray-600 lg:text-lg xl:text-0.5xl" style={{ fontFamily: 'Montserrat-Regular', listStyleType: 'square' }}>
                      {check.symptomps.map((symptom, index) => (
                        <li key={index}>{symptom}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2 font-bold text-gray-700 lg:text-lg xl:text-1xl" style={{ fontFamily: 'Montserrat-Bold' }}><u>Disease</u></p>
                    <p className="text-gray-600 lg:text-lg xl:text-3xl" style={{ fontFamily: 'Montserrat-Bold' }}>{check.disease}</p>
                  </div>
                  <div>
                    <p className="mb-2 font-bold text-gray-700 lg:text-lg xl:text-1xl" style={{ fontFamily: 'Montserrat-Bold' }}><u>Treatment Advice</u></p>
                    <ul className="ml-5 text-gray-600 lg:text-lg xl:text-0.5xl" style={{ fontFamily: 'Montserrat-Regular', listStyleType: 'square' }}>
                      {check.treatment_advice.map((treatment_advice, index) => (
                        <li key={index}>{treatment_advice}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2 font-bold text-gray-700 lg:text-lg xl:text-1xl" style={{ fontFamily: 'Montserrat-Bold' }}><u>Medicine Name</u></p>
                    <ul className="ml-5 text-gray-600 lg:text-lg xl:text-0.5xl" style={{ fontFamily: 'Montserrat-Regular', listStyleType: 'square' }}>
                      {check.medicine_name.map((medicine_name, index) => (
                        <li key={index}>{medicine_name}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="mt-5 mb-2 font-bold text-gray-700 lg:text-lg xl:text-1xl" style={{ fontFamily: 'Montserrat-Bold' }}><u>Keterangan</u></p>
                    <p className="text-gray-600 lg:text-lg xl:text-1xl text-gray-600" style={{ fontFamily: 'Montserrat-Regular' }}>
                      Kamu menerima detail check ini pada tanggal {new Date(check.record_date).toLocaleDateString('id-ID')} di pukul {new Date(check.record_date).toLocaleTimeString('id-ID')}
                    </p>
                  </div>
                  <div>
                    <p className="mt-5 mb-2 font-bold text-pink-500 lg:text-lg xl:text-1xl" style={{ fontFamily: 'Montserrat-Bold' }}><u>Love Message</u></p>
                    <p className="text-gray-600 lg:text-lg xl:text-1xl text-gray-600" style={{ fontFamily: 'Montserrat-Regular' }}>
                      <span role="img" aria-label="sparkling-heart">💖</span> Kami ada sedikit hadiah untuk kamu, diklik ya! <span role="img" aria-label="sparkling-heart">💖</span>
                    </p>
                    <button className="mt-2 px-4 py-2 text-white bg-pink-500 rounded hover:bg-pink-400" style={{ fontFamily: 'Montserrat-Bold' }} onClick={handleClick}>
                      Click for surprise
                    </button>

                    {surprise && (
                      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(255, 192, 203, 1.0)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 9999 }}>
                        <h1 style={{ fontFamily: 'Montserrat-Bold', color: 'white', fontSize: '5rem' }}>Semangat dan Cepat Sembuh!<span role="img" aria-label="sparkling-heart">💖</span></h1>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </section>
    </div>
  );
}

export default MyComponent;