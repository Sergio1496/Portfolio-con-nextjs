import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import Image from "next/image";
import angeImage from "../public/angela-imagen.webp";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web2  from "../public/web2.webp";
import web1  from "../public/web1.webp";
import web3  from "../public/web3.webp";
import web4  from "../public/web4.webp";
import web5  from "../public/web5.webp";
import web6  from "../public/web6.webp";
import web7  from "../public/web7.webp";
import web8  from "../public/web8.webp";
import {useState} from 'react'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark": ""}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio creado con Next Js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-background">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between align-middle">
            <h1 className="text-xl font-burtons dark:text-white">Portfolio</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode)} className="cursor-pointer text-2xl text-textos2 dark:text-textos" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-textos2 to-textos2/90 dark:from-textos dark:to-textos/80 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Inicio
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-4xl text-textos2 font-medium md:text-6xl">Nombre</h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">Desarrollador - Diseñador</h3>
            <p className="text-base py-5 md:text-xl max-w-lg mx-auto dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-textos2 dark:text-textos">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillInstagram />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-pink-500 to-rose-400 rounded-full w-80 h-80 mt-20 overflow-hidden md:w-96 md:h-96">
            <Image src={angeImage} layout="fill" objectFit="cover" />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white font-semibold">Proyectos</h3>
            <p className="text-base leading-8 text-gray-800 dark:text-white font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              a aperiam quae quod, voluptate, quibusdam, voluptas quidem
              voluptatibus quos quia quas.{" "}
              <span className="text-fuchsia-500"> Quisquam</span> a aperiam quae
              quod, voluptate, quibusdam, voluptas{" "}
              <span className="text-fuchsia-500"> Quisquam</span> voluptatibus
              quos quia quas.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg dark:shadow-textos/30 p-10 rounded-xl my-10 dark:bg-tarjetas">
              <Image src={design} width={100} height={100} alt="diseño" />
              <h3 className="text-3xl font-medium pt-8 pb-2 dark:text-white">Diseños</h3>
              <p className="py-2 dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam
              </p>
              <h4 className="py-4 text-lg font-semibold text-textos2 dark:text-textos2">Programas que uso</h4>
              <p className="text-gray-800 py-1 dark:text-white">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-white">Illustrator</p>
              <p className="text-gray-800 py-1 dark:text-white">XD</p>
              <p className="text-gray-800 py-1 dark:text-white">Figma</p>
            </div>

            <div className="text-center shadow-lg dark:shadow-textos/30 p-10 rounded-xl my-10  dark:bg-tarjetas">
              <Image src={code} width={100} height={100} />
              <h3 className="text-2xl font-medium pt-8 pb-2 dark:text-white">Diseños</h3>
              <p className="py-2 dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam
              </p>
              <h4 className="py-4 text-lg font-semibold text-textos2 dark:text-textos2">Programas que uso</h4>
              <p className="text-gray-800 py-1 dark:text-white">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-white">Illustrator</p>
              <p className="text-gray-800 py-1 dark:text-white">XD</p>
              <p className="text-gray-800 py-1 dark:text-white">Figma</p>
            </div>

            <div className="text-center shadow-lg dark:shadow-textos/30 p-10 rounded-xl my-10  dark:bg-tarjetas">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-2xl font-medium pt-8 pb-2 dark:text-white">Diseños</h3>
              <p className="py-2 dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam
              </p>
              <h4 className="py-4 text-lg font-semibold text-textos2 dark:text-textos2">Programas que uso</h4>
              <p className="text-gray-800 py-1 dark:text-white">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-white">Illustrator</p>
              <p className="text-gray-800 py-1 dark:text-white">XD</p>
              <p className="text-gray-800 py-1 dark:text-white">Figma</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white font-semibold">Portfolio</h3>
            <p className="text-base leading-8 text-gray-800 dark:text-white font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              a aperiam quae quod, voluptate, quibusdam, voluptas quidem
              voluptatibus quos quia quas.
              <span className="text-textos2 font-semibold"> Quisquam</span> a aperiam quae
              quod, voluptate, quibusdam, voluptas
              <span className="text-textos2 font-semibold"> Quisquam</span> voluptatibus
              quos quia quas.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image src={web1} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web2} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web3} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web4} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web5} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web6} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web7} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web8} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-white px-10 md:px-20 lg:px-40 dark:bg-background">
        <div className="flex flex-col items-center justify-center py-10">
        <p className="dark:text-white">Copyright &copy; {new Date().getFullYear()} Sergio Expósito</p>
        </div>
      </footer>
    </div>
  );
}
