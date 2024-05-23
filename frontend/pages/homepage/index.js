import * as React from "react";

function CardContainer({ children }) {
  return (
    <section className="flex flex-col px-7 pt-4 pb-7 rounded-xl border border-gray-100 border-solid bg-neutral-50 max-md:px-5 max-md:max-w-full">
      {children}
    </section>
  );
}

function VerticalCard({ cards }) {
  return (
    <aside className="flex flex-col justify-end px-4 pt-16 w-full rounded-xl border border-gray-100 border-solid shadow-xl bg-neutral-50 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
      {cards.map((card, index) => (
        <div key={index} className="shrink-0 mt-1 border-b border-gray-100 border-solid h-[81px] max-md:max-w-full" />
      ))}
    </aside>
  );
}

export default function MyComponent() {
  const cardPlaceholders = Array(8).fill(null);

  return (
    <main className="flex flex-col items-center pb-9 bg-gray-100">
      <header className="shrink-0 self-stretch w-full border-b border-gray-100 border-solid bg-neutral-50 h-[65px] max-md:mr-1.5" />
      <h1 className="mt-7 text-4xl font-bold text-sky-950 max-md:max-w-full">
        <span className=" text-sky-950">Welcome</span>{" "}
        <span className="text-sky-950">Dr. Doe!</span>
      </h1>
      <div className="mt-6 w-full max-w-[1393px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <section className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
              <CardContainer>
                <div className="shrink-0 rounded-xl bg-neutral-50 h-[267px] max-md:max-w-full" />
              </CardContainer>
              <div className="shrink-0 mt-11 rounded-xl border border-gray-100 border-solid shadow-lg bg-neutral-50 h-[467px] max-md:mt-10 max-md:max-w-full" />
            </div>
          </section>
          <section className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
            <VerticalCard cards={cardPlaceholders} />
          </section>
        </div>
      </div>
    </main>
  );
}