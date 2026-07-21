import { Link } from "@tanstack/react-router";

const Footer = () => {

    return (
        <div className={'flex justify-between items-center font-louis mx-10 mb-5'}>
            <div className={'p-5'}>
                <span className={'tracking-widest text-xl'}>2 0 2 6</span>
                <span className={'mx-4 text-2xl'}>/</span>
                <span className={'tracking-widest text-xl'}>R A i N B O W C i P H E R</span>
            </div>
            <Link to={'/about'}>
                <div className={'text-xl tracking-widest transition-transform duration-500 hover:transition-transform hover:scale-110 hover:ease-in-out hover:duration-300'}>
                    About R A i N B O W C i P H E R
                </div>
            </Link>
        </div>
    )
}

export default Footer;
