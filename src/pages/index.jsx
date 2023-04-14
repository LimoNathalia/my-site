import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { GitHubIcon, LinkedInIcon } from '../components/SocialIcons';
import logoNaos from '../images/logos/naos.svg';
import image1 from '../images/photos/image-1.png';
import image2 from '../images/photos/image-2.png';
import image3 from '../images/photos/image-3.png';
import image4 from '../images/photos/image-4.png';
import image5 from '../images/photos/image-5.png';
import portraitImage from '../images/avatar.jpg';

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-white stroke-black"
      />
      <path d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6" className="stroke-black" />
    </svg>
  );
}

function TelefonIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fill-rule="evenodd"
        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
        clip-rule="evenodd"
      />
    </svg>
  );
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-white stroke-white"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-primary"
      />
    </svg>
  );
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link rel="noopener noreferrer" target="_blank" className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-black transition group-hover:fill-primary" />
    </Link>
  );
}
function SocialLinkAbout({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link href={href} className="group flex items-center text-lg font-medium text-white transition hover:text-black">
        <Icon className="h-6 w-6 flex-none fill-white transition group-hover:fill-black" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2'];

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-black sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function Resume() {
  let resume = [
    {
      company: 'naos GmbH',
      title: 'Frontend Developer',
      logo: logoNaos,
      start: '2020',
      end: 'Present',
      description:
        'Naos develop internal talents (Software Development, Sales, Marketing) to combine with external partners. The aim is to found innovative companies that meet real market needs, are profitable and have growth potential. (Products)',
    },
  ];

  return (
    <div className="rounded-2xl border border-[#A179AF] bg-black p-6">
      <h2 className="flex text-sm font-semibold text-white">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work Experience</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex flex-col">
            <div className="flex gap-4">
              <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-white shadow-md shadow-black ring-1 ring-white">
                <Image src={role.logo} alt="naos" className="h-7 w-7" unoptimized />
              </div>
              <dl className="flex flex-auto flex-wrap gap-x-2">
                <dt className="sr-only">Company</dt>
                <dd className="w-full flex-none text-sm font-medium text-white">{role.company}</dd>
                <dt className="sr-only">Role</dt>
                <dd className="text-xs text-white">{role.title}</dd>
                <dt className="sr-only">Date</dt>
                <dd
                  className="ml-auto text-xs text-white"
                  aria-label={`${role.start.label ?? role.start} until ${role.end.label ?? role.end}`}
                >
                  <time dateTime={role.start.dateTime ?? role.start}>{role.start.label ?? role.start}</time>{' '}
                  <span aria-hidden="true">—</span>{' '}
                  <time dateTime={role.end.dateTime ?? role.end}>{role.end.label ?? role.end}</time>
                </dd>
              </dl>
            </div>
            <div className="mt-4 text-white">
              <p> {role.description}</p>
            </div>
          </li>
        ))}
      </ol>
      <Button
        href="/Nathalia-Limo-CV.pdf"
        rel="noopener noreferrer"
        target="_blank"
        variant="secondary"
        className="group mt-6 w-full bg-white"
      >
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-primary transition group-active:stroke-primary" />
      </Button>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Nathalia Limo - Frontend Developer.</title>
        <meta name="description" content="Nathalia Limo - Frontend Developer." />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-zinc-800 text-4xl font-bold tracking-tight sm:text-5xl">
            Nathalia Limo - Frontend Developer.
          </h1>
          <p className="text-zinc-600 mt-6 text-base">
            I'm curious by nature and always looking for challenges and ways to develop myself further.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink href="https://github.com/LimoNathalia" aria-label="Follow on GitHub" icon={GitHubIcon} />
            <SocialLink
              href="https://www.linkedin.com/in/nathalia-limo-0a19b411b/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container id="about" className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="bg-zinc-100 aspect-square rotate-3 rounded-2xl object-cover"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-zinc-800 text-4xl font-bold tracking-tight sm:text-5xl">About me...</h1>
            <div className="text-zinc-600 mt-6 space-y-7 text-base">
              <p>
                I am a Frontend Developer from Venezuela based in Vienna looking {''}
                for a full-time Job. I'm curious by nature and always looking
                {''}
                for challenges and ways to develop myself further.{''}
              </p>
              <p>
                In the last years I have worked with web platform projects ranging from web-pages to web-apps using different
                frameworks and libraries. Nowadays I keep my focus on React.js, React Hooks, Next.js, Typescript and
                TailwindCSS
              </p>
              <p>Nowadays I keep my focus on React.js, React Hooks, Next.js, Typescript and TailwindCSS</p>
            </div>
          </div>
          <div id="contact" className="lg:pl-20">
            <ul role="list">
              <li>
                <strong>Born:</strong> Mai, 1995
              </li>
              <li>
                <strong>Based:</strong> Vienna, Austria
              </li>
              <li>
                <strong>Languages:</strong> Spanish (Native), English and German (Fluent)
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 gap-x-20 lg:max-w-none lg:grid-cols-2">
          <div id="experience" className="flex flex-col gap-16">
            <Resume />
          </div>
          <div>
            <div className="rounded-2xl border border-primary bg-primary p-6">
              <h2 className="flex items-center text-3xl font-semibold text-white">
                <TelefonIcon className="h-6 w-6 flex-none" />
                <span className="ml-3">Contact</span>
              </h2>
              <div id="contact" className="pt-[50px] text-white">
                <ul role="list">
                  <SocialLinkAbout href="https://github.com/LimoNathalia" icon={GitHubIcon} className="mt-4">
                    Follow on GitHub
                  </SocialLinkAbout>
                  <SocialLinkAbout
                    href="https://www.linkedin.com/in/nathalia-limo-0a19b411b/"
                    icon={LinkedInIcon}
                    className="mt-4"
                  >
                    Follow on LinkedIn
                  </SocialLinkAbout>
                  <SocialLinkAbout
                    href="mailto:nathalialimo1995@gmail.com"
                    icon={MailIcon}
                    className="mt-8 border-t border-black pt-8"
                  >
                    nathalialimo1995@gmail.com
                  </SocialLinkAbout>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
