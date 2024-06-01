import * as React from "react";
import Link from "next/link";
import Button1 from "@/components/Button/button1";

function Article({ date, title, content, images, authorImage, author }) {
    return (
        <article className="flex flex-col px-12 mt-8 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <h1 style={{ fontFamily: 'Montserrat-Bold' }} className="text-4xl font-bold text-gray-600 leading-[54.12px] max-md:max-w-full">{title}</h1>
            <div className="mt-9 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    {images.map((src, index) => (
                        <div key={index} className={`flex flex-col ${index !== 0 ? 'ml-5' : ''} w-[33%] max-md:ml-0 max-md:w-full`}>
                            <img loading="lazy" src={src} alt="" className="w-full aspect-[1.49] max-md:mt-9 max-md:max-w-full" />
                        </div>
                    ))}
                </div>
                <div className="flex flex-col grow text-base font-bold tracking-normal leading-6 text-stone-700 max-md:mt-9 max-md:max-w-full">
                    <div className="flex gap-5 mt-8 max-md:flex-wrap">
                        <img loading="lazy" src={authorImage} alt={`${author}`} className="shrink-0 aspect-square w-[50px]" />
                        <div style={{ fontFamily: 'Montserrat-Bold', fontSize: '20px' }} className="flex-1 my-auto">{author}</div>
                    </div>
                </div>
            </div>
            <time style={{ fontFamily: 'Montserrat-Bold', fontSize: '15px' }} className="mt-7 text-base font-medium leading-4 text-neutral-800 text-opacity-60 max-md:max-w-full">{date}</time>
            <section className="mt-8 text-lg font-medium leading-6 max-md:mr-1.5 max-md:max-w-full">
                {content.map((block, index) => {
                    if (typeof block === "string") {
                        return <p key={index} style={{ fontFamily: 'Montserrat-Medium', fontSize: '15px' }} className="text-stone-500 mb-4">{block}</p>;
                    }
                    if (block.type === "heading") {
                        return <h2 key={index} style={{ fontFamily: 'Montserrat-Bold', fontSize: '30px' }} className="text-2xl text-gray-600 font-bold mt-8 mb-8">{block.content}</h2>;
                    }
                    if (block.type === "list") {
                        return (
                            <div key={index} className="mb-4">
                                {block.items.map((item, itemIndex) => (
                                    <div key={itemIndex} className="mb-5">
                                        <h3 style={{ fontFamily: 'Montserrat-Bold', fontSize: '18px' }} className="text-gray-600 font-bold">{item.title}</h3>
                                        <p style={{ fontFamily: 'Montserrat-Medium', fontSize: '15px' }} className="mt-2 text-stone-500">{item.content}</p>
                                    </div>
                                ))}
                            </div>
                        );
                    }
                    return null;
                })}
            </section>
        </article>
    );
}

export default function MyComponent() {
    const articleContent = [
        "Kesehatan mental adalah aspek penting dari kesejahteraan kita yang seringkali terabaikan. Di tengah tuntutan hidup yang semakin tinggi dan tekanan dari berbagai sisi, menjaga kesehatan mental menjadi prioritas yang tidak boleh diabaikan. Salah satu cara efektif untuk menjaga dan meningkatkan kesehatan mental adalah melalui olahraga. Tidak hanya bermanfaat bagi tubuh, olahraga juga memiliki dampak positif yang signifikan terhadap pikiran dan emosi kita.",
        "Olahraga telah terbukti secara ilmiah dapat membantu mengurangi gejala depresi, kecemasan, dan stres. Saat kita berolahraga, tubuh kita memproduksi berbagai hormon dan neurotransmitter yang berperan dalam mengatur mood dan perasaan bahagia. Selain itu, aktivitas fisik juga membantu memperbaiki kualitas tidur dan meningkatkan energi, yang semuanya berkontribusi pada kesehatan mental yang lebih baik.",
        "Pentingnya olahraga bagi kesehatan mental semakin diakui oleh para ahli dan praktisi kesehatan. Mereka merekomendasikan agar olahraga menjadi bagian dari rutinitas harian kita. Dengan berolahraga secara teratur, kita tidak hanya menjaga kebugaran fisik, tetapi juga melindungi diri kita dari berbagai gangguan mental yang bisa timbul akibat stres dan tekanan hidup sehari-hari.",
        { type: "heading", content: "Manfaat Olahraga untuk Kesehatan Mental" },
        {
            type: "list",
            items: [
                { title: "1. Mengurangi Stres", content: "Olahraga membantu menurunkan tingkat kortisol, hormon stres dalam tubuh. Selain itu, olahraga meningkatkan produksi endorfin, yang dikenal sebagai hormon kebahagiaan, yang membantu kita merasa lebih rileks dan bahagia setelah berolahraga." },
                { title: "2. Meningkatkan Kualitas Tidur", content: "Aktivitas fisik yang teratur dapat membantu mengatur pola tidur dan meningkatkan kualitas tidur. Tidur yang cukup dan berkualitas sangat penting untuk kesehatan mental, karena membantu otak dan tubuh pulih dari aktivitas sehari-hari." },
                { title: "3. Meningkatkan Rasa Percaya Diri", content: "Olahraga secara rutin dapat membantu memperbaiki citra tubuh dan meningkatkan rasa percaya diri. Melihat perubahan positif pada tubuh kita, seperti peningkatan kekuatan atau penurunan berat badan, dapat memberikan dorongan besar pada harga diri kita." },
                { title: "4. Mengurangi Gejala Depresi dan Kecemasan", content: "Olahraga telah terbukti efektif dalam mengurangi gejala-gejala depresi dan kecemasan. Aktivitas fisik meningkatkan kadar neurotransmitter seperti serotonin dan norepinefrin, yang membantu mengatur mood dan perasaan." },
                { title: "5. Meningkatkan Fungsi Kognitif", content: "Olahraga tidak hanya bermanfaat bagi tubuh tetapi juga otak. Aktivitas fisik yang teratur dapat meningkatkan aliran darah ke otak, yang merangsang pertumbuhan sel-sel otak baru dan meningkatkan kemampuan kognitif seperti memori dan konsentrasi." }
            ]
        },
        { type: "heading", content: "Kesimpulan" },
        "Olahraga adalah salah satu intervensi paling efektif dan alami untuk menjaga kesehatan mental. Dengan manfaatnya yang beragam, mulai dari mengurangi stres hingga meningkatkan kualitas tidur, olahraga seharusnya menjadi bagian dari gaya hidup kita sehari-hari. Bahkan aktivitas fisik yang sederhana seperti berjalan kaki atau bersepeda dapat memberikan dampak positif yang signifikan bagi kesehatan mental kita.",
        "Selain manfaat fisiologis, olahraga juga memberikan kesempatan untuk bersosialisasi dan membangun hubungan sosial yang sehat. Bergabung dengan klub olahraga atau berpartisipasi dalam kegiatan fisik bersama teman dan keluarga dapat membantu mengurangi perasaan kesepian dan meningkatkan kesejahteraan emosional. Hubungan sosial yang positif sangat penting untuk kesehatan mental, karena memberikan dukungan dan rasa keterhubungan dengan orang lain.",
        "Secara keseluruhan, menjadikan olahraga sebagai rutinitas harian tidak hanya meningkatkan kesehatan fisik tetapi juga memperkuat kesehatan mental kita. Dengan banyaknya manfaat yang ditawarkan, tidak ada alasan untuk tidak mulai bergerak dan berolahraga. Mulailah dengan aktivitas yang paling Anda nikmati dan rasakan perbedaan positif dalam kehidupan sehari-hari Anda."
    ];

    return (
        <div className="flex flex-col pb-3 bg-white">
            <div style={{ fontFamily: 'Montserrat-Bold', fontSize: '20px' }} className="flex justify-end pl-20 py-9 w-full font-bold whitespace-nowrap bg-white max-w-full max-md:px-5 max-md:max-w-full">
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
            <main>
                <Article
                    date="04 June 2023"
                    title="Manfaat Olahraga Rutin untuk Kesehatan Mental"
                    images={[
                        "/images/olahraga_1.png",
                        "/images/olahraga_2.png",
                        "/images/olahraga_3.png",
                    ]}
                    authorImage="/images/logo_admin.png"
                    author="Dicheck Admin"
                    content={articleContent}
                />
            </main>
        </div>
    );
}
