import Image from 'next/image';
import { useTheme } from 'next-themes';
import images from '../assets';
// eslint-disable-next-line import/no-cycle
import { Button } from '.';
// eslint-disable-next-line import/no-cycle
import Subscribe from './Subscribe';

const FooterLinks = ({ heading, items }) => (
  <div className="flex-1 justify-start items-start">
    <h3 className=" font-poppins dark:text-white text-nft-black-1 font-semibold text-xl mb-10 ">{heading}</h3>
    {items.map((item, index) => (
      <p key={index} className="font-poppins dark:text-white text-nft-black-1 font-normal text-base cursor-pointer dark:hover:text-nft-gray-1 hover:text-nft-black-1 my-3 ">{item}</p>
    ))}
  </div>
);

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="flexCenter flex-col border-t dark:border-nft-black-1 border-nft-gray-1 sm:py-8 py-16">
      <div className="w-full minmd:w-4/5 flex flex-row md:flex-col sm:px-4 px-16">
        <div className="flexStart flex-1 flex-col">
          <div className="flexCenter cursor-pointer">

            {/* <Image
              src={images.turing}
              objectFit="contain"
              width={50}
              height={50}
              alt="logo"
            /> */}
            {/* <p className="dark:text-white
             text-nft-black-1 font-semibold text-lg ml-1"
            >
              Turing Arte
            </p> */}
          </div>
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base mt-6">Stay up to date</p>
          <div>
            <Subscribe />
          </div>
        </div>
        <div className="flex-1 flexBetweenStart flex-wrap m1-10 md:ml-0 md:mt-8 ">
          <FooterLinks heading="Turing Arte" items={['Explore', 'whitepaper', 'Contact Us', 'Turing Dreams']} />
          <FooterLinks heading="Support" items={['Help Center', 'Terms of Service', 'Legal', 'Privacy Policy']} />
        </div>
      </div>

      <div className="flexCenter w-full mt-5 border-t dark:border-nft-black-1 border-nft-gray-1 sm:px-4 px-16">
        <div className="flexBetween flex-row w-full minmd:w-4/5 sm:flex-col mt-7">
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base">Turing Arte, All Rights Reserved. </p>
          <div className="flex flex-row sm:mt-4">
            {[images.twitter, images.telegram, images.discord].map((image, index) => (
              <div className="mx-2 cursor-pointer" key={index}>
                <Image
                  src={image}
                  objectFit="contain"
                  width={24}
                  height={24}
                  alt="social"
                  className={theme === 'light' && 'filter invert'}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
