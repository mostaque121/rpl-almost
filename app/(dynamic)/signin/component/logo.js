import Image from 'next/image';

const Logo = () => {
    return (
        <div className=' w-52 relative'>
            <Image src={'/logo.png'} alt='logo' width={200} height={50} ></Image>
        </div>
    );
};

export default Logo;