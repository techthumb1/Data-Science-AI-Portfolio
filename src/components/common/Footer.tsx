import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-primary text-white text-center py-4 mt-auto w-full">
      <div className="container mx-auto">
        <p>© {new Date().getFullYear()} Jason Robinson. All rights reserved.</p>
        <div className="flex justify-center gap-12 mt-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/icons/github-white.png" width={20} height={20} alt="GitHub" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/icons/linkedin.png" width={20} height={20} alt="LinkedIn" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/icons/twitter.png" width={20} height={20} alt="Twitter" />
          </a>
        </div>
      </div>
    </footer>
  );
}
