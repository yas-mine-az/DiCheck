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
        "Pola makan sehat adalah fondasi penting dalam menjaga kesehatan dan mencegah berbagai penyakit kronis. Di era modern ini, gaya hidup yang serba cepat sering kali membuat banyak orang mengabaikan pentingnya makanan bergizi. Makanan cepat saji dan camilan tinggi gula serta lemak jenuh menjadi pilihan utama bagi banyak individu yang sibuk, tanpa menyadari dampak negatif jangka panjang yang ditimbulkannya.",
        "Penyakit kronis seperti diabetes, penyakit jantung, dan hipertensi semakin meningkat dan menjadi masalah kesehatan global. Penyakit-penyakit ini tidak hanya mengurangi kualitas hidup tetapi juga meningkatkan beban ekonomi dan sosial. Meskipun faktor genetik dan lingkungan memainkan peran dalam perkembangan penyakit kronis, pola makan yang tidak sehat merupakan salah satu kontributor utama yang dapat diubah.",
        "Mengadopsi pola makan sehat bukan hanya tentang menghindari makanan yang tidak sehat, tetapi juga tentang memastikan tubuh mendapatkan nutrisi yang dibutuhkan untuk berfungsi optimal. Nutrisi yang tepat dapat memperkuat sistem kekebalan tubuh, menjaga berat badan ideal, dan meningkatkan energi serta mood secara keseluruhan. Oleh karena itu, pemahaman dan penerapan pola makan sehat sangat penting dalam upaya pencegahan penyakit kronis.",
        "Kesadaran akan pentingnya pola makan sehat perlu ditingkatkan melalui edukasi dan kampanye kesehatan. Masyarakat harus diberi informasi yang akurat mengenai manfaat makanan bergizi dan cara mengintegrasikannya dalam kehidupan sehari-hari. Dengan pengetahuan yang cukup, setiap individu dapat membuat keputusan yang lebih baik terkait pilihan makanan dan gaya hidup.",
        { type: "heading", content: "Alasan Pentingnya Pola Makan Sehat" },
        {
            type: "list",
            items: [
                { title: "1. Mencegah Penyakit Jantung", content: "Pola makan sehat yang kaya akan serat, buah-buahan, sayuran, dan lemak sehat dapat mengurangi risiko penyakit jantung. Makanan seperti kacang-kacangan, ikan, dan biji-bijian mengandung asam lemak omega-3 yang membantu menjaga kesehatan jantung dengan menurunkan kadar kolesterol dan tekanan darah." },
                { title: "2. Mengontrol Berat Badan", content: "Pola makan yang seimbang membantu menjaga berat badan ideal, yang merupakan faktor penting dalam pencegahan penyakit kronis. Obesitas adalah salah satu penyebab utama berbagai penyakit kronis, termasuk diabetes tipe 2 dan hipertensi. Dengan mengonsumsi makanan bergizi dan menghindari makanan tinggi kalori serta rendah nutrisi, kita dapat menjaga berat badan tetap stabil." },
                { title: "3. Menurunkan Risiko Diabetes", content: "Pola makan yang kaya akan serat dan rendah gula dapat membantu mengontrol kadar gula darah. Makanan seperti biji-bijian utuh, sayuran hijau, dan buah-buahan segar memiliki indeks glikemik rendah yang membantu mencegah lonjakan gula darah. Diet yang seimbang dapat mengurangi risiko perkembangan diabetes tipe 2 dan membantu mengelola kondisi bagi mereka yang sudah terdiagnosis." }
            ]
        },
        { type: "heading", content: "Kesimpulan" },
        "Mengadopsi pola makan sehat adalah langkah penting dalam mencegah berbagai penyakit kronis yang semakin umum di masyarakat modern. Dengan memahami dan menerapkan pola makan yang seimbang, kita dapat menjaga kesehatan jangka panjang dan meningkatkan kualitas hidup. Ini bukan hanya tentang menghindari makanan yang tidak sehat, tetapi juga memastikan bahwa tubuh mendapatkan nutrisi yang dibutuhkan untuk berfungsi dengan baik.",
        "Selain itu, pola makan sehat juga memiliki dampak positif pada kesejahteraan mental. Nutrisi yang baik membantu menjaga fungsi otak yang optimal, meningkatkan mood, dan mengurangi risiko gangguan mental seperti depresi dan kecemasan. Kesehatan mental yang baik, pada gilirannya, mendukung kemampuan kita untuk menjalani gaya hidup sehat secara keseluruhan.",
        "Implementasi pola makan sehat juga memerlukan dukungan dari berbagai pihak, termasuk keluarga, komunitas, dan pemerintah. Kampanye edukasi dan program kesehatan yang mempromosikan pola makan seimbang harus digalakkan. Sekolah dan tempat kerja dapat menyediakan pilihan makanan sehat, sementara pemerintah dapat memberikan insentif untuk produksi dan distribusi makanan bergizi.",
        "Secara keseluruhan, pola makan sehat adalah investasi terbaik untuk masa depan. Dengan memperhatikan apa yang kita konsumsi, kita tidak hanya melindungi diri dari penyakit kronis tetapi juga memastikan bahwa kita dapat menikmati kehidupan dengan penuh energi dan vitalitas. Mulailah dengan langkah-langkah kecil, seperti mengurangi konsumsi gula dan garam, serta memperbanyak asupan sayuran dan buah-buahan. Dengan konsistensi dan komitmen, kita dapat mencapai kesehatan optimal dan kesejahteraan jangka panjang."
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
                    date="30 Januari 2024"
                    title="Pentingnya Pola Makan Sehat untuk Mencegah Penyakit Kronis"
                    images={[
                        "/images/food_1.png",
                        "/images/food_2.png",
                        "/images/food_3.png"
                    ]}
                    authorImage="/images/logo_admin.png"
                    author="Dicheck Admin"
                    content={articleContent}
                />
            </main>
        </div>
    );
}
