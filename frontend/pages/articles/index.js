import * as React from "react";
import Link from "next/link";
import Button1 from "@/components/Button/button1";
import ArticleCard from "@/components/ArticleCard/ArticleCard";

function MyComponent() {
  return (
    <div className="flex flex-col pb-16 bg-white">
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
                <Link href="/check-disease">
                    <Button1>
                        Check now
                    </Button1>
                </Link>
                </div>
            </div>
        </div>
      <main className="flex flex-col px-14 mt-5 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <h2 
        style={{ 
            fontFamily: 'Montserrat-Bold', 
        }} className="text-5xl font-bold text-slate-800 leading-[61.2px] max-md:max-w-full max-md:text-4xl">
          Medical Article
        </h2>
        <section className="mt-10 flex flex-wrap justify-between max-md:max-w-full">
            <div className="flex flex-wrap justify-between gap-5 max-md:flex-col max-md:gap-0">
                <ArticleCard
                date="04 June 2023"
                title="Manfaat Olahraga Rutin untuk Kesehatan Mental"
                description="Olahraga tidak hanya penting untuk kesehatan fisik, tetapi juga memiliki banyak manfaat untuk kesehatan mental."
                imgSrc="/images/olahraga_2.png"
                imgAlt="Manfaat Olahraga Rutin untuk Kesehatan Mental"
                href="/articles/article-1"
                width="w-[30%]"
                />
                <ArticleCard
                date="03 June 2023"
                title="Pentingnya Vaksinasi dalam Mencegah Penyakit Menular"
                description="Vaksinasi adalah salah satu intervensi kesehatan masyarakat yang paling efektif dalam mencegah penyebaran penyakit menular."
                imgSrc="/images/vaksin_2.png"
                imgAlt="Pentingnya Vaksinasi dalam Mencegah Penyakit Menular"
                href="/articles/article-2"
                width="w-[30%]"
                />
                <ArticleCard
                date="01 June 2023"
                title="Pentingnya Pola Makan Sehat untuk Mencegah Penyakit Kronis"
                description="Pola makan sehat adalah kunci untuk mencegah berbagai penyakit kronis seperti diabetes, penyakit jantung, dan kanker."
                imgSrc="/images/food_2.png"
                imgAlt="Pentingnya Pola Makan Sehat untuk Mencegah Penyakit Kronis"
                href="/articles/article-3"
                width="w-[30%]"
                />
            </div>
            </section>
      </main>
    </div>
  );
}

export default MyComponent;