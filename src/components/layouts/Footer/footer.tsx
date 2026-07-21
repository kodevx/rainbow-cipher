import { Link } from "@tanstack/react-router";

const Footer = () => {

    return (
        <div className={'sm:flex-col md:flex-row lg:flex xl:flex-row justify-between items-center font-louis mx-5 lg:mx-32 xl:mx-10 mb-2 xl:mb-5'}>
            <div className={'flex justify-center items-center'}>
                <div className={'p-2 xl:p-5'}>
                    <span className={'tracking-widest text-lg xl:text-xl'}>2 0 2 6</span>
                    <span className={'mx-2 xl:mx-4 text-xl xl:text-2xl'}>/</span>
                    <span className={'tracking-widest text-lg xl:text-xl'}>R A i N B O W C i P H E R</span>
                </div>
            </div>
            <div className={'flex justify-center items-center'}>
                <Link to={'/about'}>
                    <div className={'mt-5 lg:mt-0 text-xl tracking-widest transition-transform duration-500 hover:transition-transform hover:scale-110 hover:ease-in-out hover:duration-300'}>
                        About R A i N B O W C i P H E R
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Footer;
