import '../styles/globals.css'
import Button1 from '../components/Button/button1';
import Button2 from '../components/Button/button2';
import Heading from '../components/Heading/heading';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="flex flex-col bg-white">
      <Heading />
      <div className="justify-end pl-20 w-full bg-white max-md:pl-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col justify-center self-stretch pr-8 my-auto font-bold tracking-wide leading-[150%] max-md:mt-10 max-md:max-w-full">
              <div 
                style={{ 
                  fontFamily: 'Montserrat-Semibold', 
                  fontSize: '20px', 
                  fontWeight: '400',
                  letterSpacing: '0.01em' 
                }}
                className="text-base tracking-normal text-gray-600 max-md:max-w-full">
                Welcome
              </div>
              <div
                style={{ 
                  fontFamily: 'Montserrat-Bold', 
                }} 
                className="mt-6 text-7xl leading-[80px] text-slate-800 max-md:max-w-full max-md:text-4xl max-md:leading-[62px]"
              >
                A Great Place to Receive Care
              </div>
              <div 
                style={{ 
                  fontFamily: 'Montserrat-Regular', 
                  fontSize: '20px', 
                  fontWeight: '400',
                  letterSpacing: '0.01em' 
                }} 
                className="mt-8 text-neutral-500 max-md:max-w-full"
              >
                Get diagnosed or search for health articles now!
              </div>
              <div className="flex gap-2.5 self-start mt-8 text-sm leading-5 text-center">
                <Link href='/check-disease'>
                  <Button1>
                    Check
                  </Button1>
                </Link>
                <Link href='/articles'>
                  <Button2>
                    Read Articles
                  </Button2>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-40 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center items-start pt-16 w-full bg-white max-md:mt-8 max-md:max-w-full">
              <img
                loading="lazy"
                srcSet="/images/100w.png 100w, /images/200w.png 200w, /images/400w.png 400w, /images/800w.png 800w, /images/1200w.png 1200w, /images/1600w.png 1600w, /images/2000w.png 2000w, /images/fix.png"
                className="max-w-full aspect-[0.93] w-[543.5px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}