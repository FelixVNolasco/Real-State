import Image from 'next/image';
export const Footer = () => {
    return (
        <>
            <footer className="relative top-10 md:relative md:top-10 lg:top-10 xl:top-0 w-full h-26 bg-rose-200/60 rounded-t-md mt-2 justify-center">
                <div className="flex flex-col items-center">
                    <span className="mt-2 text-lg font-semibold bg-rose-300/90 p-2 rounded-lg">
                        Ana Vega - Asesora Inmobiliaria
                    </span>
                    <div className="flex flex-row w-48 justify-between mb-2 mt-4">
                        <a
                            href="https://github.com/FelixVNolasco"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-100/90 p-2 rounded-lg transition ease-in-out duration-300 hover:-translate-y-2 cursor-pointer"
                        >
                            <Image src={"https://www.svgrepo.com/show/452229/instagram-1.svg"} width={24} height={24} alt='' />
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-100/90 p-2 rounded-lg transition ease-in-out duration-300 hover:-translate-y-2 "
                        >
                            <Image src={"https://www.svgrepo.com/show/475647/facebook-color.svg"} width={24} height={24} alt='' />
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-100/90 p-2 rounded-lg transition ease-in-out duration-300 hover:-translate-y-2 "
                        >
                            <Image src={"https://www.svgrepo.com/show/473806/tiktok.svg"} width={24} height={24} alt='' />
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-100/90 p-2 rounded-lg transition ease-in-out duration-300 hover:-translate-y-2 "
                        >
                            <Image src={"https://www.svgrepo.com/show/475692/whatsapp-color.svg"} width={24} height={24} alt='' />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
};