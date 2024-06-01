import Button1 from '../Button/button1';
import Link from 'next/link';

function Heading() {
    return (
    <div 
    style={{ 
        fontFamily: 'Montserrat-Bold', 
        fontSize: '20px', 
      }}
      className="flex justify-end pl-20 py-9 w-full font-bold whitespace-nowrap bg-white max-w-full max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between w-full max-w-full max-md:flex-wrap max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-wrap max-md:max-w-full">
            <Link href="/">
                <div className="flex-auto text-3xl tracking-normal leading-8 text-slate-800 mr-10">
                    DiCheck
                </div>
            </Link>
            <div className="flex flex-auto gap-10 justify-start self-start text-sm tracking-wide leading-6 text-center text-neutral-500">
                <Link href="/homepage"> <button className="justify-center py-2">Home</button> </Link>
                <Link href="/check-disease"> <button className="justify-center px-1.5 py-2">Check</button> </Link>
                <Link href="/articles"> <button className="justify-center py-2">Articles</button> </Link>
            </div>
            </div>
            <div className="mr-40">
            <Link href="/login">
                <Button1>
                    Login
                </Button1>
            </Link>
            </div>
        </div>
    </div>
    );
}

export default Heading;