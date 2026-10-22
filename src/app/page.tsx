import Image from 'next/image';

import { Page } from '../components/Page';
import { ReactNode } from 'react';

import clsx from 'clsx';
import LogoSrc from '../app/icon.svg';
import TranscribeeScreenshotSrc from '../assets/transcribee-desktop.png';
import AudapolisScreenshotSrc from '../assets/audapolis.png';
import Link from 'next/link';


export default function HomePage() {
  return (
    <Page>
      <Hero />
      <Block heading={"transcribee"} image={<Image src={TranscribeeScreenshotSrc} alt={"A screenshot of transcribee."} />}>
        <p className="text-lg leading-6 mb-6 text-left">transcribee is an open source tool for automatic transcriptions with word-level time alignment and collaborative editing.</p>
        <p className="text-lg leading-6 mb-6 text-left">Perfect for interviews, podcasts, video subtitles or voice recordings.</p>
        <Link
          href="https://about.transcribee.net"
          className="inline-block bg-black hover:bg-gray-700 text-white px-4 py-2 rounded-md mb-2 mr-2"
        >
          Learn More →
        </Link>
      </Block>
      <Block heading={"Audapolis"} image={<Image className="shadow-[0_0_30px_-3px_rgba(0,0,0,0.3)] w-full max-w-[600px]" src={AudapolisScreenshotSrc} alt={"A screenshot of audapolis."} />} imageOnRight>
        <p className="text-lg leading-6 mb-6 text-left">Audapolis is an open source tool for cutting audio and video with support of a transcript of what was said.</p>
        <p className="text-lg leading-6 mb-6 text-left">It gives you a wordprocessor-like experience for media editing.</p>
        <Link
          href="https://github.com/bugbakery/audapolis"
          className="inline-block bg-black hover:bg-gray-700 text-white px-4 py-2 rounded-md mb-2 mr-2"
        >
          Learn More →
        </Link>
      </Block>
    </Page>
  );
}

function Hero() {
  return (
    <div className="flex flex-row gap-10 items-end justify-center my-12 lg:my-36 lg:mx-4 flex-nowrap">
      <div className="text-left items-start flex flex-col">
        <div className='flex flex-row relative mx-auto'>
          <h1 className={clsx(
            "text-[calc(min(50px,10vw_+_3px))] lg:text-[calc(min(60px,3.8vw_+_12px))]",
            "font-semibold mb-6 leading-tight w-max",
            "pr-[170px] pt-[40px] md:pr-[240px] md:pt-[110px]",
            "max-[480px]:text-[30px] max-[480px]:pr-[110px] max-[480px]:pt-[30px] ",
          )}>
            The Vegan
            <br />
            Bug Bakery
          </h1>
          <Image
            src={LogoSrc}
            alt="the logo of the Vegan Bug Bakery: a bug with a little chef hat on it in emoji style."
            className="md:w-60 position absolute right-0 md:top-0 w-40 max-[480px]:w-28 "
          />
        </div>
        <p className="text-lg leading-6 mb-6 max-w-sm">
          We build open-source tools for audio editing and transcription.
        </p>
      </div>

    </div>
  );
}

function Block({
  children,
  heading,
  image,
  imageOnRight = false,
}: {
  children: ReactNode;
  heading: ReactNode;
  image: ReactNode;
  imageOnRight?: boolean;
}) {
  return (
    <div className="flex flex-col md:flex-row lg:gap-10 gap-4 items-center my-6 sm:my-36 justify-center mt-16 mx-4">
      <div
        className={clsx(
          'text-center md:text-left items-center md:items-start flex flex-col flex-grow max-w-sm',
          !imageOnRight && 'md:order-last',
        )}
      >
        <h2 className="text-4xl font-semibold mb-6 leading-tight px-8 md:px-0">{heading}</h2>
        {children}
      </div>
      <div className={clsx('flex items-center')}>{image}</div>
    </div>
  );
}
