import Image from "next/image";
import bgPicture from "../public/bg-picture.jpeg"

export default function HeroSection1() {
  return (
    <div className="bg-gray-900">
      <div className="relative isolate overflow-hidden">
        <Image
          src={bgPicture}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-fill opacity-30"
        />
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
          <svg
            className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
          >
            <path
              fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
              fillOpacity=".2"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9089FC" />
                <stop offset={1} stopColor="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="mx-auto max-w-3xl h-5/6 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Explorando o mercado de índice futuro
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              Apresentamos um conjunto de indicadores desenvolvidos pela MAT - Market Analytic Trading,
              e afirmamos, mais está por vir. Cadastra-se e ganhe uma oferta de lançamento irrecusável.
              É uma maneira de retribuir a confiança de todos que acompanham a nossa jornada desde a sua ideação.
              E lembrando, há indicadores poderosos em desenvolvimento!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#submit-email"
                className="rounded-md w-96 bg-emerald-700 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
              >
                Quero adquirir o MAT
              </a>
              <a href="#features" className="text-md font-semibold leading-6 text-white">
                Saiba mais <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
