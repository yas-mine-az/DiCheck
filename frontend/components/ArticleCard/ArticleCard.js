import * as React from 'react';
import Link from 'next/link';

function ArticleCard({ date, title, description, imgSrc, imgAlt, href, width }) {
  return (
    <article className={`flex flex-col ${width} max-md:ml-0 max-md:w-full`}>
    <Link href={href}>
          <img loading="lazy" src={imgSrc} alt={imgAlt} className="w-full aspect-[1.49] max-md:max-w-full" />
    </Link>
    <div className="flex gap-5 mt-8 max-md:flex-wrap">
      <img loading="lazy" src="/images/logo_admin.png" alt="Dicheck Admin Profile Image" className="shrink-0 aspect-square w-[50px]" />
      <p style={{ 
          fontFamily: 'Montserrat-Bold', 
          fontSize: '20px', 
      }} className="text-slate-800 flex-1 my-auto">Dicheck Admin</p>
    </div>
    <time style={{ 
          fontFamily: 'Montserrat-Bold', 
          fontSize: '15px', 
      }}
      className="flex gap-5 mt-7 leading-4 text-neutral-800 text-opacity-60 max-md:max-w-full">{date}</time>
      <Link href={href}>
        <h2 style={{ 
              fontFamily: 'Montserrat-Semibold', 
              fontSize: '20px', 
          }}
          className="mt-4 text-2xl font-regular leading-8 text-slate-800 max-md:max-w-full">{title}</h2>
    </Link>
    <p style={{ 
          fontFamily: 'Montserrat-Light', 
          fontSize: '17px', 
      }}
      className="mt-4 text-lg leading-6 text-stone-500 max-md:max-w-full">{description}</p>
  </article>
);
}

export default ArticleCard;