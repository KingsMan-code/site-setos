"use client";

import "./home.css";

export default function Home() {
  return (
    <div className="font-manrope font-normal bg-[var(--background)] text-[var(--text)] px-[10%] flex flex-col items-center h-screen overflow-hidden">
      <nav className="flex flex-row items-center gap-8 text-[var(--textDim)] w-full box-border z-[9999] max-[1000px]:justify-between">
        <p className="font-bold">CoolSite</p>
        <p className="hover:text-[var(--text)] cursor-pointer max-[1000px]:hidden">Services</p>
        <p className="hover:text-[var(--text)] cursor-pointer max-[1000px]:hidden">Pricing</p>
        <p className="hover:text-[var(--text)] cursor-pointer max-[1000px]:hidden">Features</p>
        <p className="hover:text-[var(--text)] cursor-pointer max-[1000px]:hidden">About us</p>
        <svg className="hidden fill-[var(--text)] max-[1000px]:flex items-center" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 9H5c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zM5 15h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1z"/></svg>
      </nav>

      <div className="absolute h-full w-full flex items-center justify-center self-center z-[-1]">
        <svg className="relative z-[1] h-[80%] w-[80%]" xmlns="http://www.w3.org/2000/svg" width="982" height="786" viewBox="0 0 982 786" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M490 401V537H348.5V401H490ZM490 785.5V676H348.5V785.5H347.5V676H206V785.5H205V676H63.5V785.5H62.5V676H0V675H62.5V538H0V537H62.5V401H0V400H62.5V258H0V257H62.5V116H0V115H62.5V0H63.5V115L205 115V0H206V115L347.5 115V0H348.5V115H490V0H491V115L627.5 115V0H628.5V115H765V0H766V115L902.5 115V0H903.5V115H982V116H903.5V257H982V258H903.5V400H982V401H903.5V537H982V538H903.5V675H982V676H903.5V785.5H902.5V676H766V785.5H765V676H628.5V785.5H627.5V676H491V785.5H490ZM902.5 675V538H766V675H902.5ZM902.5 537V401H766V537H902.5ZM902.5 400V258H766V400H902.5ZM902.5 257V116L766 116V257H902.5ZM627.5 675H491V538H627.5V675ZM765 675H628.5V538H765V675ZM348.5 675H490V538H348.5V675ZM347.5 538V675H206V538H347.5ZM205 538V675H63.5V538H205ZM765 537V401H628.5V537H765ZM765 400V258H628.5V400H765ZM765 257V116H628.5V257H765ZM347.5 401V537H206V401H347.5ZM205 401V537H63.5V401H205ZM627.5 401V537H491V401H627.5ZM627.5 116L491 116V257H627.5V116ZM627.5 258H491V400H627.5V258ZM63.5 257V116L205 116V257H63.5ZM63.5 400V258H205V400H63.5ZM206 116V257H347.5V116L206 116ZM348.5 116V257H490V116H348.5ZM206 400V258H347.5V400H206ZM348.5 258V400H490V258H348.5Z" fill="url(#paint0_radial_1_8)" />
          <defs>
            <radialGradient id="paint0_radial_1_8" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(491 392.75) rotate(90) scale(513.25 679.989)">
              <stop stopColor="white" stopOpacity="0.2" />
              <stop offset="1" stopColor="#000" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
        <div className="absolute h-48 w-48 bg-[var(--primary)] blur-[100px] rounded-[100px] z-0"></div>
      </div>

      <div className="absolute flex flex-col justify-center self-center h-full text-[10rem] font-bold tracking-[-0.8rem] z-[1000] max-[1000px]:text-[4rem]">
        <p className="m-0 leading-[10rem] self-start w-auto max-[1000px]:leading-[5rem] max-[1000px]:tracking-[-0.3rem]">Powerful</p>
        <p className="m-0 leading-[10rem] self-end w-auto text-[var(--primary)] max-[1000px]:leading-[5rem] max-[1000px]:tracking-[-0.3rem]">UI Design</p>
        <p className="m-0 leading-[10rem] self-end w-auto max-[1000px]:leading-[5rem] max-[1000px]:tracking-[-0.3rem]">Tool</p>
      </div>

      <a
        href="https://dribbble.com/shots/23181733-Blurry-Glassmorphic-Modern-Landing-page"
        target="_blank"
        className="group absolute top-[12%] right-[20%] flex flex-col justify-center items-center h-[50px] w-[160px] no-underline text-inherit cursor-pointer z-[9999]"
      >
        <button className="clip-path-custom absolute h-[50px] w-[160px] border-none rounded-[13px] bg-[var(--primaryBg)] shadow-[0px_-3px_15px_0px_var(--primaryHi)_inset] text-[var(--primaryFg)] text-[1rem] flex flex-col justify-center items-center transition-all group-hover:translate-y-[5px]">
          View Source
        </button>
        <span className="absolute bottom-[-50%] w-[100px] h-[60px] bg-[var(--primaryHi)] rounded-full blur-[20px] transition-all group-hover:opacity-60"></span>
      </a>

      <a
        href="https://youtu.be/1pW_sk-2y40"
        target="_blank"
        className="group absolute bottom-[13%] right-[11%] flex flex-col justify-center items-center h-[50px] w-[160px] no-underline text-inherit cursor-pointer z-[9999]"
      >
        <button className="clip-path-custom absolute h-[50px] w-[160px] border-none rounded-[13px] bg-[var(--accentBg)] shadow-[0px_-3px_15px_0px_var(--accentHi)_inset] text-[var(--accentFg)] text-[1rem] flex flex-col justify-center items-center transition-all group-hover:translate-y-[5px]">
          Watch Video
        </button>
        <span className="absolute bottom-[-50%] w-[100px] h-[60px] bg-[var(--accentHi)] rounded-full blur-[20px] transition-all group-hover:opacity-60"></span>
      </a>

      <a
        href="https://x.com/juxtopposed"
        target="_blank"
        className="group absolute bottom-[25%] left-[15%] flex flex-col justify-center items-center h-[50px] w-[160px] no-underline text-inherit cursor-pointer z-[9999]"
      >
        <button className="clip-path-custom absolute h-[50px] w-[160px] border-none rounded-[13px] bg-[var(--secondaryBg)] shadow-[0px_-3px_15px_0px_var(--secondary)_inset] text-[var(--secondaryFg)] text-[1rem] flex flex-col justify-center items-center transition-all group-hover:translate-y-[5px]">
          Connect
        </button>
        <span className="absolute bottom-[-50%] w-[100px] h-[60px] bg-[var(--secondaryHi)] rounded-full blur-[20px] transition-all group-hover:opacity-60"></span>
      </a>

      <svg className="absolute top-0 right-0 z-[-1] opacity-50" width="219" height="147" viewBox="0 0 219 147" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect opacity="0.18" x="10.4252" y="75.8326" width="7.50168" height="7.50168" transform="rotate(110.283 10.4252 75.8326)" fill="#686868" stroke="white" strokeWidth="1.22683" />
        <rect opacity="0.18" x="180.869" y="138.825" width="7.50168" height="7.50168" transform="rotate(110.283 180.869 138.825)" fill="#686868" stroke="white" strokeWidth="1.22683" />
        <rect x="69.4713" y="-91.84" width="180.485" height="180.485" transform="rotate(20.2832 69.4713 -91.84)" stroke="white" strokeOpacity="0.1" strokeWidth="1.22683" />
      </svg>

      <svg className="absolute bottom-0 left-0 z-[-1] opacity-50" width="232" height="191" viewBox="0 0 232 191" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50.5685" cy="172.432" r="112.068" stroke="white" strokeOpacity="0.09" />
        <g opacity="0.1">
          <path d="M26.4932 5.20547L228.856 172.432" stroke="#D9D9D9" />
          <rect x="22.4384" y="0.5" width="6.15753" height="6.15753" fill="#686868" stroke="white" />
          <rect x="224.801" y="169.027" width="6.15753" height="6.15753" fill="#686868" stroke="white" />
          <circle cx="121.819" cy="83.613" r="1.7774" fill="#323232" stroke="white" />
        </g>
      </svg>

    </div>
  );
}

